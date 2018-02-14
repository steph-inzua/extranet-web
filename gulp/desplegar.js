var rutas = require( "../rutas.json" );
var valores = require( "../valores.json" );

var gulp = require( "gulp" );

var utiles = require("./utiles.js");

gulp.task( "subir", function() {

	var ftp = require( 'vinyl-ftp' );

	var conn = ftp.create({
		"host":           valores.ftp.servidor,
		"port":           valores.ftp.puerto,
		"user":           valores.ftp.usuario,
		"password":       valores.ftp.clave,
		"parallel":       "10",
		"maxConnections": "20"
	});

    gulp.src( rutas.destino.html + "**/*", { base: rutas.destino.html, buffer: false })
        .pipe( conn.newer( rutas.ftp )) // only upload newer files
        .pipe( conn.dest( rutas.ftp ));
});
