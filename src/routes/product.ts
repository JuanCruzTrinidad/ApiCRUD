import {Router} from 'express'
import { createProduct, getProduct, getProducts, deleteProduct, updateProduct } from '../controllers/producto.controller';

const routerProduct = Router();


routerProduct.route('/product')
        .post(createProduct)
        .get(getProducts);

routerProduct.route('/product/:id')
        .get(getProduct)
        .delete(deleteProduct)
        .put(updateProduct);


export default routerProduct;



