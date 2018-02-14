var rutas = require( "../rutas.json" );
var valores = require( "../valores.json" );

var gulp = require( "gulp" );

var utiles = require("./utiles.js");

gulp.task( "js", function() {
	var sourcemaps = require( "gulp-sourcemaps" );
	var plumber = require( "gulp-plumber" );

	gulp.src( rutas.origen.ecmascript + "*.js" )
		.pipe( plumber({
			errorHandler: utiles.controladorError
		}))
		.pipe( sourcemaps.init() )

    	.pipe( sourcemaps.write() )
    	.pipe( plumber.stop() )
    	.pipe( gulp.dest( rutas.destino.js ));
});
