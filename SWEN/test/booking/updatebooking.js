const assert = require('assert');
const booking = require('../../models/booking');

describe('Update room data', function(){
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

    it('Should assign staff memeber housekeeping', done => {
        booking
            .findOneAndUpdate({ name: 'userTester' })
                .update({
                    name: 'userTester',
                    nric: 's9z',
                    room: 'king size bed',
                    guest: '5',
                    checkin: '1/1/2019',
                    checkout: '2/2/2019'
                })
                    .then(booking => {
                        // assert(booking.isNew === false);
                    });
                    done();
            });

    it('Deletes a booking application', done => {
        booking
        .findOneAndDelete({ name: 'userTester' }).then(() => {
                    });
                    done();
                });
});
