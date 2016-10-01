function route(handle, pathname,response){
	console.log('Va invocar la funcion para ' + pathname);
	//verificamos si se tiene soportada la peticion en el servidor
	if(typeof handle[pathname] === 'function'){
		//ejecuta la funcion
		return handle[pathname](response);

	}else{
		//no se soporta la funcion
		console.log('No se encontro manipulador para ' + pathname);
		response.writeHead(404,{'Content-Type':'text/html'});
		//se construye la respuesta
		response.write('Dirección no disponible');
		response.end();
	}
}

exports.route = route;