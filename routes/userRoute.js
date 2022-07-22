const router = require('express').Router()
const {
  loginHandler,
  signupHandler,
  whoami,
} = require('../controller/userController.js')
const { restrictJwt } = require('../middleware/authMiddleware')

// POST Login to get a token
router.post('/auth/login', loginHandler)
// POST Signup to create an account
router.post('/auth/signup', signupHandler)
// GET Who am I?
router.get('/auth/whoami', restrictJwt, whoami)

module.exports = router
