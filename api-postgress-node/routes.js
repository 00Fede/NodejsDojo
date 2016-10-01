var express = require("express");
var router = express.Router();

var db = require("./queries");

//creamos una ruta con el método que llama
router.get('/api/restaurants', db.getAllRestaurants);
router.get('/api/restaurants/:name', db.getRestaurantByName);
router.post('/api/restaurants/', db.createRestaurant);
router.delete('/api/restaurants/:id', db.removeRestaurant);
router.put('/api/restaurants/:id', db.updateRestaurant);

module.exports = router; 

//crear otra tabla de menu, hacer crud, y adicionar un menu asociado a restaurante.