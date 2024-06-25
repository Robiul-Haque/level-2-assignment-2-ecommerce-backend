import express, { Application, Request, Response } from 'express'
const app: Application = express();
import cors from 'cors';

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('E-com App');
})

export default app;