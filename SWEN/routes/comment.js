const express = require('express');
const router = express();
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
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

// localhost:5000 

router.get('/comment', (req, res) => {
    db.collection('quotes').find().toArray((err, results) => {
            res.send(results)
        });
    });

router.get('/comment/:name/:email/:rating/:comment', (req, res) => {

    db.collection('quotes').save({
            "name": req.params.name, 
            "email": req.params.email, 
            "rating": req.params.rating,
            "comment": req.params.comment
        }, (err, result) => {

        });
    });

router.route('/quotes/:_id').delete(function(req, res) {         
    db.collection('quotes').deleteOne( {"_id": ObjectId(req.params._id)} 
        );   
        res.redirect("/"); 
    }); 

    module.exports = router; 