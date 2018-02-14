 
$( document ).ready( function(){
	
	var tl = new TimelineMax();
 
	tl.add( TweenLite.from( ".pasa-s", 1, { alpha: 0}));
	tl.add( TweenLite.from( ".reto", 1, { alpha: 0, scale: 0 }), "-=0.7" );

});

