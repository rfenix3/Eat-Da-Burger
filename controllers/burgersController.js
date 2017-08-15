var express = require('express');
var burger = require('../models/burger');
var moment = require('moment');
var router = express.Router();
var b = require('../lib/burgers');

router.get('/', function (req,res) {
    // b.getAllBurgers(function(burgers){
    //     res.render('index', {burgers: burgers});
    // });
    burger.selectAll(function(data){
       var myBurgers = {
           burgers: data
       };
        res.render('index', myBurgers);
    });
});

router.post('/burger/eat/:id', function(req, res) {
    var idVal = parseInt(req.params.id);
    burger.updateOne(idVal, function(data){
        res.redirect('/');
    });
});

router.post('/burger/add', function (req, res) {
    var myObj = {
        name: req.body.burger_name,
        date: moment().format("YYYY-MM-DD HH:mm:ss")
    };
    console.log(myObj);
    console.log(req.body);
    burger.insertOne(myObj, function (data) {
        res.redirect('/');
    });
});

module.exports = router;

