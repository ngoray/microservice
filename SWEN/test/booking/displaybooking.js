const assert = require('assert');
const booking = require('../../models/booking');

describe('Display booking', function () {
    it('Should display booking', done => {
        booking
            .find({}).then(() => {
                
            })
            done();
    })
});