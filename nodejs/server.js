var http = require('http');
var url = require('url');

function start(route,handle){
	//recibe los objetos que el http construye
	function onRequest(request,response){
		//se extrae la solicitud
		var pathname = url.parse(request.url).pathname;
		console.log('Peticion para ' + pathname + ' recibida');
		//encargada lo que hace con las peticiones y devuelve el response con la respuesta
		//del servidor.
		route(handle,pathname,response);


	}
	//se activa servidor y escucha por puerto 8888
	http.createServer(onRequest).listen(8888);
	console.log('Servidor Iniciado');
}

//Inicia el servidor y le ordena que empiece a escuchar peticiones
exports.start = start;