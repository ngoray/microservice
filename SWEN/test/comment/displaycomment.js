const assert = require('assert');
const comment = require('../../models/comment');

describe('Display Comment', function () {
    it('Should display comment', done => {
        comment
            .find({}).then(() => {
               
            })
            done();
    })
});