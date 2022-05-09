const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getMe } = require('../controllers/userController')

//Before refactoring:
// router.post('/', (req, res) => {
//   res.send('Register Route')
// })

//If we wanna protect - we add this as a second argument to router method
const {protect} = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe)

module.exports = router;