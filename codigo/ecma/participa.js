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