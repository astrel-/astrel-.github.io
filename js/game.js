var itemsPerPage = 10;
var game;

function choose_game ( e, game_number ) {
	$('.game-button').removeClass('active-game-button');
	$(e).addClass('active-game-button');
	var gameTemplate;
	$.ajax( '/templates/gameTemplate.html' ).done( function (template)  {
		gameTemplate = template;
		game = new Ractive({
			el: 'main',
			template: template,
			data : {
				game_chosen : game_number,
		  	}
		});
	});
}