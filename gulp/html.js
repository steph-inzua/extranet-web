var rutas = require( "../rutas.json" );
var valores = require( "../valores.json" );

var gulp = require( "gulp" );

var utiles = require("./utiles.js");

gulp.task( "html", function() {

	var pug = require( "gulp-pug" );
	var sourcemaps = require( "gulp-sourcemaps" );
	var changed = require('gulp-changed');
	var plumber = require( "gulp-plumber" );

	gulp.src( rutas.origen.pug + "*.pug" )
		.pipe( plumber({
			errorHandler: utiles.controladorError
		}))
		.pipe( sourcemaps.init() )
		.pipe( pug({
			basedir: rutas.origen.pug,
			pretty: true,
			locals: valores
		}))
    	.pipe( sourcemaps.write() )
    	.pipe( plumber.stop() )
		.pipe( gulp.dest( rutas.destino.html ));


	var twig = require('gulp-twig');
	var plumber = require('gulp-plumber');
	var prettify = require('gulp-prettify');

	var ruta = [ rutas.origen.twig + "*.twig", 
				rutas.origen.twig + "productos/*.twig" ];

	gulp.src( ruta )
		.pipe( plumber({
			errorHandler: utiles.controladorError
		}))
		.pipe( sourcemaps.init() )
		.pipe(twig({
				data: valores,
				base: rutas.origen.twig + "base"
			}))
		.pipe(prettify({ indent_with_tabs: true}))
		.pipe( changed( rutas.destino.html, {
			hasChanged: changed.compareSha1Digest,
			extension: '.html'
		} ))
    	.pipe( sourcemaps.write() )
    	.pipe( plumber.stop() )
		.pipe(gulp.dest(rutas.destino.html));

});
