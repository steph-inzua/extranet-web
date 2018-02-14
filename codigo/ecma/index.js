 
$('.grupo-posters').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  dots: false,
  arrows: false,
  settings: "unslick",
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
      }
    }
  ]
});





$( document ).ready( function(){
	
	

	var tl = new TimelineMax();
 
	tl.add( TweenLite.from( ".pasa-s", 1, { alpha: 0}));
	tl.add( TweenLite.from( ".reto", 1, { alpha: 0, scale: 0 }), "-=0.7" );
	tl.add( TweenLite.from( ".artistas", 1, { alpha: 0 }), "-=0.7" );
	tl.add( TweenLite.from( ".descrip", 1, { alpha: 0, scale: 0 }), "-=0.7" );
	tl.add( TweenLite.from( ".festival", 1, { alpha: 0}), "1" );
	tl.add( TweenLite.from( ".stickers", 1, { alpha: 0}), "-=0.1" );
	tl.add( TweenLite.from( ".btn1", 1, { alpha: 0, y:"10"}), "-=0.2" );

});

$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);

//scroll down
$('a[href*="#collage"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});
