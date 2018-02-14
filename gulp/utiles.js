exports.controladorError = function ( error ) {
	var notifier = require( "node-notifier" );
	var dateformat = require( "dateformat" );
	var colors = require('colors');

	var linea = ( error.line ) ? "Linea: " + error.lineNumber + " | " : "";

	var tiempo = "[" + colors.grey( dateformat( new Date(), "HH:MM:ss" )) + "]";
	process.stdout.write( tiempo + ' ' );

	var mensaje = "\nError en el plugin " + error.plugin + ":\n" + error.message;

	notifier.notify({
		title: error.name + " en [" + error.plugin + "]",
		subtitle: "Project web site",
		line: "linea: " + linea,
		message: error.msg || error.message,
		sound: true,
	});

	mensaje = colors.bgRed.white( mensaje );

	console.log( mensaje );
	//console.log( error );

	this.emit('end');
}
