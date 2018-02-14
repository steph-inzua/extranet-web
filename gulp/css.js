var rutas = require( "../rutas.json" );
var valores = require( "../valores.json" );

var gulp = require( "gulp" );

var utiles = require("./utiles.js");


gulp.task( "css", function() {
	var stylus = require( "gulp-stylus" );
	var sourcemaps = require( "gulp-sourcemaps" );
	var changed = require('gulp-changed');
	var plumber = require( "gulp-plumber" );
	var nib = require( "nib" );

	gulp.src( rutas.origen.stylus + "*.styl" )
		.pipe( plumber({
			errorHandler: utiles.controladorError
		}))
		.pipe( changed( rutas.destino.css, {
			extension: ".css"
		}))
		//.pipe( sourcemaps.init() )
    	.pipe( stylus({
    		linenos: true,
    		use: [ nib()]
    	}))
    	//.pipe( sourcemaps.write() )
    	.pipe( plumber.stop() )
    	.pipe( gulp.dest( rutas.destino.css ));
});
