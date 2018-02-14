 
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHJcbiQoJy5ncnVwby1wb3N0ZXJzJykuc2xpY2soe1xyXG4gIGluZmluaXRlOiB0cnVlLFxyXG4gIHNsaWRlc1RvU2hvdzogNCxcclxuICBzbGlkZXNUb1Njcm9sbDogNCxcclxuICBkb3RzOiBmYWxzZSxcclxuICBhcnJvd3M6IGZhbHNlLFxyXG4gIHNldHRpbmdzOiBcInVuc2xpY2tcIixcclxuICByZXNwb25zaXZlOiBbXHJcbiAgICB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IDc2OSxcclxuICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXVxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4kKCBkb2N1bWVudCApLnJlYWR5KCBmdW5jdGlvbigpe1xyXG5cdFxyXG5cdFxyXG5cclxuXHR2YXIgdGwgPSBuZXcgVGltZWxpbmVNYXgoKTtcclxuIFxyXG5cdHRsLmFkZCggVHdlZW5MaXRlLmZyb20oIFwiLnBhc2Etc1wiLCAxLCB7IGFscGhhOiAwfSkpO1xyXG5cdHRsLmFkZCggVHdlZW5MaXRlLmZyb20oIFwiLnJldG9cIiwgMSwgeyBhbHBoYTogMCwgc2NhbGU6IDAgfSksIFwiLT0wLjdcIiApO1xyXG5cdHRsLmFkZCggVHdlZW5MaXRlLmZyb20oIFwiLmFydGlzdGFzXCIsIDEsIHsgYWxwaGE6IDAgfSksIFwiLT0wLjdcIiApO1xyXG5cdHRsLmFkZCggVHdlZW5MaXRlLmZyb20oIFwiLmRlc2NyaXBcIiwgMSwgeyBhbHBoYTogMCwgc2NhbGU6IDAgfSksIFwiLT0wLjdcIiApO1xyXG5cdHRsLmFkZCggVHdlZW5MaXRlLmZyb20oIFwiLmZlc3RpdmFsXCIsIDEsIHsgYWxwaGE6IDB9KSwgXCIxXCIgKTtcclxuXHR0bC5hZGQoIFR3ZWVuTGl0ZS5mcm9tKCBcIi5zdGlja2Vyc1wiLCAxLCB7IGFscGhhOiAwfSksIFwiLT0wLjFcIiApO1xyXG5cdHRsLmFkZCggVHdlZW5MaXRlLmZyb20oIFwiLmJ0bjFcIiwgMSwgeyBhbHBoYTogMCwgeTpcIjEwXCJ9KSwgXCItPTAuMlwiICk7XHJcblxyXG59KTtcclxuXHJcbiQoXCIuaG92ZXJcIikubW91c2VsZWF2ZShcclxuICBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiaG92ZXJcIik7XHJcbiAgfVxyXG4pO1xyXG5cclxuLy9zY3JvbGwgZG93blxyXG4kKCdhW2hyZWYqPVwiI2NvbGxhZ2VcIl06bm90KFtocmVmPVwiI1wiXSknKS5jbGljayhmdW5jdGlvbigpIHtcclxuICBpZiAobG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sICcnKSA9PSB0aGlzLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCAnJykgJiYgbG9jYXRpb24uaG9zdG5hbWUgPT0gdGhpcy5ob3N0bmFtZSkge1xyXG4gICAgdmFyIHRhcmdldCA9ICQodGhpcy5oYXNoKTtcclxuICAgIHRhcmdldCA9IHRhcmdldC5sZW5ndGggPyB0YXJnZXQgOiAkKCdbbmFtZT0nICsgdGhpcy5oYXNoLnNsaWNlKDEpICsgJ10nKTtcclxuICAgIGlmICh0YXJnZXQubGVuZ3RoKSB7XHJcbiAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuICAgICAgICBzY3JvbGxUb3A6IHRhcmdldC5vZmZzZXQoKS50b3BcclxuICAgICAgfSwgMTAwMCk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG4iXSwiZmlsZSI6ImluZGV4LmpzIn0=
