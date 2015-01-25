App = Ember.Application.create();

App.Router.map(function() {
	//sidebar
	this.resource( "steam" );
	this.resource( "dota" );
	this.resource( "cs-go" );
	this.resource( "tf" );

	//this.resource( "sell", function() {
      //  this.resource( "sell-page", { path: ":page"});
    //});
    //this.resource( "sell", {path: ":page" });
    this.resource( "sell", { path: "/sell/:page"} ); 

	//nav
	this.resource( "faq" );
	this.resource( "about" );
});

/**LOGIN**/

App.ApplicationController = Ember.Controller.extend({
	name: null,
	money: null,
	actions: {
		logIn: function(){
			controller.set("model")
			//console.log("Logged in");
			//this.set("name", "Bubalus");
			//this.set("money", 900);
		},
		logOut :function() {
			//console.log("Logged out");
			this.set("name", null);
			this.set("money", null);
		}
	}
});



/*function fetchData() {
	var is = _.range(1,21);
	var emptyArray = _.range(20).map(function () { return "" });
	var data = { 
		is: is,
        currentPage: 1,
        keys: emptyArray,
        ids: emptyArray,
        images: emptyArray,
        currentItem: {
            imageURL: '',
            appid: '',
            name: '',
            marketable: 1,
            tradable: 1,
            type: '',
            description: '',
            tags: {
                quality: '',
                rarity: '',
                type: '',
                slot: '',
                hero: ''
            }
        }
    };
    return data;
};*/

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



function parse( dataJSON, currentPage ) {
    var data = {items:[]};
    console.log( dataJSON.rgDescriptions );
    var keys = _.keys( dataJSON.rgDescriptions )
    var numberOfItems = keys.length;
    data.pages = Math.floor((numberOfItems-1)/20)+1 || 1;
    keys = keys.slice(20*(currentPage-1),20*currentPage);
    _.each(keys, createItem);
    
    function createItem( id ) {
        var item = {};
        item.id = id;
        item.image = "http://steamcommunity-a.akamaihd.net/economy/image/" + 
                        dataJSON.rgDescriptions[id].icon_url;
        data.items.push(item);
    }

    //if (currentPage = data.pages)
    var n = 20 - data.items.length;
    if ( n > 0 ) {
        data.items.push.apply(data.items, _.range(n).map(function() {return null;}))
    }

    console.log(data);
    return data;
}

//

App.SellRoute = Ember.Route.extend({
    model: function( params ) {
        console.log( params.page );
        return $.getJSON( "json/csgo.json" ).then( function( dataJSON ) {
            var data = {currentPage: parseInt(params.page)};
          //  var data = parse( dataJSON, currentPage );
            $.extend(data, parse( dataJSON, data.currentPage ) );
            if ( data.currentPage > 1 ) data.previousPage = data.currentPage - 1;
            else data.previousPage = null;
            if ( data.currentPage < data.pages ) data.nextPage = data.currentPage + 1;
            else data.nextPage = null;
            return data;
        });
    }
});

App.SellController = Ember.ObjectController.extend({
    actions: {
        next: function() {
            var model = this.get( "model" );
            console.log(model);
            model.currentPage = 2;
            $.getJSON( "json/csgo.json" ).then( function( dataJSON ) {
                var data = parse( dataJSON, model.currentPage );
                //$.extend(data, {currentPage: 2);
                model = data;
            });
        }
    }
});

