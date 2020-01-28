import {Schema, model, Document} from 'mongoose';

export const productSchema = new Schema({
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


export interface IProducto extends Document{
    name: string;
    description: string;
    price: number;
    cant: number;
    inStock: boolean;
    seleccionado: boolean;
}


export default  model<IProducto>('Product', productSchema);


