/*
var ractive = new Ractive({
						  el: 'main',
						  template: '#template',
						  data : {
							title: 'Добро Пожаловать!',
							text: 'oppa' }
						  });*/

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
