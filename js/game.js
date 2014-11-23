var game;
var gameTemplate;

function choose_game ( e, i ) {
	make_active( e, i);
	$.ajax( '/templates/gameTemplate.html' ).then( function (template)  {
		gameTemplate = template;
		main = new Ractive({
							  el: 'main',
							  template: gameTemplate,
							  data : {
							  	game_chosen: i
							  }
							  });
});
}

function make_active ( e, i ) {
	var docs = document.getElementsByClassName( 'game_button' );
	//console.log(docs);
	for (var i = docs.length - 1; i >= 0; i--) {
		docs[i].style.backgroundColor = 'initial';
	};
	//docs[0].style.backgroundColor = 'initial';
	e.style.backgroundColor = 'yellow';
	//console.log( e.style.backgroundColor );
	//console.log( i );
}