(function() {
  App.parse = function(dataJSON) {
    var data, item, items, key, value, _ref;
    items = [];
    _ref = dataJSON.rgDescriptions;
    for (key in _ref) {
      value = _ref[key];
      item = App.Item.create({
        id: key,
        imgURL: value.icon_url
      });
      items.push(item);
    }
    return data = {
      items: items
    };
  };

  App.sliceItems = function(items) {
    var data, itemsPage, page;
    page = 0;
    data = [];
    while (1.) {
      itemsPage = items.slice(20 * page, 20 * (page + 1));
      if (itemsPage.length) {
        data.push(itemsPage);
      } else {
        break;
      }
      page += 1;
    }
    return data;
  };

  App.fillLastPage = function(pageItem) {
    return console.log(pageItem);
  };

  /*
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
  }
  */


}).call(this);
