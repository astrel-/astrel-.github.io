var loginRactive;


$(function() {
    var nav = $('#login');
    var container = $('#container');

    $(window)
    	.scroll(function () {
	        if ($(this).scrollTop() > 130) {
	            nav.addClass("f-nav");
	            container.css({'padding-top': '27px'}); //25px + 2px for borders
	        } else {
	            nav.removeClass("f-nav");
	            container.css({'padding-top': '0px'});
	        }
	    });

    /*$( ".game-button" )
    	.click(function() {
			var index = $( ".game-button" ).index( this ) + 1;
			console.log( index );
			choose_game( this, index );
		});*/
/*
    $( "#profile" )
    	.click(function() {
			showProfile();
		});*/
/*
	$.when( fetchData(), $.get( "templates/loginTemplate.html" )  )
	 .then(function( data, template ) {
		loginRactive = makeRactive( "login",
									template[0],
									data);
	});
*/
	// showInventory();
});
	
function fetchData() {
	var data = { 
		signedIn: false,
		user: {
			pic: "pic/av.jpg",
		 	name: 'Bubalus',
		 	money: 900
		}
	};
	return data;
}

function makeRactive( el, template, data ) {
	ractive = new Ractive({
		el: el,
		template: template,
		data: data
	});
	return ractive;
}


//For debugging 
function radioClicked ( a ) {
	if ( a.value == 'y' ) {
		loginRactive.set( 'signedIn', true ); 
	}
	else {
		loginRactive.set( 'signedIn', false);
	}
};

