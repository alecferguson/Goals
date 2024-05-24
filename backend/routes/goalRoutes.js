const express = require('express')
const router = express.Router()
const {getGoals, setGoal, updateGoal, deleteGoal} = require('../controllers/goalController') //Pulling from controller
//Cleaning up routes since get and post use the same (optional)
//router.route('/'.get(getGoals).post(setGoal))
//router.route('/:id'.delete(getGoals).put(setGoal))
const { protect } = require('../middleware/authMiddleware')
//Routes
router.get('/', protect, getGoals)

router.post('/', protect, setGoal)

router.put('/:id', protect, updateGoal)

router.delete('/:id', protect, deleteGoal)

module.exports = router