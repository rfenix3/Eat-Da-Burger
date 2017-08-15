var connection = require("./connection.js");
// var table = require('console.table');
var orm = {
    selectAll: function(callback) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            // console.table(result);
            callback(result);
        });
    },
    insertOne: function(myObj, callback) {

        var queryString = "INSERT INTO burgers SET ?";

        console.log(queryString);

        connection.query(queryString, {
            burger_name: myObj.name,
            devoured: false,
            myDate: myObj.date
        }, function(err, result) {
            // console.table(result);
            callback(result);
        });
    },
    updateOne: function(idVal, callback){
        var queryString = "UPDATE burgers SET devoured = true WHERE id = ?";
        console.log(queryString);
        connection.query(queryString, [idVal], function(err, result) {
            // console.table(result);
            callback(result);
        });
    }
};

module.exports = orm;