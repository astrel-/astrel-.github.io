App = Ember.Application.create();

App.Router.map(function() {
	//sidebar
	this.resource( "steam" );
	this.resource( "dota" );
	this.resource( "cs-go" );
	this.resource( "tf" );

    //this.resource( "sell", {path: ":page" });
    this.resource( "sell", function() {
        this.resource( "sellgame", {path: "/:game/:page"});
    }); 

	this.resource( "faq" );
	this.resource( "about" );
});

/**TEMPLATE**/

Ember.Handlebars.helper('show-items', function( items, page, options ) {
    var ret = "";
    for (var i = 0; i < 20; i++) {
        if (items[i])
            ret += "<div class='item-holder' "+items[i].id+">"+
                "{{#link-to sellgame dota 2}}{{/link-to}}"+
                "<a class='idlol' "+items[i].id+">"+""+"</a>"+"</div>";
        else 
            ret += "<div class='item-holder'></div>"
    //    console.log(items[i].id);
    }
  //var escaped = Handlebars.Utils.escapeExpression(value);
  return new Ember.Handlebars.SafeString(ret);
});


/**LOGIN**/

App.ApplicationController = Ember.Controller.extend({
	name: null,
	money: null,
	actions: {
		logIn: function(){
			
			//console.log("Logged in");
			this.set("name", "Bubalus");
			this.set("money", 900);
		},
		logOut :function() {
			//console.log("Logged out");
			this.set("name", null);
			this.set("money", null);
		}
	}
});


/**SELL*/




var numberOfElementsPerPage = 20;

function initData() {
	var is = _.range(1, numberOfElementsPerPage+1);
	var currentPage = 1;
	var data = {
		is:	is,
		currentPage: currentPage
	};
	return data
}



function parse( dataJSON ) {
    var data = {items:[]};
    var items = [];
    //console.log( dataJSON.rgDescriptions );
    var keys = _.keys( dataJSON.rgDescriptions);
    //keys = keys.slice(20*(currentPage-1),20*currentPage);
    _.each(keys, createItem);
    sliceList( items );
    data.pages = data.items.length;
    fixLastPage();
    
    function createItem( id ) {
        var item = {};
        item.id = id;
        item.image = "http://steamcommunity-a.akamaihd.net/economy/image/" + 
                        dataJSON.rgDescriptions[id].icon_url;
        items.push(item);
    }

    function sliceList( items ) {
        var page = 0;
        while (1) {
            itemsPage = items.slice(20*page, 20*(page+1));
            if ( itemsPage.length )
                data.items.push(itemsPage);
            else 
                break;
            page++;
        }
    }

    function fixLastPage() {
        var lastPage = _.last(data.items);
        var n = 20 - lastPage.length;
        if ( n > 0 ) {
            lastPage.push.apply(lastPage, _.range(n).map(function() {return null;}))
        }
    }

//    console.log(data);
    return data;
}

//Item Object

App.Item = Ember.Object.extend({
    id: null,
    imgURL: "",
    init: function (imgURL) {
        this.image = "http://steamcommunity-a.akamaihd.net/economy/image/" +
            this.imgURL;
    }
});

var item = App.Item.create({
    id: 1,
    imgURL: "hellosjgioi"
});

console.log(item.image);

//WORKS

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
/*
App.SellgameRoute = Ember.Route.extend({
    model: function( params ) {
        //console.log( params.page );
        var jsonURL = "";
        if ( params.game == "dota") {
            jsonURL = "json/dota2.json";
        }
        else if ( params.game == "cs-go" ){
            jsonURL = "json/csgo.json";
        }
        else { 
            jsonURL = "json/steam.json";
        }
        console.log(params);
        return $.getJSON( jsonURL ).then( function( dataJSON ) {
            var data = {currentPage: parseInt(params.page)};
          //  var data = parse( dataJSON, currentPage );
            $.extend(data, parse( dataJSON ) );
            data.itemsPage = data.items[data.currentPage-1];
            if ( data.currentPage > 1 ) 
                data.previousPage = data.currentPage - 1;
            else 
                data.previousPage = null;
            if ( data.currentPage < data.pages ) 
                data.nextPage = data.currentPage + 1;
            else 
                data.nextPage = null;
            data.game = params.game;
            data.jsonURL = jsonURL;
            return data;
        });
    }
});
*/
