const express = require('express');
const router = express();
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');
 
router.use(cors());

router.get('/',(req, res) =>{
    res.send('Api Works!');
});

var db;
MongoClient.connect('mongodb://test1:testone1@ds233320.mlab.com:33320/dormestation',
    { useNewUrlParser: true }, (err, database) => {
        if (err) return console.log(err)
        db = database.db('dormestation');
    });


// localhost:8080

router.get('/room', function(req, res){     
        db.collection('room').find().toArray( (err, results) => 
        {res.send(results)}); 
    }); 

    module.exports = router; 
