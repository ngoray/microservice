const assert = require('assert');
const room = require('../../models/room');

describe('Display Room', function () {
    it('Should display rooms', done => {
        room
            .find({}).then(() => {
                
            })
            done();
    })
});