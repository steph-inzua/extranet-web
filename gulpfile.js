var gulp = require( "gulp" );
var requireDir = require( "require-dir" );
var taskListing = require( "gulp-task-listing" );


var paquete = require( "./package.json" );
var rutas = require( "./rutas.json" );
var valores = require( "./valores.json" );

gulp.task( "default", taskListing );

requireDir( "./gulp", { recurse: true });