import express, { Application, Request, Response } from 'express'
const app: Application = express();
import cors from 'cors';
import { productRouter } from './modules/product/product.route';

app.use(cors());
app.use(express.json());
app.use('/api/products', productRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('E-com App');
})

export default app;