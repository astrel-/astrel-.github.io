var itemsPerPage = 10;
var game;
var gameTemplate;

function choose_game ( e, game_number ) {
	//make_active( e, game_number);
	$.ajax( '/templates/gameTemplate.html' ).then( function (template)  {
		gameTemplate = template;
		game = new Ractive({
							  el: 'main',
							  template: gameTemplate,
							  data : {
							  	game_chosen : 2,//game_number,
							/*  	iterator: new Array( itemsPerPage ),
							  	items : {
							  		id : new Array( itemsPerPage ),
							  		imageURL : new Array( itemsPerPage ),
							  		name : new Array( itemsPerPage ),
							  		price : new Array( itemsPerPage ),
							  	},
							  	totalItems: 100,
							  	itemsStartingFrom:1*/
							  }
							  });
});




	/*for (var i = itemsPerPage-1; i >= 0; i--) {
		game.set( 'items.id['+i+']', i);
	};*/
}

function make_active ( e, i ) {
	var docs = document.getElementsByClassName( 'game_button' );
	for (var i = docs.length - 1; i >= 0; i--) {
		docs[i].style.backgroundColor = 'initial';
	};
	e.style.backgroundColor = 'yellow';
}