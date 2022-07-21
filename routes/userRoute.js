const router = require('express').Router()
const {
  loginHandler,
  signupHandler,
} = require('../controller/userController.js')

// POST Login to get a token
router.post('/auth/login', loginHandler)
// POST Signup to create an account
router.post('/auth/signup', signupHandler)

module.exports = router
