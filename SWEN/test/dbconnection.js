const mongoose = require('mongoose');

// ES6 Promises
mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);

before(done => {
    mongoose.connect(
        'mongodb://test1:testone1@ds233320.mlab.com:33320/dormestation',
        { useNewUrlParser: true }
    );

    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'DB connection error:'));
    db.once('open', () => {
        // Connect
        console.log('DB connection to MLAB successful');
        done();
    });
});

describe('Test Connection to Mlab', function(){
    it('Checks the connection', () => {
        
    })
});

after(done => {
    const db = mongoose.connection;
    if (db.readyState === 1){
        mongoose.disconnect();
        console.log('Closing connection to MLAB');
    }
    done();
})
