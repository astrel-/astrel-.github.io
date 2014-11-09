var ractive = new Ractive({
						  el: 'main',
						  template: '#template',
						  data : {
							title: 'hey',
							text: 'oppa' }
						  });

document.getElementById( 'main_button' ).addEventListener( 'click', hel);
document.getElementById( 'how_button' ).addEventListener( 'click', hello);
document.getElementById( 'support_button' ).addEventListener( 'click', hell);

function hel () {
	ractive.set( 'title', 'hello' );
	make_nonactive();
	make_active(this);
}

function make_active (id) {
	id.style.backgroundColor = 'white';
}

function make_nonactive () {
	var doc = document.getElementsByClassName( 'but' );
	for (var i = doc.length - 1; i >= 0; i--) {
		doc[i].style.backgroundColor = 'transparent';
	};
}

function hell () {
	make_nonactive();
	make_active(this);
	ractive.set( 'title', 'sup' );
}


function hello () {
	make_nonactive();
	make_active(this);
	ractive.set( 'title', 'hey' );
}
