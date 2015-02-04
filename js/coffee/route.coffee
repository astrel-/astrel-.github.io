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
        else if params.game == "cs-go"
            model = @modelFor( 'sell' ).csgo
            if $.isEmptyObject( model )
                model.needsUpdate = true
                model.jsonURL = "json/csgo.json"
        else if params.game == "steam"
            model = @modelFor( 'sell' ).steam
            if $.isEmptyObject( model )
                model.needsUpdate = true
                model.jsonURL = "json/steam.json"
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
)

###
App.SellgameIndexRoute = Ember.Route.extend(
    afterModel: ( model ) ->
        firstItem = model.items[0]
        classid = firstItem.itemid
        itemid = firstItem.itemid
        @transitionTo 'sellitem', classid, itemid
)
###

App.SellitemRoute = Ember.Route.extend(
    model: ( params ) ->
        if params
            itemsPage = @modelFor( 'sellgame' ).items
            itemModel = ( item for item in itemsPage when item and 
                    item.classid == params.classid and
                    item.instanceid == params.instanceid )[0]
            console.log "params"
        else
            console.log "noparams"
        itemModel
)

