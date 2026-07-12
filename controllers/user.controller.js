const express = require('express')
const router = express.Router()
const Listing = require('../models/Listing')
const User = require('../models/User')


router.get('/users/new', async (req,res)=>{
    try{

        res.render('users/create-user.ejs')
    }
    catch(err){
        console.log('ERROR:', err)

    }
})
router.post('/users/new', async (req,res)=>{
    try{
        const newUser = await User.create(req.body)
        res.redirect('/users')
    }
    catch(err){
        console.log('ERROR:', err)

    }
})

router.get('/users', async (req, res) =>{
     try{

        const foundAllUsers = await User.find()
        res.render('users/all-users.ejs', {users: foundAllUsers})
    }
    catch(err){
        console.log('ERROR:', err)

    }

})

module.exports = router