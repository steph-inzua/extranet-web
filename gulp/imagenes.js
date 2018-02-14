var rutas = require( "../rutas.json" );
var valores = require( "../valores.json" );

var gulp = require( "gulp" );

var utiles = require("./utiles.js");

gulp.task( "imagenes", function() {
	var plumber = require( "gulp-plumber" );

	gulp.src( rutas.origen.imagenes + "**/*.*" )
		.pipe( plumber({
			errorHandler: utiles.controladorError
		}))
    	.pipe( gulp.dest( rutas.destino.img ));
});
