/**SELL*/
/*
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
}*/

//Item Object
/*
App.Item = Ember.Object.extend({
    id: null,
    imgURL: "",
    init: function (imgURL) {
        this.image = "http://steamcommunity-a.akamaihd.net/economy/image/" +
            this.imgURL;
    }
});
*/



//WORKS





