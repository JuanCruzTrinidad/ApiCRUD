import {Request, Response} from 'express';
import Stock from '../models/Stock'
import { seleccionados } from './producto.controller';

export async function getStocks (req: Request, res: Response): Promise <Response>{
    const stock = await Stock.find();
    return res.json(stock);
 
 }
 
export async function getStock(req: Request, res: Response): Promise <Response>{
     const product = await Stock.findById(req.params.id);
     return res.json(product);
 }
 
export async function createStock( req: Request, res: Response): Promise <Response>{
      
     const products = req.body
     const newStock = {
         productos: products
     };
 
     const stock = new Stock(newStock);
     await stock.save();
     return res.json({
         message: 'stock guardado',
         stock
     })
 }
 
export async function deleteStock(req: Request, res: Response): Promise <Response>{
     const stock = await Stock.findByIdAndRemove(req.params.id);
     return res.json({
         message: 'Stock eliminado'
     });
 }

export async function seleccionadosStock(req: Request, res: Response): Promise <Response>{
    const products = seleccionados(req, res)
    const newStock = {
        productos: products
    };

    const stock = new Stock(newStock);
    await stock.save();
    return res.json({
        message: 'stock guardado',
        stock
    })
 }