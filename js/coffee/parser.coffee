App.parse = ( dataJSON ) -> 
    items = []
    console.log dataJSON.rgDescriptions
    for key, value of dataJSON.rgDescriptions
        item = App.Item.create(
            id: key
            game: value.appid
            classid: value.classid
            instanceid: value.instanceid
            descriptions: value.descriptions
            marketName: value.market_name
            marketable: if value.marketable == 0 then true else false
            tradable: if value.tradable == 0 then true else false
            nameColor: value.name_color
            tags: value.tags
            imgURL: value.icon_url
            imgURLlarge: value.icon_url_large
            type: value.type
            )
        items.push( item )
    data = 
        items: items

App.sliceItems = ( items ) ->
    page = 0
    data = []
    while (1)
        itemsPage = items.slice( 20*page, 20* ( page+1 ) )
        if itemsPage.length
            data.push itemsPage
        else 
            break
        page += 1
    data

App.fillLastPage = ( pageItem ) ->
    n = 20 - pageItem.length
    if n
        pageItem.push.apply pageItem, [1..n].map () -> null 