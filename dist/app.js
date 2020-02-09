"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const index_1 = __importDefault(require("./routes/index"));
const product_1 = __importDefault(require("./routes/product"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
//setting
app.set('port', process.env.PORT || 4000); //para cambiar a heroku cambiar aca
//middlewares
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
app.use(cors_1.default({ origin: 'http://localhost:4200' }));
//routes
app.use('/api', index_1.default);
app.use('/api', product_1.default);
//para esta app sera usado esta carpeta para almacenar archivos publicos
app.use('/uploads', express_1.default.static(path_1.default.resolve('uploads')));
exports.default = app;
