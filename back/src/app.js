import express from 'express';
import passport from 'passport';
import initializePassport from './config/passport.config.js';
import mongoDB from './dao/mongo.js';
import cors from 'cors';
import env from './config/dotEnv.config.js';

import {
    userRouter, imagenRouter, priceRouter, pdfRouter, graphRouter, aplliRouter, alertsRouter, productRouter
} from './routes/index.router.js';

const app = express();
mongoDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initializePassport();
app.use(passport.initialize());

app.use('/api/user', userRouter);
app.use('/api/img', imagenRouter);
app.use('/api/price', priceRouter);
app.use('/api/pdf', pdfRouter);
app.use('/api/graph', graphRouter);
app.use('/api/appli', aplliRouter);
app.use('/api/alerts', alertsRouter);
app.use('/api/product', productRouter);

app.listen(env.port, () => console.log('Server conected'));