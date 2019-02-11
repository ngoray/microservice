const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema ({
    name:{
        type:String,
        required: [true,'Name field is required']
    },
    email:{
        type: String,
        required: [true, 'Email field is required']
    },
    rating: {
        type: String,
        required: [true, 'Rating field is required']
    },
    comment: {
        type: String,
    }

});

const api = mongoose.model('comment', CommentSchema);

module.exports = api;