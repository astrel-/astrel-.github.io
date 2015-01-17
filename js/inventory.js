var numberOfElementsPerPage = 20;
var inventoryTemplate;
var inventoryRactive;



showInventory2();

function showInventory2() {
    $.when( fetchDataInventory(), $.ajax( "templates/inventoryTemplate.html" ))
     .then(function( data, template ) {
        console.log( data );
        //console.log( template[0] );
        inventoryRactive = makeRactive( "main", template[0], data);
        //console.log( inventoryRactive );
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
        url: 'json/dota2.json',
        success: function ( dataJSON ) { 
            parse1 ( dataJSON, data, true ); 
            //showItem1(0);
            console.log( dataJSON );
        }
    });
    return data;
}

function parse1( dataJSON, data, onload) {
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

function showItem1( e ) {
    $.ajax({
        dataType: "json",
        url: 'json/dota2.json',
        success: function ( dataJSON ) { 
            var descriptions = dataJSON.rgDescriptions;
            activeItem = descriptions[ e.id ];
            console.log( activeItem );
            currentItem = parseInfoForItem( activeItem );
            inventoryRactive.set( "currentItem", currentItem );
        }
    });
}

function showInventory () {
    //var doc;
    //var descriptions;
    //var keys;

    loadTemplate();
    loadJSON()
        //.done( function() {showItem(); });
    //showItem();




    function show_items(currentPage) {
        var currentItemNumber;
  
        var activeItem = descriptions[keys[0]];
        inventory.set('activeItemURL', activeItem.icon_url);
        inventory.set('name', activeItem.name);
        inventory.set('appid', activeItem.appid);
        inventory.set('type', activeItem.type);
        inventory.set('description', activeItem.descriptions[0].value);
        inventory.set('tags.quality', activeItem.tags[0].name);
        inventory.set('tags.rarity', activeItem.tags[1].name);
        inventory.set('tags.type', activeItem.tags[2].name);
        inventory.set('tags.slot', activeItem.tags[3].name);
        inventory.set('tags.hero', activeItem.tags[4].name);
        inventory.set('tradable', activeItem.tradable);
        //console.log(activeItem);
    };
}



function loadTemplate () {
    $.ajax( "templates/inventoryTemplate.html" ).then( function (template)  {
        inventoryTemplate = template;
        inventory = new Ractive({
            el: 'main',
            template: inventoryTemplate,
            data: {
                currentPage: 1,
                items: new Array( numberOfElementsPerPage ),
                id: new Array( numberOfElementsPerPage ),
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
        });
    });

}


function loadJSON () {
    $.ajax({
        dataType: "json",
        url: 'json/dota2.json',
        success: function ( data ) { 
            parse ( data ); 
            showItem(0);
        }
    });
}

function parse ( data ) {
    descriptions = data.rgDescriptions;
    keys = Object.keys(descriptions);
    console.log(inventory.currentPage);
    for (var itemNumber = numberOfElementsPerPage*(currentPage-1); itemNumber <numberOfElementsPerPage*currentPage; itemNumber++) {
        currentItemNumber = itemNumber-numberOfElementsPerPage*(currentPage-1);
        item = descriptions[keys[itemNumber]];
        try {
            inventory.set('id['+currentItemNumber+']', item.market_name);
            inventory.set('imageURL['+currentItemNumber+']', item.icon_url);
            console.log(item.market_name);
        }
        catch (e) {
            inventory.set('id['+currentItemNumber+']', null);
            inventory.set('imageURL['+currentItemNumber+']', null);
            console.log("finished");
        }
    }

}

$("document").ready(function($){
    $( "#previous-page" ).click( function () {
        console.log("success");
        showItem ( 1 );
    })
})

function show_next(){
    console.log(this);
    var index = $( ".idlol" ).index( this );
    console.log( index );
    showItem ( index );
};

