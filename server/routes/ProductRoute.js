const express = require('express');
const ProductRoute = express.Router();

let Product = require('../models/product');

ProductRoute.route('/').get(function (req, res) {
    Product.find(function (err, products) {
        if(err){
            res.status(500).send(err);
        } else {
            res.status(200).json(products);
        }
    });
});

ProductRoute.route('/products/:id').get(function (req, res) {
    Product.findOne({ id: req.params.id }, function (err, product) {
        if(err){
            res.status(500).send(err);
        } else {
            res.status(200).json(product);
        }
    });
});

module.exports = ProductRoute;