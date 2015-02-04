App.SellRoute = Ember.Route.extend(
    model: () ->
        data = 
            dota: {}
            csgo: {}
            steam: {}            
)

App.SellIndexRoute = Ember.Route.extend(
    redirect: () ->
        @transitionTo 'sellgame', 'dota'
        return
)

App.SellgameRoute = Ember.Route.extend(
    model: ( params ) ->
        if params.game == "dota"
            model = @modelFor( 'sell' ).dota
            if $.isEmptyObject( model )
                model.needsUpdate = true
                model.jsonURL = "json/dota2.json"
                model.game = "dota"
        else if params.game == "cs-go"
            model = @modelFor( 'sell' ).csgo
            if $.isEmptyObject( model )
                model.needsUpdate = true
                model.jsonURL = "json/csgo.json"
                model.game = "cs-go"
        else if params.game == "steam"
            model = @modelFor( 'sell' ).steam
            if $.isEmptyObject( model )
                model.needsUpdate = true
                model.jsonURL = "json/steam.json"
                model.game = "steam"
        if model.needsUpdate
            #Updating whole Sell Model

            if not model.currentPage
                model.currentPage = 1
                #model.currentPage = parseInt params.page
            return $.getJSON( model.jsonURL ).then( ( dataJSON ) -> 
                #console.log "js"
                model.needsUpdate = false
                model.items = App.sliceItems( App.parse( dataJSON ).items )
                model.pages = model.items.length
                App.fillLastPage( model.items[ model.pages - 1 ] )
                #Getting list of items from Sell Model
                pageModel = {}
                try
                    pageModel.items = model.items[model.currentPage-1]
                catch e
                    console.log e
                pageModel.game = params.game
                pageModel.pages = model.items.length
                pageModel.currentItem = pageModel.items[0]
                model.currentItem = pageModel.currentItem
                pageModel.currentPage = model.currentPage
                pageModel.previousPage =  if pageModel.currentPage > 1 then pageModel.currentPage - 1 else null
                pageModel.nextPage = if pageModel.currentPage < pageModel.pages then pageModel.nextPage = pageModel.currentPage + 1 else null
                pageModel
                )
        #if not model.currentPage
        #model.currentPage = parseInt params.page
        #Getting list of items from Sell Model
        pageModel = {}
        pageModel.items = model.items[model.currentPage-1]
        pageModel.game = params.game
        pageModel.pages = model.pages
        pageModel.currentPage = model.currentPage
        pageModel.currentItem = model.currentItem
            #Setting pages
        pageModel.previousPage =  if pageModel.currentPage > 1 then pageModel.currentPage - 1 else null
        pageModel.nextPage = if pageModel.currentPage < pageModel.pages then pageModel.nextPage = pageModel.currentPage + 1 else null
        pageModel

    actions:
        refreshList: ( game ) ->
            if game == "dota"
                model = @modelFor( 'sell' ).dota
            else if game == "cs-go"
                model = @modelFor( 'sell' ).csgo
            else if game == "steam"
                model = @modelFor( 'sell' ).steam
            model.needsUpdate = true
            @refresh()
            return
        showPage: ( game, page ) ->
            if game == "dota"
                model = @modelFor( 'sell' ).dota
            else if game == "cs-go"
                model = @modelFor( 'sell' ).csgo
            else if game == "steam"
                model = @modelFor( 'sell' ).steam
            model.currentPage = parseInt page
            @refresh()
            return
        test: () ->
            console.log "pressed"
)


App.SellgameIndexRoute = Ember.Route.extend
    redirect: ( model ) ->
        classid = model.currentItem.classid
        instanceid = model.currentItem.instanceid
        @transitionTo 'sellitem', classid, instanceid



###
    redirect: ( model ) ->
        classid = model.currentItem.classid
        instanceid = model.currentItem.instanceid
        console.log "redir"
        @transitionTo 'sellitem', classid, instanceid 
###

App.SellitemRoute = Ember.Route.extend(
    model: ( params ) ->
        game = @modelFor('sellgame').game
        if game == "dota"
            modelSell = @modelFor( 'sell' ).dota
            gamePicURL = '/pic/games/dota2.jpg'
        else if game == "cs-go"
            modelSell = @modelFor( 'sell' ).csgo
            gamePicURL = '/pic/games/csgo.jpg'
        else if game == "steam"
            modelSell = @modelFor( 'sell' ).steam
            gamePicURL = '/pic/games/steam.jpg'
        itemsPage = @modelFor( 'sellgame' ).items
        itemModel = ( item for item in itemsPage when item and 
                item.classid == params.classid and
                item.instanceid == params.instanceid )[0]
        modelSell.currentItem = itemModel
        itemModel.gamePicURL = gamePicURL
        itemModel
)

