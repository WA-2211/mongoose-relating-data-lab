const mongoose = require('mongoose')

const listingSchema = new mongoose.Schema ({
   streetAddress:{
    type: String
   },
   city:{
    type: String
   },
   price:{
    type: Number
   },
   size:{
    type: Number
   },
   owner:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
   }
})

const Listing = mongoose.model('Listing', listingSchema)

module.exports = Listing