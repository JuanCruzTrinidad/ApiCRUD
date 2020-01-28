import {Router} from 'express'
import { createProduct, getProducts, getProduct, deleteProduct, updateProduct, addCant, subCant, selectProduct, seleccionados, disponibles } from '../controllers/producto.controller';
//import { getStocks, createStock, getStock, deleteStock, seleccionadosStock } from '../controllers/stock.controller';

const router = Router();

// sirve para imagenes .post(multer.single('image'), createProduct)


router.route('/product/seleccionados/')
        .get(seleccionados)
router.route('/product/select/:id')
        .put(selectProduct);
router.route('/product/disponibles/')
        .get(disponibles);
router.route('/product/add/:id')
        .put(addCant);
router.route('/product/sub/:id')
        .put(subCant);

/*router.route('/stock')
        .get(getStocks)
        .post(createStock)
router.route('/stock/:id')
        .get(getStock)
        .delete(deleteStock)
router.route('/stock/seleccionados')
        .post(seleccionadosStock)*/

export default router;