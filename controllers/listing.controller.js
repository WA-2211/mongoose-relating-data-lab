const express = require('express')
const router = express.Router()
const Listing = require('../models/Listing')
const User = require('../models/User')


router.get('/listings/new', async(req, res)=>{
    try{
        const foundAllUsers = await User.find()
    res.render('listings/create-listing.ejs', {owners: foundAllUsers})
    }catch(err){
        console.log('ERROR:', err)
    }
})

router.post('/listings', async (req, res) => {
    try{
    const createListings = await  Listing.create(req.body)
    res.redirect('/listings')
    } catch(err){
        console.log('ERROR:', err)
    }
})

router.get('/listings', async(req, res)=>{
    try{
        const foundAllListings = await Listing.find().populate('owner')
        res.render('listings/all-listings.ejs', {listings: foundAllListings})
    }catch(err){
        console.log('ERROR:', err)
    }
})

router.get('/listings/:id/edit', async(req,res)=>{
    try{
        const foundAllUsers = await User.find()
        const foundListing = await Listing.findById(req.params.id)
        res.render('listings/edit-listing.ejs', {listing: foundListing, owners: foundAllUsers})
    }catch(err){
        console.log('ERROR:', err)
    }
})
router.put('/listings/:id', async(req, res)=>{
        try{
             const updatedListing = await Listing.findByIdAndUpdate(req.params.id, req.body)
             res.redirect('/listings')

    }catch(err){
        console.log('ERROR:', err)
    }
})
router.delete('/listings/:id', async (req,res)=> {
        try{
            const updatedListing = await Listing.findByIdAndDelete(req.params.id)
            res.redirect('/listings')
    }catch(err){
        console.log('ERROR:', err)
    }
})


module.exports = router