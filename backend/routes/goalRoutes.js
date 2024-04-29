const express = require('express')
const router = express.Router()
//Routes
router.get('/', (req, res) => {
    res.status(200).json({message: 'Get Goals'})
})
router.post('/', (req, res) => {
    res.status(200).json({message: 'Set Goals'})
})
router.put('/:id', (req, res) => { //updates
    res.status(200).json({message: `Update goal ${req.params.id}`})
})
router.delete('/:id', (req, res) => { //Deletes
    res.status(200).json({message: `Delete goal ${req.params.id}`})
})
module.exports = router