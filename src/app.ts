import express, { Application, Request, Response } from 'express'
const app: Application = express();
import cors from 'cors';
import { productRouter } from './modules/product/product.route';
import { orderRouter } from './modules/order/order.route';

// middleware
app.use(cors());
app.use(express.json());
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);

// base route
app.get('/', (req: Request, res: Response) => {
  res.send('E-com App');
})

// route not found 
app.use('*', (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  })
})

export default app;