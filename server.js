const express = require('express')
const app = express()
const dotenv = require('dotenv'). config()
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const morgan = require('morgan')
const dns = require("dns")
dns.setServers(["8.8.8.8", "1.1.1.1"])

const User = require('./models/User')
const Listing = require('./models/Listing')
const Review = require('./models/Review')
const listingController = require('./controllers/listing.controller')
const userController = require('./controllers/user.controller')


async function connectToDataBase(){
    try{

        await mongoose.connect(process.env.DATABASE_CONNECTION_STRING)
        console.log('Connected to DB')
    }catch(err){
        console.log('Error:', err)
    
    }
}

connectToDataBase()

app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))
app.use(morgan('dev'))
app.use('/', listingController)
app.use('/', userController)



app.listen(3000,() => {
    console.log('App is Running')
})
