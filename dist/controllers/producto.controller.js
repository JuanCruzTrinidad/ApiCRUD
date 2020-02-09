"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = __importDefault(require("../models/Product"));
async function getProducts(req, res) {
    const products = await Product_1.default.find();
    return res.json(products);
}
exports.getProducts = getProducts;
async function getProduct(req, res) {
    const product = await Product_1.default.findById(req.params.id);
    return res.json(product);
}
exports.getProduct = getProduct;
async function createProduct(req, res) {
    const { name, description, price, cant } = req.body;
    const newProduct = {
        name: name,
        description: description,
        price: price,
        cant: cant
    };
    const product = new Product_1.default(newProduct);
    await product.save();
    return res.json({
        message: 'Producto guardado',
        product
    });
}
exports.createProduct = createProduct;
async function deleteProduct(req, res) {
    const product = await Product_1.default.findByIdAndRemove(req.params.id);
    return res.json({
        message: 'Producto eliminado'
    });
}
exports.deleteProduct = deleteProduct;
async function addCant(req, res) {
    const { id } = req.params;
    const product = await Product_1.default.findById(id);
    const productSelec = new Product_1.default(product);
    const cant = productSelec.cant + req.body.cant;
    if (productSelec.cant == 0) {
        await Product_1.default.findByIdAndUpdate(id, { cant, inStock: true }, { new: true });
    }
    const productUpdate = await Product_1.default.findByIdAndUpdate(id, { cant }, { new: true });
    return res.json({
        message: 'Cantidad agregada.',
        productUpdate
    });
}
exports.addCant = addCant;
async function subCant(req, res) {
    const { id } = req.params;
    const product = await Product_1.default.findById(id);
    const productSelec = new Product_1.default(product);
    const cant = (productSelec.cant - req.body.cant);
    if (productSelec.cant < req.body.cant) {
        alert('La cantidad que se quiere eliminar es menor a la que se tiene');
        console.log("Error, la cantidad a eliminar es menor a la existente");
    }
    if (productSelec.cant == req.body.cant) {
        const productUpdate = await Product_1.default.findByIdAndUpdate(id, { cant, inStock: false }, { new: true });
    }
    if (productSelec.cant > req.body.cant) {
        const productUpdate = await Product_1.default.findByIdAndUpdate(id, { cant }, { new: true });
        return res.json({
            productUpdate
        });
    }
    return res.json({
        message: 'Cantidad eliminada.'
    });
}
exports.subCant = subCant;
async function updateProduct(req, res) {
    const { id } = req.params;
    const { name, description, price } = req.body;
    const updatedProduct = await Product_1.default.findByIdAndUpdate(id, {
        name,
        description,
        price
    }, { new: true });
    return res.json({
        message: 'Producto actualizado.',
        updateProduct
    });
}
exports.updateProduct = updateProduct;
async function selectProduct(req, res) {
    const { id } = req.params;
    const product = await Product_1.default.findByIdAndUpdate(id, { seleccionado: true }, { new: true });
    return res.json({
        message: 'Producto seleccionado',
        product
    });
}
exports.selectProduct = selectProduct;
async function seleccionados(req, res) {
    const productosseleccionados = await Product_1.default.find({ seleccionado: true });
    return res.json(productosseleccionados);
}
exports.seleccionados = seleccionados;
async function disponibles(req, res) {
    const productosdisponibles = await Product_1.default.find({ inStock: true });
    return res.json(productosdisponibles);
}
exports.disponibles = disponibles;
