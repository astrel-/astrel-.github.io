var inventoryTemplate;
var ractive;
$.ajax( '/templates/inventoryTemplate.html' ).then( function (template)  {
  inventoryTemplate = template;
  ractive = new Ractive({
    el: 'main',
    template: inventoryTemplate,
    data: {
      imageURL: '',
      marketName: '',
      marketable: 1,
      tradable: 1,
      type: '',
      tags: {
        quality: 'try',
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
    show(numberOfItem);
  }
});

function make(){
  descriptions = doc.rgDescriptions;
  keys = Object.keys(descriptions);
};

function show(i) {
  //console.log(descriptions[keys[i]]);
  item = descriptions[keys[i]];
  console.log(item);
  ractive.set('imageURL', item.icon_url);
  ractive.set('marketName', item.market_name);
  ractive.set('marketable', item.marketable);
  ractive.set('tradable', item.tradable);
  ractive.set('type', item.type);
  ractive.set('tags.quality', item.tags[0].name);
  ractive.set('tags.rarity', item.tags[1].name);
  ractive.set('tags.type', item.tags[2].name);
  ractive.set('tags.slot', item.tags[3].name);
  ractive.set('tags.hero', item.tags[4].name);
};

function show_next(){
  numberOfItem ++;
  show(numberOfItem);
};



//var inventoryJSON = JSON.stringify( 2.json );
//var inventoryObj = JSON.parse( inventoryJSON );
//console.log(inventoryObj);
//console.log(inventory.rgDescripions.length)
//console.log(inventory.rgInventory.length)



//http://steamcommunity.com/profiles/76561198004282448/inventory/json/570/2
//http://steamcommunity.com/profiles/76561198004282448/inventory/json/753/6