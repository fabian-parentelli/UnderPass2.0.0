import express from 'express';
import passport from 'passport';
import initializePassport from './config/passport.config.js';
import mongoDB from './dao/mongo.js';
import cors from 'cors';
import env from './config/dotEnv.config.js';

import {
    userRouter, imagenRouter, priceRouter, pdfRouter, graphRouter, aplliRouter, alertsRouter, productRouter,
    publicityRouter, orderRouter, orderSellerRouter, walletRouter, ticketRouter, transferRouter, cashRouter,
    auditRouter, orderPayRouter, transferPayRouter, payRouter, bookingRouter, newsRouter, messageRouter,
    eventRouter, notesRouter
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
app.use('/api/publicity', publicityRouter);
app.use('/api/order', orderRouter);
app.use('/api/order_seller', orderSellerRouter);
app.use('/api/wallet', walletRouter);
app.use('/api/ticket', ticketRouter);
app.use('/api/transfer', transferRouter);
app.use('/api/cash', cashRouter);
app.use('/api/audit', auditRouter);
app.use('/api/orderpay', orderPayRouter);
app.use('/api/transferpay', transferPayRouter);
app.use('/api/pay', payRouter);
app.use('/api/booking', bookingRouter);
app.use('/api/news', newsRouter);
app.use('/api/message', messageRouter);
app.use('/api/event', eventRouter);
app.use('/api/notes', notesRouter);

app.listen(env.port, () => console.log('Server conected'));