import express from 'express';
import morgan from 'morgan';
import indexRoute from './routes/index'
import routerProduct from './routes/product'
import  path from "path";

const app = express();

//setting
app.set('port', process.env.PORT || 4000); //para cambiar a heroku cambiar aca

//middlewares
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/api', indexRoute);
app.use('/api', routerProduct)

//para esta app sera usado esta carpeta para almacenar archivos publicos
app.use('/uploads', express.static(path.resolve('uploads')));

export default app;