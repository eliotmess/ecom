const express = require('express');
const uuid = require('uuid');
const OrderRoute = express.Router();

let Order = require('../models/order');

OrderRoute.route('/orders').get(function (req, res) {
    Order.find(function (err, orders) {
        if(err){
            res.status(500).send(err);
        } else {
            res.status(200).json(orders);
        }
    });
});

OrderRoute.route('/orders/add').post(function (req, res) {
    const order = new Order(req.body);
    order.id = uuid();
    order.save()
        .then(order => {
            res.status(200).json(order);
        })
        .catch(err => {
            res.status(400).send('error while saving to DB', err);
        });
});

module.exports = OrderRoute;