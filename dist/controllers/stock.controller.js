"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Stock_1 = __importDefault(require("../models/Stock"));
const producto_controller_1 = require("./producto.controller");
async function getStocks(req, res) {
    const stock = await Stock_1.default.find();
    return res.json(stock);
}
exports.getStocks = getStocks;
async function getStock(req, res) {
    const product = await Stock_1.default.findById(req.params.id);
    return res.json(product);
}
exports.getStock = getStock;
async function createStock(req, res) {
    const products = req.body;
    const newStock = {
        productos: products
    };
    const stock = new Stock_1.default(newStock);
    await stock.save();
    return res.json({
        message: 'stock guardado',
        stock
    });
}
exports.createStock = createStock;
async function deleteStock(req, res) {
    const stock = await Stock_1.default.findByIdAndRemove(req.params.id);
    return res.json({
        message: 'Stock eliminado'
    });
}
exports.deleteStock = deleteStock;
async function seleccionadosStock(req, res) {
    const products = producto_controller_1.seleccionados(req, res);
    const newStock = {
        productos: products
    };
    const stock = new Stock_1.default(newStock);
    await stock.save();
    return res.json({
        message: 'stock guardado',
        stock
    });
}
exports.seleccionadosStock = seleccionadosStock;
