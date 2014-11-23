var main;
var mainTemplate;
var right_sidebar;
var rightSidebarTemplate;

show_main();

//window.addEventListener('load',function(){
 // document.getElementById( 'sell' ).addEventListener( 'click', trying);
 // document.getElementById( 'logout' ).addEventListener( 'click', logout);
//});

function withdraw () {
	$.ajax( '/templates/withdrawTemplate.html' ).then( function (template)  {
		var withdrawTemplate = template;
		main = new Ractive({
						  el: 'main',
						  template: withdrawTemplate,
						  data : {
						  		gree: 'hello'
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
						  		gree: 'hello'
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
							  	gree: 'hello'
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
 
function radioClicked ( a ) {
	if ( a.value == 'y' ) 
		right_sidebar.set( 'signedIn', true );
	else 
		right_sidebar.set( 'signedIn', false);
};


document.getElementById( 'main_button' ).addEventListener( 'click', welcome);
document.getElementById( 'how_button' ).addEventListener( 'click', how);
document.getElementById( 'support_button' ).addEventListener( 'click', support);

function welcome () {
	ractive.set( 'title', 'Добро Пожаловать!' );
	make_nonactive();
	make_active(this);
}

function make_active (id) {
	id.style.backgroundColor = 'white';
}

function make_nonactive () {
	var doc = document.getElementsByClassName( 'nav_button' );
	for (var i = doc.length - 1; i >= 0; i--) {
		doc[i].style.backgroundColor = 'transparent';
	};
}

function support () {
	make_nonactive();
	make_active(this);
	ractive.set( 'title', 'Поддержка' );
}


function how () {
	make_nonactive();
	make_active(this);
	ractive.set( 'title', 'Как это работает' );
}
