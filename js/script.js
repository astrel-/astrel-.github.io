var ractive = new Ractive({
						  el: 'main',
						  template: '#template',
						  data : {
							title: 'hey',
							text: 'oppa' }
						  });
/*

document.getElementById( 'template' ).addEventListener( 'click', function () {
													ractive.set( 'title', 'hello');
													});
*/
/*
document.getElementById( 'main_button' ).addEventListener( 'click', function () {
													   alert('hello');
													   });
*/
document.getElementById( 'main_button' ).addEventListener( 'click', hel);
document.getElementById( 'how_button' ).addEventListener( 'click', hello);
document.getElementById( 'support_button' ).addEventListener( 'click', hell);

function hel () {
	ractive.set( 'title', 'hello' );
}

function hell () {
	ractive.set( 'title', 'sup' );
}




//document.getElementById( 'main_' ).addEventListener( 'click', hello);

function hello () {
	ractive.set( 'title', 'hey' );
}
/*
function myFunction(s) {
	var ractive = new Ractive({
							  el: 'main',
							  template: '#template',
							  data: { title: 'Privet', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." }
							  });
}

function myFunction1(s) {
	ractive.set('title', 'Poka');
}*/