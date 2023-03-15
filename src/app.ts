import express from 'express';
import productRoute from './routes/productRoute';
import userRoute from './routes/userRoute';
import orderRoute from './routes/orderRoute';

const app = express();

app.use(express.json());
app.use('/products', productRoute);
app.use('/users', userRoute);
app.use('/orders', orderRoute);
export default app;
