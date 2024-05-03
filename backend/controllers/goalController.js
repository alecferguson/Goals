const asyncHandler = require('express-async-handler')
//Using async for mongoose
// @desc Get a specific user goal
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler (async (req, res) => {
    res.status(200).json({message: 'Get Goals'})
})
// @desc Set a specific user goal
// @route POST /api/goals
// @access Private
const setGoal = asyncHandler(async (req, res) => {
    //Setting goal debug
    //console.log(req.body)
    if(!req.body.text) { //If no text is entered
        res.status(400)//Responding that it is not okay '400'
        //we can add .json({message: 'Please add a text field'}) to res.status but express has a built in error handler.
        throw new Error('Please add a text field')
    }
    //Debug
    res.status(200).json({message: 'Set Goals'})
})
// @desc Update Goal
// @route PUT /api/goals/:id
// @access Private
const updateGoal = asyncHandler (async (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
})
// @desc Delete a user goal
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = asyncHandler( async (req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
})

module.exports = {
    getGoals,
    setGoal,
    deleteGoal,
    updateGoal
}