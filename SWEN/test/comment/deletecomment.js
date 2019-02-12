const assert = require('assert');
const comment = require('../../models/comment');

describe('Deletes created comments', () => {
    it('Deletes a comment', done => {
        comment.findOneAndDelete({ name: 'userTester' }).then(() => {
        });
        done();
    });
});