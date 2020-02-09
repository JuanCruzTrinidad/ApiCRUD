"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const producto_controller_1 = require("../controllers/producto.controller");
const routerProduct = express_1.Router();
routerProduct.route('/product')
    .post(producto_controller_1.createProduct)
    .get(producto_controller_1.getProducts);
routerProduct.route('/product/:id')
    .get(producto_controller_1.getProduct)
    .delete(producto_controller_1.deleteProduct)
    .put(producto_controller_1.updateProduct);
exports.default = routerProduct;
