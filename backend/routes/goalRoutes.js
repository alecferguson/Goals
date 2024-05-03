const express = require('express')
const router = express.Router()
const {getGoals, setGoal, updateGoal, deleteGoal} = require('../controllers/goalController') //Pulling from controller
//Cleaning up routes since get and post use the same (optional)
//router.route('/'.get(getGoals).post(setGoal))
//router.route('/:id'.delete(getGoals).put(setGoal))

//Routes
router.get('/', getGoals)

router.post('/', setGoal)

router.put('/:id',updateGoal)

router.delete('/:id', deleteGoal)

module.exports = router