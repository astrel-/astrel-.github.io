var main;
var mainTemplate;
var loginRactive;
var loginTemplate;

//show_main();
login();


$("document").ready(function($){
    var nav = $('#login');
    var container = $('#container');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 130) {
            nav.addClass("f-nav");
            container.css({'padding-top': '27px'}); //25px + 2px for borders
        } else {
            nav.removeClass("f-nav");
            container.css({'padding-top': '0px'});
        }
    });
});

$('.game-button').click(function() {
	console.log('Hey');
});

$('#my-profile').click(function() {
	
});

function login () {
	$.ajax( '/templates/login.html' ).then( function (template)  {
	loginTemplate = template;
	loginRactive = new Ractive({
						  el: 'login',
						  template: loginTemplate,
						  data : {
							signedIn: false,
							user : {
								pic: 'av.jpg',
								name: 'Bubalus',
								money: 900
							}
							}
						  });
});
}


//For debugging 
function radioClicked ( a ) {
	if ( a.value == 'y' ) 
		loginRactive.set( 'signedIn', true );
	else 
		loginRactive.set( 'signedIn', false);
};

function withdraw () {
	$.ajax( '/templates/withdrawTemplate.html' ).then( function (template)  {
		var withdrawTemplate = template;
		main = new Ractive({
						  el: 'main',
						  template: withdrawTemplate,
						  data : {
						  	}
	    });
	});
}

function deposit () {
	$.ajax( '/templates/depositTemplate.html' ).then( function (template)  {
		var depositTemplate = template;
		main = new Ractive({
						  el: 'main',
						  template: depositTemplate,
						  data : {
						  	}
	    });
	});
}

function logout () {
	right_sidebar.set( 'signedIn', true);
	show_main();
};

function show_main () {
	$.ajax( '/templates/mainTemplate.html' ).then( function (template)  {
		mainTemplate = template;
		main = new Ractive({
							  el: 'main',
							  template: mainTemplate,
							  data : {
							  }
							  });
});
}


$.ajax( '/templates/rightSidebarTemplate.html' ).then( function (template)  {
	rightSidebarTemplate = template;
	right_sidebar = new Ractive({
						  el: 'right_sidebar',
						  template: rightSidebarTemplate,
						  data : {
							signedIn: false,
							user : {
								pic: 'av.jpg',
								name: 'Bubalus',
								money: 900
							}
							}
						  });
});
 

