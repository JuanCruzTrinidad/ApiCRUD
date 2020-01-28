import {Schema, model, Document} from 'mongoose';
import  { productSchema } from './Product'


const schema = new Schema({
    productos: {type: [ productSchema ],
                default: undefined}
});


export default  model('Stock', schema);


