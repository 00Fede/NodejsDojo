//dependencia para simular que el sevidor esta demorando en un proceso
//esto es para probar el multithread del servidor
var exec = require('child_process').exec;

function start(response){
	//manejamos las diferentes rutas que se pueden manejar
	console.log('Manipular start');
	//busca todo el contenido de raiz
	exec('find /',{timeout:10000,
		maxBuffer:20000*1024},
		function(error,stdout,stderr){
			//funcion a correr cuando termine la instrucción
			response.writeHead(200,{'Content-Type':'text/html'});
			//response retorna todo el contenido del stdout
			response.write(stdout);
			response.end();
		});
}


//funcion para localhost:8888/upload
function upload(response){
	console.log('Manipulador upload');
	response.writeHead(200,{'Content-Type':'text/html'});
	response.write('Hello upload');
	response.end();
}


exports.start = start;
exports.upload = upload;