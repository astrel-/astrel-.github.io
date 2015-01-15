var numberOfElementsPerPage = 20;
var currentPage = 1;
var inventoryTemplate;
var inventory;
var descriptions;
var keys;


showInventory();

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

function showItem ( i ) {
    var activeItem = descriptions[keys[i]];
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
}

$("document").ready(function($){
    $( "#previous-page" ).click( function () {
        console.log("success");
        showItem ( 1 );
    })
})

function show_next(){
    console.log("success");
    showItem ( 1 );
};

