const assert = require('assert');
const comment = require('../../models/comment');

describe('Post Feedback', function(){
    it('Should Post Comment', done =>{
        comment
            .create({
                name: 'userTester',
                email: 'testuser@gmail.com',
                rating: 'good',
                comment: 'none'
            })
            .then(comment =>{
                assert(comment.isNew === false);
            });
            done();
    })
})