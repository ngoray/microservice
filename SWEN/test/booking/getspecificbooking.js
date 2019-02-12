const assert = require('assert');
const booking = require('../../models/booking');

describe('Get userTester Data', function(){
    it('Should book a room', done =>{
        booking
            .create({
                name: 'userTester',
                nric: 's9813266z',
                room: 'king size bed',
                guest: '5',
                checkin: '1/1/2019',
                checkout: '2/2/2019'
            })
            .then(booking =>{
                assert(booking.isNew === false);
            });
            done();
    })

    it('Should display userTester booking', done => {
        booking
            .findOne({ name: 'userTester' }).then(() => {
                
            })
            done(); 
    })

    it('Deletes a booking application', done => {
        booking
        .findOneAndDelete({ name: 'userTester' }).then(() => {
        });
        done();
    });
});