const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel') //Loading in mongoose model
//Using async for mongoose
// @desc Get a specific user goal
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler (async (req, res) => {
    const goals = await Goal.find() //Finding from goal object
    res.status(200).json(goals)
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
    const goal = await Goal.create( {
        text: req.body.text,
    })
    res.status(200).json(goal)
    //Debug
    //res.status(200).json({message: 'Set Goals'})
})
// @desc Update Goal
// @route PUT /api/goals/:id
// @access Private
const updateGoal = asyncHandler (async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if(!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id,req.body, {new: true,})
    res.status(200).json(updatedGoal)
})
// @desc Delete a user goal
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = asyncHandler( async (req, res) => {
    //Getting goal
    const goal = await Goal.findById(req.params.id)
    if(!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }
    //Removing goal
    await goal.deleteOne()

    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getGoals,
    setGoal,
    deleteGoal,
    updateGoal
}