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


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb25vY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJCggZG9jdW1lbnQgKS5vbiggXCJjbGlja1wiLCBcImEuc3VhdmVcIiwgZnVuY3Rpb24oIGV2dCApIHtcclxuXHR2YXIgaWQgPSAkKCB0aGlzICkuYXR0ciggXCJocmVmXCIgKTtcclxuXHRpZiAoICQoIGlkICkubGVuZ3RoID4gMCApIHtcclxuXHRcdGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0JCggXCIudGFibGUtZm9ybVwiICkucmVtb3ZlQ2xhc3MoIFwidmlzaWJsZVwiICk7XHJcblx0XHQkKGlkKS5hZGRDbGFzcyhcInZpc2libGVcIik7XHJcblx0XHRUd2Vlbk1heC50byggd2luZG93LCAwLjUsIHsgc2Nyb2xsVG86IHsgeTogJCggXCIudGFibGUtZm9ybVwiICkub3V0ZXJIZWlnaHQoKX19KTtcclxuXHRcdGlmICh3aW5kb3cuaGlzdG9yeSAmJiB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUpIHtcclxuXHRcdFx0aGlzdG9yeS5wdXNoU3RhdGUoXCJcIiwgZG9jdW1lbnQudGl0bGUsIGlkKTtcclxuXHRcdH1cclxuXHR9XHJcbn0pO1xyXG5cclxuJCggZG9jdW1lbnQgKS5yZWFkeSggZnVuY3Rpb24oKXtcclxuXHRcclxuXHR2YXIgdGwgPSBuZXcgVGltZWxpbmVNYXgoKTtcclxuIFxyXG5cclxuXHR0bC5hZGQoIFR3ZWVuTGl0ZS5mcm9tKCBcIi5wYXNhLXNcIiwgMSwgeyBhbHBoYTogMH0pKTtcclxuXHR0bC5hZGQoIFR3ZWVuTGl0ZS5mcm9tKCBcIi5yZXRvXCIsIDEsIHsgYWxwaGE6IDAsIHNjYWxlOiAwIH0pLCBcIi09MC43XCIgKTtcclxuXHR0bC5hZGQoIFR3ZWVuTGl0ZS5mcm9tKCBcIi5hcnRpc3Rhc1wiLCAxLCB7IGFscGhhOiAwLCBzY2FsZTogMCB9KSwgXCItPTAuN1wiICk7XHJcblx0dGwuYWRkKCBUd2VlbkxpdGUuZnJvbSggXCIuZGVzY3JpcFwiLCAxLCB7IGFscGhhOiAwLCBzY2FsZTogMCB9KSwgXCItPTAuN1wiICk7XHJcblxyXG5cdHRsLmFkZCggVHdlZW5MaXRlLmZyb20oIFwiLmZlc3RpdmFsXCIsIDEsIHsgYWxwaGE6IDB9KSwgXCIxXCIgKTtcclxuXHJcblx0dGwuYWRkKCBUd2VlbkxpdGUuZnJvbSggXCIuc3RpY2tlcnNcIiwgMSwgeyBhbHBoYTogMH0pLCBcIi09MC4xXCIgKTtcclxuIFxyXG5cdHRsLmFkZCggVHdlZW5MaXRlLmZyb20oIFwiLmJ0bjFcIiwgMSwgeyBhbHBoYTogMCwgeTpcIjEwXCJ9KSwgXCItPTAuMlwiICk7XHJcblxyXG5cclxufSk7XHJcblxyXG4iXSwiZmlsZSI6ImNvbm9jZS5qcyJ9
