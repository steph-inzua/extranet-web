$( document ).ready( function(){
    $(".fancyboxIframe").fancybox({
        maxWidth    : 700,
        maxHeight   : 400,
        fitToView   : false,
        width       : '90%',
        height      : '90%',
        autoSize    : false,
        closeClick  : false,
        openEffect  : 'elastic',
        closeEffect : 'fade',
        iframe: {
            scrolling : 'auto',
            preload   : true
        }
    });
     $(".fancybox").fancybox({
        openEffect  : 'elastic',
        closeEffect : 'fade',
        openSpeed :  350,
        closeSpeed : 100,
        helpers : {
          title : {
            type : 'inside' 
          }
        }
    });
 

    
});


