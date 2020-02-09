"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.productSchema = new mongoose_1.Schema({
    name: String,
    description: String,
    price: Number,
    cant: {
        type: Number,
        default: 1
    },
    inStock: {
        type: Boolean,
        default: true
    },
    seleccionado: {
        type: Boolean,
        default: false
    }
});
exports.default = mongoose_1.model('Product', exports.productSchema);
