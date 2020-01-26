import {Router} from 'express'
import { createProduct, getProducts, getProduct, deleteProduct, updateProduct, addCant, subCant } from '../controllers/producto.controller';
import multer from '../libs/multer'

const router = Router();

// sirve para imagenes .post(multer.single('image'), createProduct)


router.route('/product')
        .post(createProduct)
        .get(getProducts);

router.route('/product/:id')
        .get(getProduct)
        .delete(deleteProduct)
        .put(updateProduct);
router.route('/product/add/:id')
        .put(addCant);
router.route('/product/sub/:id')
        .put(subCant);

export default router;