//importamos el módulo promise
var promise = require('bluebird');

var options = {
	promiseLib: promise
};

//carga el módulo  promise con bluebird
var pgp = require('pg-promise')(options);
var connectionString = 'postgres://xikrwevh:l7V3AooJ7fExMgkEyYzYCX6R_45NuNmZ@elmer.db.elephantsql.com:5432/xikrwevh';
var db =pgp(connectionString);


//Retorna todos los restaurantes
function getAllRestaurants(req, res, next){
//any retorna un valor o varios
	db.any('select * from restaurant')
	.then(function(data){
		res.status(200)
		.json({
			status: 'Exitoso',
			data: data,
			message: "Recuperados todos los restaurantes"
		});
	})
	.catch(function(err){
		return next(err);
	});
};

//Retorna los restaurantes por nombre
function getRestaurantByName(req, res, next){
	var name=req.params.name;
	db.any('select * from restaurant where name = $1 ', name)
	.then(function(data){
		res.status(200)
		.json({
			status : 'Exitoso',
			data: data,
			message: 'Recuperados restaurantes por nombre'
		});
	})
	.catch(function(err){
		return next(err);
	});
};


//Retorna los restaurantes por nombre
function createRestaurant(req, res, next){

	//Esta consulta no retorna
	db.none('insert into restaurant(name, city, address,phone) values($1, $2, $3, $4)',
		[req.body.name,req.body.city,req.body.address, parseInt(req.body.phone)])
		.then(function(){
		res.status(200)
		.json({
			status : 'Exitoso',
			message: 'Insertado un restaurante'
		});
	})
	.catch(function(err){
		return next(err);
	});
};



//Retorna los restaurantes por nombre
function removeRestaurant(req, res, next){
	var restaurantID = parseInt(req.params.id);
	db.result('delete from restaurant where id=$1', restaurantID)
	.then(function(){
		res.status(200)
		.json({
			status : 'Exitoso',
			message: 'Removido un restaurante'
		});
	})
	.catch(function(err){
		return next(err);
	});
};


//Retorna los restaurantes por nombre
function updateRestaurant(req, res, next){

	db.none('update restaurant set name=$1, city=$2, address=$3, phone=$4 where id=$5',
		[req.body.name,req.body.city,req.body.address, parseInt(req.body.phone), parseInt(req.params.id)])
	.then(function(){
		res.status(200)
		.json({
			status : 'Exitoso',
			message: 'Removido un restaurante'
		});
	})
	.catch(function(err){
		return next(err);
	});
};

//Retorna todos los restaurantes
function getAllRestaurants(req, res, next){
//any retorna un valor o varios
	db.any('select * from restaurant')
	.then(function(data){
		res.status(200)
		.json({
			status: 'Exitoso',
			data: data,
			message: "Recuperados todos los restaurantes"
		});
	})
	.catch(function(err){
		return next(err);
	});
};

//Retorna los restaurantes por nombre
function getRestaurantByName(req, res, next){
	var name=req.params.name;
	db.any('select * from restaurant where name = $1 ', name)
	.then(function(data){
		res.status(200)
		.json({
			status : 'Exitoso',
			data: data,
			message: 'Recuperados restaurantes por nombre'
		});
	})
	.catch(function(err){
		return next(err);
	});
};


//Retorna los restaurantes por nombre
function createRestaurant(req, res, next){

	//Esta consulta no retorna
	db.none('insert into restaurant(name, city, address,phone) values($1, $2, $3, $4)',
		[req.body.name,req.body.city,req.body.address, parseInt(req.body.phone)])
		.then(function(){
		res.status(200)
		.json({
			status : 'Exitoso',
			message: 'Insertado un restaurante'
		});
	})
	.catch(function(err){
		return next(err);
	});
};



//Retorna los restaurantes por nombre
function removeRestaurant(req, res, next){
	var restaurantID = parseInt(req.params.id);
	db.result('delete from restaurant where id=$1', restaurantID)
	.then(function(){
		res.status(200)
		.json({
			status : 'Exitoso',
			message: 'Removido un restaurante'
		});
	})
	.catch(function(err){
		return next(err);
	});
};


//ingresa el menu
function createMenu(req, res, next){

	//Esta consulta no retorna
	db.none('insert into menu(name, description, price,restaurant) values($1, $2, $3, $4)',
		[req.body.name,req.body.description,req.body.price, parseInt(req.body.restaurant)])
		.then(function(){
		res.status(200)
		.json({
			status : 'Exitoso',
			message: 'Insertado un menu'
		});
	})
	.catch(function(err){
		return next(err);
	});
};

//Retorna todos los menues
function getAllMenus(req, res, next){
//any retorna un valor o varios
	db.any('select * from menu')
	.then(function(data){
		res.status(200)
		.json({
			status: 'Exitoso',
			data: data,
			message: "Recuperados todos los menues"
		});
	})
	.catch(function(err){
		return next(err);
	});
};

//Retorna todos los menues por restaurante
function getMenusByRestaurant(req, res, next){
//any retorna un valor o varios
	db.any('select * from menu where restaurant=$1',req.params.restaurant_id)
	.then(function(data){
		res.status(200)
		.json({
			status: 'Exitoso',
			data: data,
			message: "Recuperados todos los menues por restaurante"
		});
	})
	.catch(function(err){
		return next(err);
	});
};


module.exports= {
	getAllRestaurants: getAllRestaurants,
	getRestaurantByName : getRestaurantByName,
	createRestaurant: createRestaurant,
	removeRestaurant: removeRestaurant,
	updateRestaurant: updateRestaurant,
	getAllMenus: getAllMenus,
	createMenu: createMenu,
	getMenusByRestaurant: getMenusByRestaurant
};
