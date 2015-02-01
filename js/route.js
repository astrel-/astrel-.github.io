/*
App.SellgameRoute = Ember.Route.extend(
    model: ( params ) -> 
        return $.getJSON( jsonURL ).then( ( dataJSON ) -> 
            #var data = parse( dataJSON, currentPage );
            $.extend( data, App.parse( dataJSON ) )
            #console.log( data );
            
            data.itemsPage = data.items[data.currentPage-1];
            if ( data.currentPage > 1 ) 
                data.previousPage = data.currentPage - 1;
            else 
                data.previousPage = null;
            if ( data.currentPage < data.pages ) 
                data.nextPage = data.currentPage + 1;
            else 
                data.nextPage = null;
               
            data.game = params.game
            data.jsonURL = jsonURL
            console.log( data )
            data
            #return data;
        )
)
*/


(function() {
  App.SellRoute = Ember.Route.extend({
    model: function() {
      var data;
      return data = {
        dota: {},
        csgo: {},
        steam: {}
      };
    }
  });

  App.SellgameRoute = Ember.Route.extend({
    model: function(params) {
      var model;
      if (params.game === "dota") {
        model = this.modelFor('sell').dota;
        if ($.isEmptyObject(model)) {
          model.needsUpdate = true;
          model.jsonURL = "json/dota2.json";
        }
      } else if (params.game === "cs-go") {
        model = this.modelFor('sell').csgo;
        if ($.isEmptyObject(model)) {
          model.needsUpdate = true;
          model.jsonURL = "json/csgo.json";
        }
      } else if (params.game === "steam") {
        model = this.modelFor('sell').steam;
        if ($.isEmptyObject(model)) {
          model.needsUpdate = true;
          model.jsonURL = "json/steam.json";
        }
      }
      if (model.needsUpdate) {
        model.currentPage = parseInt(params.page);
        return $.getJSON(model.jsonURL).then(function(dataJSON) {
          var e, pageModel;
          console.log("js");
          model.needsUpdate = false;
          model.items = App.sliceItems(App.parse(dataJSON).items);
          model.pages = model.items.length;
          pageModel = {};
          try {
            pageModel.items = model.items[model.currentPage - 1];
          } catch (_error) {
            e = _error;
            console.log(e);
          }
          pageModel.pages = model.items.length;
          return pageModel;
        });
      }
      return model;
    }
  });

  /*
  App.SellgameRoute = Ember.Route.extend({
      model: function( params ) {
          var model;
          if ( params.game == "dota") {
              model = this.modelFor( 'sell' ).dota;
              if ( $.isEmptyObject( model ) ) {
                  model.needsUpdate = true;
                  model.jsonURL = "json/dota2.json";
              }
          }
          else if ( params.game == "cs-go" ){
              model = this.modelFor( 'sell' ).csgo;
              if ( $.isEmptyObject( model ) ) {
                  model.needsUpdate = true;
                  model.jsonURL = "json/csgo.json";
              }
          }
          else { 
              model = this.modelFor( 'sell' ).steam;
              if ( $.isEmptyObject( model ) ) {
                  model.needsUpdate = true;
                  model.jsonURL = "json/steam.json";
              }
          }
  
          if ( model.needsUpdate ) {
              //Updating whole Sell Model 
              model.needsUpdate = false;
          }
          else {
              //Getting list of items from Sell Model
          }
          return model;
      }
  });
  
  App.SellRoute = Ember.Route.extend({
      model: function() {
          var data = {
              dota: {},
              csgo: {},
              steam: {}
          };
          return data;
      } 
  });
  */


}).call(this);
