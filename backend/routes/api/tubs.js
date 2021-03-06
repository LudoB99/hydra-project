var express = require('express');
var router = express.Router();
var database = require('../../database');

router.post('/', function(req, res, next){
    console.log(req.body);
    database.insertData(req.body);
    res.send(req.body);
});

router.get('/', function(req, res, next) {
    database.findAllTubs((data) => {
        res.send(data);
    });
});

router.get('/:tubId', (req, res) => {
    database.findTubById(req.params.tubId, (data) => {
        res.send(data);
    });
});

module.exports = router;