window.fbAsyncInit = function() {
	FB.init({
		appId      : '1665964660362981',
		xfbml      : true,
		version    : 'v2.6'
	});
};
//FB.AppEvents.logPageView();

(function(d, s, id){
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) {return;}
	js = d.createElement(s); js.id = id;
	js.src = "//connect.facebook.net/es_LA/sdk.js";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

$( document ).ready( function(){
	var tl = new TimelineMax();

	tl.add( TweenLite.from( ".h-encabezado", 1, { alpha: 0, y:"-100"} ), "-=0.6");
	tl.add( TweenLite.from( ".btn1", 1, { alpha: 0, y:"100"} ), "-=0.2");

	$( "#login-fb" ).on( "click", function( evt ){
		FB.getLoginStatus( function( rpta ) {
			retrollamadaLoginStatus( rpta );
		});
	});

});

function retrollamadaLoginStatus( rpta ){
	if ( rpta.status === 'connected' ) {
		FB.login(function( repta ) {
			retrollamadaFBLogin( rpta )
		}, {scope: 'public_profile,email'});
	} else if ( rpta.status === 'not_authorized' ) {
		FB.login(function( repta ) {
			retrollamadaFBLogin( rpta )
		}, {scope: 'public_profile,email'});
	} else {
	// The person is not logged into Facebook, so we're not sure if
	// they are logged into this app or not.
	}
}

function retrollamadaFBLogin( rpta ){
	console.debug( rpta );
	switch( rpta.status ){
		case "connected":
			
		break;
	}
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJwYXJ0aWNpcGEuanMiXSwic291cmNlc0NvbnRlbnQiOlsid2luZG93LmZiQXN5bmNJbml0ID0gZnVuY3Rpb24oKSB7XHJcblx0RkIuaW5pdCh7XHJcblx0XHRhcHBJZCAgICAgIDogJzE2NjU5NjQ2NjAzNjI5ODEnLFxyXG5cdFx0eGZibWwgICAgICA6IHRydWUsXHJcblx0XHR2ZXJzaW9uICAgIDogJ3YyLjYnXHJcblx0fSk7XHJcbn07XHJcbi8vRkIuQXBwRXZlbnRzLmxvZ1BhZ2VWaWV3KCk7XHJcblxyXG4oZnVuY3Rpb24oZCwgcywgaWQpe1xyXG5cdHZhciBqcywgZmpzID0gZC5nZXRFbGVtZW50c0J5VGFnTmFtZShzKVswXTtcclxuXHRpZiAoZC5nZXRFbGVtZW50QnlJZChpZCkpIHtyZXR1cm47fVxyXG5cdGpzID0gZC5jcmVhdGVFbGVtZW50KHMpOyBqcy5pZCA9IGlkO1xyXG5cdGpzLnNyYyA9IFwiLy9jb25uZWN0LmZhY2Vib29rLm5ldC9lc19MQS9zZGsuanNcIjtcclxuXHRmanMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoanMsIGZqcyk7XHJcbn0oZG9jdW1lbnQsICdzY3JpcHQnLCAnZmFjZWJvb2stanNzZGsnKSk7XHJcblxyXG4kKCBkb2N1bWVudCApLnJlYWR5KCBmdW5jdGlvbigpe1xyXG5cdHZhciB0bCA9IG5ldyBUaW1lbGluZU1heCgpO1xyXG5cclxuXHR0bC5hZGQoIFR3ZWVuTGl0ZS5mcm9tKCBcIi5oLWVuY2FiZXphZG9cIiwgMSwgeyBhbHBoYTogMCwgeTpcIi0xMDBcIn0gKSwgXCItPTAuNlwiKTtcclxuXHR0bC5hZGQoIFR3ZWVuTGl0ZS5mcm9tKCBcIi5idG4xXCIsIDEsIHsgYWxwaGE6IDAsIHk6XCIxMDBcIn0gKSwgXCItPTAuMlwiKTtcclxuXHJcblx0JCggXCIjbG9naW4tZmJcIiApLm9uKCBcImNsaWNrXCIsIGZ1bmN0aW9uKCBldnQgKXtcclxuXHRcdEZCLmdldExvZ2luU3RhdHVzKCBmdW5jdGlvbiggcnB0YSApIHtcclxuXHRcdFx0cmV0cm9sbGFtYWRhTG9naW5TdGF0dXMoIHJwdGEgKTtcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG5cclxufSk7XHJcblxyXG5mdW5jdGlvbiByZXRyb2xsYW1hZGFMb2dpblN0YXR1cyggcnB0YSApe1xyXG5cdGlmICggcnB0YS5zdGF0dXMgPT09ICdjb25uZWN0ZWQnICkge1xyXG5cdFx0RkIubG9naW4oZnVuY3Rpb24oIHJlcHRhICkge1xyXG5cdFx0XHRyZXRyb2xsYW1hZGFGQkxvZ2luKCBycHRhIClcclxuXHRcdH0sIHtzY29wZTogJ3B1YmxpY19wcm9maWxlLGVtYWlsJ30pO1xyXG5cdH0gZWxzZSBpZiAoIHJwdGEuc3RhdHVzID09PSAnbm90X2F1dGhvcml6ZWQnICkge1xyXG5cdFx0RkIubG9naW4oZnVuY3Rpb24oIHJlcHRhICkge1xyXG5cdFx0XHRyZXRyb2xsYW1hZGFGQkxvZ2luKCBycHRhIClcclxuXHRcdH0sIHtzY29wZTogJ3B1YmxpY19wcm9maWxlLGVtYWlsJ30pO1xyXG5cdH0gZWxzZSB7XHJcblx0Ly8gVGhlIHBlcnNvbiBpcyBub3QgbG9nZ2VkIGludG8gRmFjZWJvb2ssIHNvIHdlJ3JlIG5vdCBzdXJlIGlmXHJcblx0Ly8gdGhleSBhcmUgbG9nZ2VkIGludG8gdGhpcyBhcHAgb3Igbm90LlxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmV0cm9sbGFtYWRhRkJMb2dpbiggcnB0YSApe1xyXG5cdGNvbnNvbGUuZGVidWcoIHJwdGEgKTtcclxuXHRzd2l0Y2goIHJwdGEuc3RhdHVzICl7XHJcblx0XHRjYXNlIFwiY29ubmVjdGVkXCI6XHJcblx0XHRcdFxyXG5cdFx0YnJlYWs7XHJcblx0fVxyXG59Il0sImZpbGUiOiJwYXJ0aWNpcGEuanMifQ==
