import {Schema, model, Document} from 'mongoose';

const schema = new Schema({
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

export class ProductClass{
    name: string;
    description: string;
    price: number;
    cant: number;
    inStock: boolean;

    constructor(name: string, description: string, price: number, cant: number, inStock: boolean){
        this.name = name;
        this.description = description;
        this.price=price;
        this.cant=cant;
        this.inStock=inStock;
    }

}

export default  model<IProducto>('Product', schema);


