var numberOfElementsPerPage = 20;
var inventoryTemplate;
var inventoryRactive;



showInventory();

function showInventory() {
    $.when( fetchDataInventory(), $.ajax( "templates/inventoryTemplate.html" ))
     .then(function( data, template ) {
        console.log( "data, template" );
        console.log( data );
        //console.log( template[0] );
        inventoryRactive = makeRactive( "main", template[0], data);
        console.log( "ractive created" );
        console.log( inventoryRactive.data );
     });
}



function fetchDataInventory() {
    var data = { 
        currentPage: 1,
        keys: new Array( numberOfElementsPerPage ),
        id: new Array( numberOfElementsPerPage ),
        images: new Array( numberOfElementsPerPage ),
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

    $.ajax({
        dataType: "json",
        url: 'json/csgo.json',
        success: function ( dataJSON ) { 
            parse ( dataJSON, data, true ); 
            //showItem1(0);
            console.log( "json parsed" );
        }
    });
    return data;
}

function parse( dataJSON, data, onload) {
    onload = onload || false;
    var descriptions = dataJSON.rgDescriptions;
    data.descriptions = descriptions;
    var keys = Object.keys(descriptions);
    data.keys = keys;
    console.log(keys);
    var currentPage = data.currentPage;
    for (var itemNumber = numberOfElementsPerPage*(currentPage-1); itemNumber <numberOfElementsPerPage*currentPage; itemNumber++) {
        currentItemNumber = itemNumber-numberOfElementsPerPage*(currentPage-1);
        item = descriptions[keys[itemNumber]];
        try {
            data.id[currentItemNumber] =  item.market_name;
            data.images[currentItemNumber] = item.icon_url;
            //console.log(item.market_name);
        }
        catch (e) {
            data.id[currentItemNumber] =  null;
            data.images[currentItemNumber] = null;
            //console.log("finished");
        }
    }
    if ( onload ) {
        var activeItem = descriptions[keys[0]];
        parseInfoForItem( activeItem, data );
    }
}

function parseInfoForItem( activeItem, data ) {
    // FUCKING FIX THIS
    dota = {currentItem: {
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
        }};
    data = data || dota;
    data.currentItem.imageURL = activeItem.icon_url;
    data.currentItem.name = activeItem.name;
    data.currentItem.type = activeItem.type;
    data.currentItem.description = activeItem.descriptions[0].value;
    data.currentItem.tags.quality = activeItem.tags[0].name;
    data.currentItem.tags.rarity = activeItem.tags[1].name;
    data.currentItem.tags.type = activeItem.tags[2].name;
    data.currentItem.tags.slot = activeItem.tags[3].name;
    data.currentItem.tags.hero = activeItem.tags[4].name;
    data.currentItem.tradable =  activeItem.tradable;
    return data.currentItem;
}

function showItem( e ) {
    $.ajax({
        dataType: "json",
        url: 'json/csgo.json',
        success: function ( dataJSON ) { 
            var descriptions = dataJSON.rgDescriptions;
            activeItem = descriptions[ e.id ];
            console.log( activeItem );
            currentItem = parseInfoForItem( activeItem );
            inventoryRactive.set( "currentItem", currentItem );
        }
    });
}