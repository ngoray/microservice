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
//localhost:4000

router.get('/booking/:username/:nric', (req, res2) => {
    var username = req.params.username;
    var nric = req.params.nric;

    db.collection('booking').findOne({ "name": username, "nric": nric }, { 
            room: 1,
            _id: 0
        }, function (err, result) {
                if (result) {
                    res2.send([{ "auth": true, "name": result.username }]);
                } else {
                    res2.send([{ "auth": false }]);
                }
            });
        });

    router.get('/booking/:name/:nric/:room/:guest/:checkin/:checkout', (req, res) => {

            db.collection('booking').save({
                "name": req.params.name, 
                "nric": req.params.nric, 
                "room": req.params.room,
                "guest": req.params.guest,
                "checkin": req.params.checkin,
                "checkout": req.params.checkout
            }, (err, result) => {

            });
        });

// get all posts 
    router.get('/booking', function(req, res){     
    db.collection('booking').find().toArray( (err, results) => 
    {res.send(results)}); 
}); 

// delete post based on id 
router.route('/booking/:_id').delete(function(req, res) {         
    db.collection('booking').deleteOne( {"_id": ObjectId(req.params._id)} 
    );   
    res.redirect("/"); 
}); 

router.put('/booking/update/:id', (req, res) => {
        const { name, nric, room } = req.body;
        const { id } = req.params;
        if (name && nric && room) {

            const myquery = { _id: ObjectId(req.params.id) };
            const newvalues = {
                $set: {
                    name,
                    nric,
                    room
                }
            };
            db.collection("booking").updateOne(myquery, newvalues, (err, response) => {
                if (err) throw err;
                res.send(response);
            });

        }
        else {
            res.send('please provide parameters');
        }
    });

router.get('/:keyword', function(req, res, next){
    db.collection('booking').findOne({$or:[{nric: req.params.keyword}||{_id:req.params.keyword}]},
        function (err, post) {
            if (err) return next(err);
            res.json(post);
            });
        });

module.exports = router; 