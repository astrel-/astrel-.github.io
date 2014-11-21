var numberOfElementsPerPage = 20;
var inventoryTemplate;
var ractive;
$.ajax( '/templates/inventoryTemplate.html' ).then( function (template)  {
  inventoryTemplate = template;
  ractive = new Ractive({
    el: 'main',
    template: inventoryTemplate,
    data: {
      activeItemURL: '',
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


var doc;
var descriptions;
var keys;
var numberOfItem;
$.ajax({
  dataType: "json",
  url: '2.json',
  success: function (data) {
    doc = data;
    make();
    numberOfItem = 0;
    showItems(numberOfItem);
  }
});

function make(){
  descriptions = doc.rgDescriptions;
  keys = Object.keys(descriptions);
};

function showItems(i) {
  //console.log(descriptions[keys[i]]);
  var activeItem = descriptions[keys[0]];
  ractive.set( 'activeItemURL', activeItem.icon_url);
  ractive.set('name', activeItem.name);
  ractive.set('appid', activeItem.appid);
  ractive.set('type', activeItem.type);
  ractive.set('description', activeItem.descriptions[0].value);
  ractive.set('tags.quality', activeItem.tags[0].name);
  ractive.set('tags.rarity', activeItem.tags[1].name);
  ractive.set('tags.type', activeItem.tags[2].name);
  ractive.set('tags.slot', activeItem.tags[3].name);
  ractive.set('tags.hero', activeItem.tags[4].name);
  ractive.set('tradable', activeItem.tradable);
  console.log(activeItem);
  for (var itemNumber = i; itemNumber <numberOfElementsPerPage; itemNumber++) {
    item = descriptions[keys[itemNumber]];
    //console.log(item);
    ractive.set('id['+itemNumber+']', item.market_name);
    ractive.set('imageURL['+itemNumber+']', item.icon_url);
    /*ractive.set('marketable', item.marketable);
    ractive.set('tradable', item.tradable);
    ractive.set('type', item.type);
    ractive.set('tags.quality', item.tags[0].name);
    ractive.set('tags.rarity', item.tags[1].name);
    ractive.set('tags.type', item.tags[2].name);
    ractive.set('tags.slot', item.tags[3].name);
    ractive.set('tags.hero', item.tags[4].name);*/
  }
};

function show_next(){
  numberOfItem ++;
  show(numberOfItem);
};

function myfunc () {
  alert('2');
}

var docs = document.getElementsByClassName( 'idlol' );
console.log(docs);

for (var i=0; i<docs.length; i++) {
  console.log(docs[i]);
  docs[i].addEventListener( 'click', myfunc);
}







//var inventoryJSON = JSON.stringify( 2.json );
//var inventoryObj = JSON.parse( inventoryJSON );
//console.log(inventoryObj);
//console.log(inventory.rgDescripions.length)
//console.log(inventory.rgInventory.length)



//http://steamcommunity.com/profiles/76561198004282448/inventory/json/570/2
//http://steamcommunity.com/profiles/76561198004282448/inventory/json/753/6