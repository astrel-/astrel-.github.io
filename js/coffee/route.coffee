App.SellRoute = Ember.Route.extend(
    model: () ->
        data = 
            dota: {}
            csgo: {}
            steam: {}            
)

App.SellgameRoute = Ember.Route.extend(
    model: ( params ) ->
        if params.game == "dota"
            model = @modelFor( 'sell' ).dota
            if $.isEmptyObject( model )
                model.needsUpdate = true
                model.jsonURL = "json/dota2.json"
        else if params.game == "cs-go"
            model = @modelFor( 'sell' ).csgo
            if $.isEmptyObject( model )
                model.needsUpdate = true
                model.jsonURL = "json/csgo.json"
        else if params.game == "steam"
            model = @modelFor( 'sell' ).steam
            if $.isEmptyObject( model )
                model.needsUpdate = true
                model.jsonURL = "json/steam.json"
        if model.needsUpdate
            #Updating whole Sell Model
            model.currentPage = parseInt params.page
            return $.getJSON( model.jsonURL ).then( ( dataJSON ) -> 
                #console.log "js"
                model.needsUpdate = false
                model.items = App.sliceItems( App.parse( dataJSON ).items )
                model.pages = model.items.length
                App.fillLastPage( model.items[ model.pages - 1 ] )
                #Getting list of items from Sell Model
                pageModel = {}
                try
                    pageModel.items = model.items[model.currentPage-1]
                catch e
                    console.log e
                pageModel.pages = model.items.length
                pageModel
                )
        model.currentPage = parseInt params.page
            #Getting list of items from Sell Model
        pageModel = {}
        pageModel.items = model.items[model.currentPage-1]
        pageModel.pages = model.pages
        pageModel.currentPage = model.currentPage
            #Setting pages
        if pageModel.currentPage > 1
            pageModel.previousPage = pageModel.currentPage - 1
        if pageModel.currentPage < pageModel.pages
            pageModel.nextPage = pageModel.currentPage + 1
        pageModel
)
###
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
###