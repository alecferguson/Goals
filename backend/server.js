const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT  || 5000 //Opens port located env or 5000 if it does not work.

const app = express() //Creating variable express and init

app.use('/api/goals', require('./routes/goalRoutes')) //References goalRoutes
app.listen(port, () => console.log(`Server started on port ${port}`)) //listening from the app object, using tilde