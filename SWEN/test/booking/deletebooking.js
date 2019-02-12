const assert = require('assert');
const booking = require('../../models/booking');

describe('Deletes created booknig application', () => {
    it('Deletes a booking application', done => {
        booking
        .findOneAndDelete({ name: 'userTester' }).then(() => {
        });
        done();
    });
});