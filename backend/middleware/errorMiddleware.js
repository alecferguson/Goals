//Just functions that execute during the response cycle.
//Seperates stack from message, change .ENV to production to see functionality
const errorHandler = (err, req, res, next) => { //Overwriting express js default error handler
    const statusCode = res.statusCode ? res.statusCode : 500 //If res.statusCode is there use that else, use 500

    res.status(statusCode)

    res.json({message: err.message, stack: process.env.NODE_ENV === 'production' ? null : err.stack })
}

module.exports = {
    errorHandler,
}