(function() {
  App.parse = function(dataJSON) {
    var data, item, items, key, value, _ref;
    items = [];
    console.log(dataJSON.rgDescriptions);
    _ref = dataJSON.rgDescriptions;
    for (key in _ref) {
      value = _ref[key];
      item = App.Item.create({
        id: key,
        game: value.appid,
        classid: value.classid,
        instanceid: value.instanceid,
        descriptions: value.descriptions,
        marketName: value.market_name,
        marketable: value.marketable === 0 ? true : false,
        tradable: value.tradable === 0 ? true : false,
        nameColor: value.name_color,
        tags: value.tags,
        imgURL: value.icon_url,
        imgURLlarge: value.icon_url_large,
        type: value.type
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
    var n, _i, _results;
    n = 20 - pageItem.length;
    if (n) {
      return pageItem.push.apply(pageItem, (function() {
        _results = [];
        for (var _i = 1; 1 <= n ? _i <= n : _i >= n; 1 <= n ? _i++ : _i--){ _results.push(_i); }
        return _results;
      }).apply(this).map(function() {
        return null;
      }));
    }
  };

}).call(this);
