var express = require("express");
var router = express.Router();

var db = require("./queries");

//creamos una ruta con el método que llama
router.get('/api/restaurants/', db.getAllRestaurants);
router.get('/api/restaurant/:name', db.getRestaurantByName);
router.post('/api/restaurant/', db.createRestaurant);
router.delete('/api/restaurant/:id', db.removeRestaurant);
router.put('/api/restaurant/:id', db.updateRestaurant);
router.get('/api/menues/', db.getAllMenus);
router.post('/api/menu/', db.createMenu);
router.get('/api/menues-by-restaurant/:restaurant_id', db.getMenusByRestaurant);
router.get('/api/menu/:id',db.getMenuById);
router.put('/api/menu/:id',db.updateMenu);
router.delete('/api/menu/:id',db.removeMenu);

module.exports = router;

//crear otra tabla de menu, hacer crud, y adicionar un menu asociado a restaurante.
