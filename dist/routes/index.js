"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const producto_controller_1 = require("../controllers/producto.controller");
//import { getStocks, createStock, getStock, deleteStock, seleccionadosStock } from '../controllers/stock.controller';
const router = express_1.Router();
// sirve para imagenes .post(multer.single('image'), createProduct)
router.route('/product/seleccionados/')
    .get(producto_controller_1.seleccionados);
router.route('/product/select/:id')
    .put(producto_controller_1.selectProduct);
router.route('/product/disponibles/')
    .get(producto_controller_1.disponibles);
router.route('/product/add/:id')
    .put(producto_controller_1.addCant);
router.route('/product/sub/:id')
    .put(producto_controller_1.subCant);
/*router.route('/stock')
        .get(getStocks)
        .post(createStock)
router.route('/stock/:id')
        .get(getStock)
        .delete(deleteStock)
router.route('/stock/seleccionados')
        .post(seleccionadosStock)*/
exports.default = router;
