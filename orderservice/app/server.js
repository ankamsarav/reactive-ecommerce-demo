const express = require('express');
const orderRouter = require('./order');

const app = express();

app.use(express.json());

const {orderSubscriber} = require('./subscriber');

app.use('/orders', orderRouter);

app.use('/', (req,res) => {
    res.status(200).json({data: 'Order service is up'});
})

app.listen(3100, () => {
    console.log('OrderService is running on port 3100');
})