const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware') //Pulling custom error handler
const port = process.env.PORT  || 5000 //Opens port located env or 5000 if it does not work.

const app = express() //Creating variable express and init
//Adding middleware to read body
app.use(express.json())
app.use(express.urlencoded({extended: false}))
//Goals route
app.use('/api/goals', require('./routes/goalRoutes')) //References goalRoutes
//Using custom error handler
app.use(errorHandler)
//Listening to port
app.listen(port, () => console.log(`Server started on port ${port}`)) //listening from the app object, using tilde