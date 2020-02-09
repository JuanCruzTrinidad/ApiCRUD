"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Product_1 = require("./Product");
const schema = new mongoose_1.Schema({
    productos: { type: [Product_1.productSchema],
        default: undefined }
});
exports.default = mongoose_1.model('Stock', schema);
