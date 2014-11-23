var main;
var mainTemplate;
var right_sidebar;
var rightSidebarTemplate;

show_main();

//window.addEventListener('load',function(){
 // document.getElementById( 'sell' ).addEventListener( 'click', trying);
 // document.getElementById( 'logout' ).addEventListener( 'click', logout);
//});
function choose_gam ( e, i ) {
	var docs = document.getElementsByClassName( 'game_button' );
	//console.log(docs);
	for (var i = docs.length - 1; i >= 0; i--) {
		docs[i].style.backgroundColor = 'initial';
	};
	//docs[0].style.backgroundColor = 'initial';
	e.style.backgroundColor = 'yellow';
	console.log( e.style.backgroundColor );
	console.log( i );


}

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
 

//For debugging 
function radioClicked ( a ) {
	if ( a.value == 'y' ) 
		right_sidebar.set( 'signedIn', true );
	else 
		right_sidebar.set( 'signedIn', false);
};