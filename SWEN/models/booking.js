const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const BookingSchema = new Schema ({
    name:{
        type:String,
        required: [true,'Name field is required']
    },
    nric:{
        type: String,
        required: [true, 'Email field is required']
    },
    room: {
        type: String,
        required: [true, 'Rating field is required']
    },
    guest: {
        type: String,
    },
    checkin: {
        type: Date,
    },
    checkout: {
        type: Date,
    }

});

const booking = mongoose.model('booking', BookingSchema);

module.exports = booking;