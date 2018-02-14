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


