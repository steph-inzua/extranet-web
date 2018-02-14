var rutas = require( "../rutas.json" );
var valores = require( "../valores.json" );

var gulp = require( "gulp" );

gulp.task('servir', ["html", "css", "js", "fuentes", "imagenes"], function(){
	//var browserSync = require( "browser-sync" );
    var browserSync = require('browser-sync').create();

    browserSync.init({
        server: rutas.destino.html,
        directory: true,
        startPath: "/index.html",
        xip: true,
        online: true,
        open: "external",
        logLevel: "info",
        logConnections: true,
        logFileChanges: true,
        logPrefix: valores.titulo,
        notify: false,
        scrollProportionally: false,
        scrollRestoreTechnique: "cookie",
        reloadOnRestart: true,
        reloadDelay: 250,
        reloadDebounce: 1000,
        injectChanges: true,
        files: rutas.destino.html + "**/*",
        minify: false,
        codeSync: true
    });

    gulp.watch( rutas.origen.pug + "**/*.pug", ["html", browserSync.reload ] );
    gulp.watch( rutas.origen.twig + "**/*.twig", ["html", browserSync.reload ] );
    gulp.watch( rutas.origen.stylus + "**/*.styl", ["css", browserSync.stream ] );
    gulp.watch( rutas.origen.ecmascript + "**/*.js", ["js", browserSync.reload ] );
});