$( document ).on( "click", "a.suave", function( evt ) {
	var id = $( this ).attr( "href" );
	if ( $( id ).length > 0 ) {
		evt.preventDefault();
		$( ".table-form" ).removeClass( "visible" );
		$(id).addClass("visible");
		TweenMax.to( window, 0.5, { scrollTo: { y: $( ".table-form" ).outerHeight()}});
		if (window.history && window.history.pushState) {
			history.pushState("", document.title, id);
		}
	}
});

$( document ).ready( function(){
	
	var tl = new TimelineMax();
 

	tl.add( TweenLite.from( ".pasa-s", 1, { alpha: 0}));
	tl.add( TweenLite.from( ".reto", 1, { alpha: 0, scale: 0 }), "-=0.7" );
	tl.add( TweenLite.from( ".artistas", 1, { alpha: 0, scale: 0 }), "-=0.7" );
	tl.add( TweenLite.from( ".descrip", 1, { alpha: 0, scale: 0 }), "-=0.7" );

	tl.add( TweenLite.from( ".festival", 1, { alpha: 0}), "1" );

	tl.add( TweenLite.from( ".stickers", 1, { alpha: 0}), "-=0.1" );
 
	tl.add( TweenLite.from( ".btn1", 1, { alpha: 0, y:"10"}), "-=0.2" );


});

