//Crud de productos.
import {Request, Response} from 'express';
import Product from '../models/Product'

export async function getProducts (req: Request, res: Response): Promise <Response>{
   const products = await Product.find();
   return res.json(products);

}

export async function getProduct(req: Request, res: Response): Promise <Response>{
    const product = await Product.findById(req.params.id);
    return res.json(product);
}

export async function createProduct( req: Request, res: Response): Promise <Response>{
    const {name, description, price, cant} = req.body;
    const newProduct = {
        name: name,
        description: description,
        price: price,
        cant: cant
    };

    const product = new Product(newProduct);
    await product.save();
    return res.json({
        message: 'Producto guardado',
        product
    })
}

export async function deleteProduct(req: Request, res: Response): Promise <Response>{
    const product = await Product.findByIdAndRemove(req.params.id);
    return res.json({
        message: 'Producto eliminado'
    });
}

export async function addCant(req: Request, res: Response): Promise <Response>{
    const { id } = req.params;
    const product = await Product.findById(id);
    const productSelec = new Product (product);

    const cant = productSelec.cant + req.body.cant;
    if(productSelec.cant == 0){await Product.findByIdAndUpdate(id, {cant,inStock: true}, {new: true})}
    const productUpdate = await Product.findByIdAndUpdate(id, {cant}, {new: true});

    return res.json({
        message: 'Cantidad agregada.',
        productUpdate
    })
}

export async function subCant(req: Request, res: Response): Promise <Response>{
    const { id } = req.params;
    

    const product = await Product.findById(id);
    const productSelec = new Product(product);
    const cant = (productSelec.cant - req.body.cant);

    if(productSelec.cant<req.body.cant){
        alert('La cantidad que se quiere eliminar es menor a la que se tiene');
        console.log("Error, la cantidad a eliminar es menor a la existente")
    }

    if(productSelec.cant == req.body.cant){
        const productUpdate = await Product.findByIdAndUpdate(id, { cant, inStock: false }, {new: true});

    }
    if (productSelec.cant> req.body.cant){
        const productUpdate = await Product.findByIdAndUpdate(id, { cant }, {new: true});

        return res.json({
            productUpdate
        })
        }
        return res.json({
            message: 'Cantidad eliminada.'})

}

export async function updateProduct(req: Request, res: Response): Promise <Response>{
    const { id } = req.params;
    const {name, description, price} = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(id, {
        name,
        description,
        price
    }, {new: true} )
    return res.json({
        message: 'Producto actualizado.',
        updateProduct
    })
}

export async function selectProduct(req: Request, res:Response): Promise<Response> {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, { seleccionado: true }, {new: true});
    return res.json({
        message: 'Producto seleccionado',
        product
    })
}

export async function seleccionados(req: Request, res:Response): Promise<Response> {
    const productosseleccionados = await Product.find({seleccionado: true});
 
    return res.json( productosseleccionados)
}

export async function disponibles(req: Request, res:Response): Promise<Response> {
    const productosdisponibles = await Product.find({inStock: true});
 
    return res.json( productosdisponibles)
}