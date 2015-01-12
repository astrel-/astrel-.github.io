var numberOfElementsPerPage = 20;
var currentPage = 1;

var inventoryTemplate;
var inventory;


show_inventory();

function show_inventory () {
  $.ajax( '/templates/inventoryTemplate.html' ).then( function (template)  {
    inventoryTemplate = template;
    inventory = new Ractive({
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
$.ajax({
  dataType: "json",
  url: '2.json',
  success: function (data) {
    doc = data;
    make();
    currentPage = 1;
    show_items(currentPage);
  }
});

function make(){
  descriptions = doc.rgDescriptions;
  keys = Object.keys(descriptions);
  console.log(descriptions);
};

function show_items(currentPage) {
  var currentItemNumber;
  //console.log(descriptions[keys[i]]);
  /*
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
  inventory.set('tradable', activeItem.tradable);*/
  //console.log(activeItem);
  //for (var itemNumber = numberOfElementsPerPage*(currentPage-1); itemNumber< ; itemNumber++) {
  for (var itemNumber = numberOfElementsPerPage*(currentPage-1); itemNumber <numberOfElementsPerPage*currentPage; itemNumber++) {
    currentItemNumber = itemNumber-numberOfElementsPerPage*(currentPage-1);
    item = descriptions[keys[itemNumber]];
    inventory.set('id['+currentItemNumber+']', item.market_name);
    inventory.set('imageURL['+currentItemNumber+']', item.icon_url);
  }
};

}

function show_next(){
  currentPage ++;
  show_items(currentPage);
};

