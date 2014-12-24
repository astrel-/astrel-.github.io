var itemsPerPage = 10;
var game;

function choose_game ( e, game_number ) {
	$('.game_button').removeClass('active_game_button');
	$(e).addClass('active_game_button');
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