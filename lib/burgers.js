var burger = require('../models/burger');

exports.getAllBurgers = function(cb) {
    burger.selectAll(function(data){
        cb(data);
    });
};