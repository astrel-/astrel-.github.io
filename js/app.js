App = Ember.Application.create();

App.Router.map(function() {
	//sidebar
	this.resource( "steam" );
	this.resource( "dota" );
	this.resource( "cs-go" );
	this.resource( "tf" );
	this.resource( "sell" );

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



function parse( dataJSON, onload ) {
    //onload = onload || false;
    var data = {items:[]};
    console.log( dataJSON.rgDescriptions );
    var keys = _.first( _.keys( dataJSON.rgDescriptions ), 20 );
    _.each(keys, createItem);
    
    function createItem( id ) {
        var item = {};
        item.id = id;
        item.image = "http://steamcommunity-a.akamaihd.net/economy/image/" + 
                        dataJSON.rgDescriptions[id].icon_url;
        data.items.push(item);
    }

    var n = 20 - data.items.length;
    if ( n != 0 ) {
        data.items.push.apply(data.items, _.range(n).map(function() {return null;}))
    }

    console.log(data);
    return data;
}

//

App.SellRoute = Ember.Route.extend({
    model: function() {
        var currentPage = 1;
        var is = _.range( 20 );
        var initData = {
            currentPage: currentPage,
            is: is
        };
        return $.getJSON( "json/dota2.json" ).then( function( dataJSON ) {
            //console.log( dataJSON );
            var data = parse( dataJSON, true );
            $.extend(data, initData);
            return data;
        });

    }
});


