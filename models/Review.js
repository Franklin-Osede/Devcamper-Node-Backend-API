const mongoose = require ('mongoose');
const Bootcamp = require('./Bootcamp');

const ReviewSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: [true, 'Please add a title for the review'],
        maxlength: 100
    },
   text: {
        type: String,
        required: [true, 'Please add some text'],
    },
    rating: {
        type: Number,
        required: [true, 'Please add a number of weeks']
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    bootcamp: {
        type: mongoose.Schema.ObjectId,
        ref: 'Bootcamp',
        required: true
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    }
});



module.exports = mongoose.model('Review', ReviewSchema)