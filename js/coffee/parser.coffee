App.parse = ( dataJSON ) -> 
    items = []
    for key, value of dataJSON.rgDescriptions
        item = App.Item.create(
            id: key
            imgURL: value.icon_url
            )
        items.push( item )
    data = 
        items: items


###
function parse( dataJSON ) {

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
}###