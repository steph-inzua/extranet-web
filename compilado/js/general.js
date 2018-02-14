$( document ).ready( function(){
    
    $('.control-menu').on('click', function(){
        $(this).toggleClass('active');
        $(".contenedor").toggleClass("cont-nav");
        $(".control-menu").toggleClass("control-marg");
        $("#nav-left").toggleClass("open");
        $("#main-right").toggleClass("two-columns");
        $("#header").toggleClass("w-85");
        $("#header-filter").toggleClass("w-85");
        $("body").toggleClass("noscroll");

        
    });
     $('.calendar-active').on('click', function(){
           $('#date-new').focus();
     });
     $('.noti-active').on('click', function(){
       $("body").toggleClass("noscroll");
     });
     $('.tab1a').on('click', function(){
      
        $(".tab1a + .tab-cliente-list-resp").toggleClass("aparece-ya");
    });
     $('.tab2a').on('click', function(){
      
        $(".tab2a + .tab-cliente-list-resp").toggleClass("aparece-ya");
    });
     $('.tab3a').on('click', function(){
      
        $(".tab3a + .tab-cliente-list-resp").toggleClass("aparece-ya");
    });
     $('.tab4a').on('click', function(){
      
        $(".tab4a + .tab-cliente-list-resp").toggleClass("aparece-ya");
    });
     $('.tab5a').on('click', function(){
      
        $(".tab5a + .tab-cliente-list-resp").toggleClass("aparece-ya");
    });
     $('.tab6a').on('click', function(){
      
        $(".tab6a + .tab-cliente-list-resp").toggleClass("aparece-ya");
    });

    $('.sel').each(function() {
      $(this).children('select').css('display', 'none');
      
      var $current = $(this);
      
      $(this).find('option').each(function(i) {
        if (i == 0) {
          $current.prepend($('<div>', {
            class: $current.attr('class').replace(/sel/g, 'sel__box')
          }));
          
          var placeholder = $(this).text();
          $current.prepend($('<span>', {
            class: $current.attr('class').replace(/sel/g, 'sel__placeholder'),
            text: placeholder,
            'data-placeholder': placeholder
          }));
          
          return;
        }
        
        $current.children('div').append($('<span>', {
          class: $current.attr('class').replace(/sel/g, 'sel__box__options'),
          text: $(this).text()
        }));
      });
    });

    // Toggling the `.active` state on the `.sel`.
    $('.sel').click(function() {
      $(this).toggleClass('active');
    });

    // Toggling the `.selected` state on the options.
    $('.sel__box__options').click(function() {
      var txt = $(this).text();
      var index = $(this).index();
      
      $(this).siblings('.sel__box__options').removeClass('selected');
      $(this).addClass('selected');
      
      var $currentSel = $(this).closest('.sel');
      $currentSel.children('.sel__placeholder').text(txt);
      $currentSel.children('select').prop('selectedIndex', index + 1);
    });

    $( ".menu .enlace" ).on("click", function( evt ){
        $( "#control-menu" ).prop( "checked", false);
    });
    
    $( ".open-modal1" ).on("click", function( evt ){
        $("#pedido-new").addClass("open-1");
        $("body").addClass("noscroll-desktop");
        
        
    });
    $( ".button-close" ).on("click", function( evt ){
        $("#pedido-new").removeClass("open-1");
        $("body").removeClass("noscroll-desktop");
        
    });




	$( ".formulario" )
        .find( "input[type=text], input[type=tel], input[type=tel]" )
        .on( "keypress", function( evt ) {
            var $c = $(evt.currentTarget);
            var caracter, anterior, futuro, patron;
            var chc = evt.charCode;
            if ( chc > 0 ) {
                caracter = String.fromCharCode( chc );
                anterior = $c.val();
                patron = new RegExp( $c.data("restriccion") );
                futuro = anterior + caracter;
                if ( patron.test( futuro ) != true ) {
                    evt.preventDefault();
                }
            }
        });

  // incrementar
    jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up"> </div><div class="quantity-button quantity-down"> </div></div>').insertAfter('.quantity input');
    jQuery('.quantity').each(function() {
      var spinner = jQuery(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });
    
});


      
$(document).on("click", ".editButton", function () {

    var section = $(this).closest(".formSection");
    var otherSections = $(".formSection").not(section);
    var inputs = section.find("input");
    var selects = section.find("select");

    section
      .addClass("readOnly");

    otherSections
      .addClass("disabled")
      .find('button').prop("disabled", true);

    oldValues = {};
    inputs
      .each(function () { oldValues[this.id] = $(this).val(); })
      .prop("disabled", false);
    selects
      .each(function () { oldValues[this.id] = $(this).val(); })
      .prop("disabled", false);

    $("select").msDropdown();
    
})




.on("click", ".cancelButton", function (e) {

    var section = $(this).closest(".formSection");
    var otherSections = $(".formSection").not(section);
    var inputs = section.find("input");
    var selects = section.find("select");


    section
      .removeClass("readOnly");

    otherSections
      .removeClass("disabled");

    $('button').prop("disabled", false);

    inputs
      .each(function() { $(this).val(oldValues[this.id]); })
      .prop("disabled", true);
    selects
      .each(function () { oldValues[this.id] = $(this).val(); })
      .prop("disabled", true)
 
    $(".ddcommon").addClass("novisible");
    $(".ddOutOfVision").addClass("visible_h");
    

    e.stopPropagation();
    e.preventDefault();
    

});



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJnZW5lcmFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoIGRvY3VtZW50ICkucmVhZHkoIGZ1bmN0aW9uKCl7XHJcbiAgICBcclxuICAgICQoJy5jb250cm9sLW1lbnUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQoXCIuY29udGVuZWRvclwiKS50b2dnbGVDbGFzcyhcImNvbnQtbmF2XCIpO1xyXG4gICAgICAgICQoXCIuY29udHJvbC1tZW51XCIpLnRvZ2dsZUNsYXNzKFwiY29udHJvbC1tYXJnXCIpO1xyXG4gICAgICAgICQoXCIjbmF2LWxlZnRcIikudG9nZ2xlQ2xhc3MoXCJvcGVuXCIpO1xyXG4gICAgICAgICQoXCIjbWFpbi1yaWdodFwiKS50b2dnbGVDbGFzcyhcInR3by1jb2x1bW5zXCIpO1xyXG4gICAgICAgICQoXCIjaGVhZGVyXCIpLnRvZ2dsZUNsYXNzKFwidy04NVwiKTtcclxuICAgICAgICAkKFwiI2hlYWRlci1maWx0ZXJcIikudG9nZ2xlQ2xhc3MoXCJ3LTg1XCIpO1xyXG4gICAgICAgICQoXCJib2R5XCIpLnRvZ2dsZUNsYXNzKFwibm9zY3JvbGxcIik7XHJcblxyXG4gICAgICAgIFxyXG4gICAgfSk7XHJcbiAgICAgJCgnLmNhbGVuZGFyLWFjdGl2ZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgJCgnI2RhdGUtbmV3JykuZm9jdXMoKTtcclxuICAgICB9KTtcclxuICAgICAkKCcubm90aS1hY3RpdmUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgJChcImJvZHlcIikudG9nZ2xlQ2xhc3MoXCJub3Njcm9sbFwiKTtcclxuICAgICB9KTtcclxuICAgICAkKCcudGFiMWEnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICBcclxuICAgICAgICAkKFwiLnRhYjFhICsgLnRhYi1jbGllbnRlLWxpc3QtcmVzcFwiKS50b2dnbGVDbGFzcyhcImFwYXJlY2UteWFcIik7XHJcbiAgICB9KTtcclxuICAgICAkKCcudGFiMmEnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICBcclxuICAgICAgICAkKFwiLnRhYjJhICsgLnRhYi1jbGllbnRlLWxpc3QtcmVzcFwiKS50b2dnbGVDbGFzcyhcImFwYXJlY2UteWFcIik7XHJcbiAgICB9KTtcclxuICAgICAkKCcudGFiM2EnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICBcclxuICAgICAgICAkKFwiLnRhYjNhICsgLnRhYi1jbGllbnRlLWxpc3QtcmVzcFwiKS50b2dnbGVDbGFzcyhcImFwYXJlY2UteWFcIik7XHJcbiAgICB9KTtcclxuICAgICAkKCcudGFiNGEnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICBcclxuICAgICAgICAkKFwiLnRhYjRhICsgLnRhYi1jbGllbnRlLWxpc3QtcmVzcFwiKS50b2dnbGVDbGFzcyhcImFwYXJlY2UteWFcIik7XHJcbiAgICB9KTtcclxuICAgICAkKCcudGFiNWEnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICBcclxuICAgICAgICAkKFwiLnRhYjVhICsgLnRhYi1jbGllbnRlLWxpc3QtcmVzcFwiKS50b2dnbGVDbGFzcyhcImFwYXJlY2UteWFcIik7XHJcbiAgICB9KTtcclxuICAgICAkKCcudGFiNmEnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICBcclxuICAgICAgICAkKFwiLnRhYjZhICsgLnRhYi1jbGllbnRlLWxpc3QtcmVzcFwiKS50b2dnbGVDbGFzcyhcImFwYXJlY2UteWFcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuc2VsJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgJCh0aGlzKS5jaGlsZHJlbignc2VsZWN0JykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgXHJcbiAgICAgIHZhciAkY3VycmVudCA9ICQodGhpcyk7XHJcbiAgICAgIFxyXG4gICAgICAkKHRoaXMpLmZpbmQoJ29wdGlvbicpLmVhY2goZnVuY3Rpb24oaSkge1xyXG4gICAgICAgIGlmIChpID09IDApIHtcclxuICAgICAgICAgICRjdXJyZW50LnByZXBlbmQoJCgnPGRpdj4nLCB7XHJcbiAgICAgICAgICAgIGNsYXNzOiAkY3VycmVudC5hdHRyKCdjbGFzcycpLnJlcGxhY2UoL3NlbC9nLCAnc2VsX19ib3gnKVxyXG4gICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB2YXIgcGxhY2Vob2xkZXIgPSAkKHRoaXMpLnRleHQoKTtcclxuICAgICAgICAgICRjdXJyZW50LnByZXBlbmQoJCgnPHNwYW4+Jywge1xyXG4gICAgICAgICAgICBjbGFzczogJGN1cnJlbnQuYXR0cignY2xhc3MnKS5yZXBsYWNlKC9zZWwvZywgJ3NlbF9fcGxhY2Vob2xkZXInKSxcclxuICAgICAgICAgICAgdGV4dDogcGxhY2Vob2xkZXIsXHJcbiAgICAgICAgICAgICdkYXRhLXBsYWNlaG9sZGVyJzogcGxhY2Vob2xkZXJcclxuICAgICAgICAgIH0pKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAkY3VycmVudC5jaGlsZHJlbignZGl2JykuYXBwZW5kKCQoJzxzcGFuPicsIHtcclxuICAgICAgICAgIGNsYXNzOiAkY3VycmVudC5hdHRyKCdjbGFzcycpLnJlcGxhY2UoL3NlbC9nLCAnc2VsX19ib3hfX29wdGlvbnMnKSxcclxuICAgICAgICAgIHRleHQ6ICQodGhpcykudGV4dCgpXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFRvZ2dsaW5nIHRoZSBgLmFjdGl2ZWAgc3RhdGUgb24gdGhlIGAuc2VsYC5cclxuICAgICQoJy5zZWwnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBUb2dnbGluZyB0aGUgYC5zZWxlY3RlZGAgc3RhdGUgb24gdGhlIG9wdGlvbnMuXHJcbiAgICAkKCcuc2VsX19ib3hfX29wdGlvbnMnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIHR4dCA9ICQodGhpcykudGV4dCgpO1xyXG4gICAgICB2YXIgaW5kZXggPSAkKHRoaXMpLmluZGV4KCk7XHJcbiAgICAgIFxyXG4gICAgICAkKHRoaXMpLnNpYmxpbmdzKCcuc2VsX19ib3hfX29wdGlvbnMnKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcclxuICAgICAgXHJcbiAgICAgIHZhciAkY3VycmVudFNlbCA9ICQodGhpcykuY2xvc2VzdCgnLnNlbCcpO1xyXG4gICAgICAkY3VycmVudFNlbC5jaGlsZHJlbignLnNlbF9fcGxhY2Vob2xkZXInKS50ZXh0KHR4dCk7XHJcbiAgICAgICRjdXJyZW50U2VsLmNoaWxkcmVuKCdzZWxlY3QnKS5wcm9wKCdzZWxlY3RlZEluZGV4JywgaW5kZXggKyAxKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoIFwiLm1lbnUgLmVubGFjZVwiICkub24oXCJjbGlja1wiLCBmdW5jdGlvbiggZXZ0ICl7XHJcbiAgICAgICAgJCggXCIjY29udHJvbC1tZW51XCIgKS5wcm9wKCBcImNoZWNrZWRcIiwgZmFsc2UpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgICQoIFwiLm9wZW4tbW9kYWwxXCIgKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCBldnQgKXtcclxuICAgICAgICAkKFwiI3BlZGlkby1uZXdcIikuYWRkQ2xhc3MoXCJvcGVuLTFcIik7XHJcbiAgICAgICAgJChcImJvZHlcIikuYWRkQ2xhc3MoXCJub3Njcm9sbC1kZXNrdG9wXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfSk7XHJcbiAgICAkKCBcIi5idXR0b24tY2xvc2VcIiApLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oIGV2dCApe1xyXG4gICAgICAgICQoXCIjcGVkaWRvLW5ld1wiKS5yZW1vdmVDbGFzcyhcIm9wZW4tMVwiKTtcclxuICAgICAgICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcIm5vc2Nyb2xsLWRlc2t0b3BcIik7XHJcbiAgICAgICAgXHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcblx0JCggXCIuZm9ybXVsYXJpb1wiIClcclxuICAgICAgICAuZmluZCggXCJpbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXRlbF0sIGlucHV0W3R5cGU9dGVsXVwiIClcclxuICAgICAgICAub24oIFwia2V5cHJlc3NcIiwgZnVuY3Rpb24oIGV2dCApIHtcclxuICAgICAgICAgICAgdmFyICRjID0gJChldnQuY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgICAgIHZhciBjYXJhY3RlciwgYW50ZXJpb3IsIGZ1dHVybywgcGF0cm9uO1xyXG4gICAgICAgICAgICB2YXIgY2hjID0gZXZ0LmNoYXJDb2RlO1xyXG4gICAgICAgICAgICBpZiAoIGNoYyA+IDAgKSB7XHJcbiAgICAgICAgICAgICAgICBjYXJhY3RlciA9IFN0cmluZy5mcm9tQ2hhckNvZGUoIGNoYyApO1xyXG4gICAgICAgICAgICAgICAgYW50ZXJpb3IgPSAkYy52YWwoKTtcclxuICAgICAgICAgICAgICAgIHBhdHJvbiA9IG5ldyBSZWdFeHAoICRjLmRhdGEoXCJyZXN0cmljY2lvblwiKSApO1xyXG4gICAgICAgICAgICAgICAgZnV0dXJvID0gYW50ZXJpb3IgKyBjYXJhY3RlcjtcclxuICAgICAgICAgICAgICAgIGlmICggcGF0cm9uLnRlc3QoIGZ1dHVybyApICE9IHRydWUgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgLy8gaW5jcmVtZW50YXJcclxuICAgIGpRdWVyeSgnPGRpdiBjbGFzcz1cInF1YW50aXR5LW5hdlwiPjxkaXYgY2xhc3M9XCJxdWFudGl0eS1idXR0b24gcXVhbnRpdHktdXBcIj4gPC9kaXY+PGRpdiBjbGFzcz1cInF1YW50aXR5LWJ1dHRvbiBxdWFudGl0eS1kb3duXCI+IDwvZGl2PjwvZGl2PicpLmluc2VydEFmdGVyKCcucXVhbnRpdHkgaW5wdXQnKTtcclxuICAgIGpRdWVyeSgnLnF1YW50aXR5JykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIHNwaW5uZXIgPSBqUXVlcnkodGhpcyksXHJcbiAgICAgICAgaW5wdXQgPSBzcGlubmVyLmZpbmQoJ2lucHV0W3R5cGU9XCJudW1iZXJcIl0nKSxcclxuICAgICAgICBidG5VcCA9IHNwaW5uZXIuZmluZCgnLnF1YW50aXR5LXVwJyksXHJcbiAgICAgICAgYnRuRG93biA9IHNwaW5uZXIuZmluZCgnLnF1YW50aXR5LWRvd24nKSxcclxuICAgICAgICBtaW4gPSBpbnB1dC5hdHRyKCdtaW4nKSxcclxuICAgICAgICBtYXggPSBpbnB1dC5hdHRyKCdtYXgnKTtcclxuXHJcbiAgICAgIGJ0blVwLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IHBhcnNlRmxvYXQoaW5wdXQudmFsKCkpO1xyXG4gICAgICAgIGlmIChvbGRWYWx1ZSA+PSBtYXgpIHtcclxuICAgICAgICAgIHZhciBuZXdWYWwgPSBvbGRWYWx1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdmFyIG5ld1ZhbCA9IG9sZFZhbHVlICsgMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3Bpbm5lci5maW5kKFwiaW5wdXRcIikudmFsKG5ld1ZhbCk7XHJcbiAgICAgICAgc3Bpbm5lci5maW5kKFwiaW5wdXRcIikudHJpZ2dlcihcImNoYW5nZVwiKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBidG5Eb3duLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IHBhcnNlRmxvYXQoaW5wdXQudmFsKCkpO1xyXG4gICAgICAgIGlmIChvbGRWYWx1ZSA8PSBtaW4pIHtcclxuICAgICAgICAgIHZhciBuZXdWYWwgPSBvbGRWYWx1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdmFyIG5ld1ZhbCA9IG9sZFZhbHVlIC0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3Bpbm5lci5maW5kKFwiaW5wdXRcIikudmFsKG5ld1ZhbCk7XHJcbiAgICAgICAgc3Bpbm5lci5maW5kKFwiaW5wdXRcIikudHJpZ2dlcihcImNoYW5nZVwiKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgfSk7XHJcbiAgICBcclxufSk7XHJcblxyXG5cclxuICAgICAgXHJcbiQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCIuZWRpdEJ1dHRvblwiLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdmFyIHNlY3Rpb24gPSAkKHRoaXMpLmNsb3Nlc3QoXCIuZm9ybVNlY3Rpb25cIik7XHJcbiAgICB2YXIgb3RoZXJTZWN0aW9ucyA9ICQoXCIuZm9ybVNlY3Rpb25cIikubm90KHNlY3Rpb24pO1xyXG4gICAgdmFyIGlucHV0cyA9IHNlY3Rpb24uZmluZChcImlucHV0XCIpO1xyXG4gICAgdmFyIHNlbGVjdHMgPSBzZWN0aW9uLmZpbmQoXCJzZWxlY3RcIik7XHJcblxyXG4gICAgc2VjdGlvblxyXG4gICAgICAuYWRkQ2xhc3MoXCJyZWFkT25seVwiKTtcclxuXHJcbiAgICBvdGhlclNlY3Rpb25zXHJcbiAgICAgIC5hZGRDbGFzcyhcImRpc2FibGVkXCIpXHJcbiAgICAgIC5maW5kKCdidXR0b24nKS5wcm9wKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcblxyXG4gICAgb2xkVmFsdWVzID0ge307XHJcbiAgICBpbnB1dHNcclxuICAgICAgLmVhY2goZnVuY3Rpb24gKCkgeyBvbGRWYWx1ZXNbdGhpcy5pZF0gPSAkKHRoaXMpLnZhbCgpOyB9KVxyXG4gICAgICAucHJvcChcImRpc2FibGVkXCIsIGZhbHNlKTtcclxuICAgIHNlbGVjdHNcclxuICAgICAgLmVhY2goZnVuY3Rpb24gKCkgeyBvbGRWYWx1ZXNbdGhpcy5pZF0gPSAkKHRoaXMpLnZhbCgpOyB9KVxyXG4gICAgICAucHJvcChcImRpc2FibGVkXCIsIGZhbHNlKTtcclxuXHJcbiAgICAkKFwic2VsZWN0XCIpLm1zRHJvcGRvd24oKTtcclxuICAgIFxyXG59KVxyXG5cclxuXHJcblxyXG5cclxuLm9uKFwiY2xpY2tcIiwgXCIuY2FuY2VsQnV0dG9uXCIsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgdmFyIHNlY3Rpb24gPSAkKHRoaXMpLmNsb3Nlc3QoXCIuZm9ybVNlY3Rpb25cIik7XHJcbiAgICB2YXIgb3RoZXJTZWN0aW9ucyA9ICQoXCIuZm9ybVNlY3Rpb25cIikubm90KHNlY3Rpb24pO1xyXG4gICAgdmFyIGlucHV0cyA9IHNlY3Rpb24uZmluZChcImlucHV0XCIpO1xyXG4gICAgdmFyIHNlbGVjdHMgPSBzZWN0aW9uLmZpbmQoXCJzZWxlY3RcIik7XHJcblxyXG5cclxuICAgIHNlY3Rpb25cclxuICAgICAgLnJlbW92ZUNsYXNzKFwicmVhZE9ubHlcIik7XHJcblxyXG4gICAgb3RoZXJTZWN0aW9uc1xyXG4gICAgICAucmVtb3ZlQ2xhc3MoXCJkaXNhYmxlZFwiKTtcclxuXHJcbiAgICAkKCdidXR0b24nKS5wcm9wKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG5cclxuICAgIGlucHV0c1xyXG4gICAgICAuZWFjaChmdW5jdGlvbigpIHsgJCh0aGlzKS52YWwob2xkVmFsdWVzW3RoaXMuaWRdKTsgfSlcclxuICAgICAgLnByb3AoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuICAgIHNlbGVjdHNcclxuICAgICAgLmVhY2goZnVuY3Rpb24gKCkgeyBvbGRWYWx1ZXNbdGhpcy5pZF0gPSAkKHRoaXMpLnZhbCgpOyB9KVxyXG4gICAgICAucHJvcChcImRpc2FibGVkXCIsIHRydWUpXHJcbiBcclxuICAgICQoXCIuZGRjb21tb25cIikuYWRkQ2xhc3MoXCJub3Zpc2libGVcIik7XHJcbiAgICAkKFwiLmRkT3V0T2ZWaXNpb25cIikuYWRkQ2xhc3MoXCJ2aXNpYmxlX2hcIik7XHJcbiAgICBcclxuXHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgXHJcblxyXG59KTtcclxuXHJcblxyXG4iXSwiZmlsZSI6ImdlbmVyYWwuanMifQ==
