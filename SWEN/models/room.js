const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const RoomSchema = new Schema ({
    name:{
        type:String,
        required: [true,'Name field is required']
    },
    Image:{
        type: String,
        required: [true, 'Image field is required']
    },
    description: {
        type: String,
        required: [true, 'Description field is required']
    }
});

const room = mongoose.model('room', RoomSchema);

module.exports = room;