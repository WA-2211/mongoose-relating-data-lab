const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema ({
   reviewTitle:{
    type: String,
    required: true,
    minLength: 8
   },
   reviewBody:{
    type: String,
    required: true,
    maxLength: 524
   },
   creator:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
   }
})

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review