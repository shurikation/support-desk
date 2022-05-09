const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController')

//Before refactoring:
// router.post('/', (req, res) => {
//   res.send('Register Route')
// })

router.post('/', registerUser)
router.post('/login', loginUser)

module.exports = router;