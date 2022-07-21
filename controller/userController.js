const asyncHandler = require('express-async-handler')
const { User } = require('../models')

// @desc Login new user
// @route POST /auth/signup
// @access Public
exports.loginHandler = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  const user = await User.authenticate({ email, password })
  const dataToJson = {
    status: 'OK',
    result: {
      access_token: user.generateToken(),
    },
    errors: {},
  }
  res.status(200).json(dataToJson)
})

// @desc Register new user
// @route POST /auth/signup
// @access Public
exports.signupHandler = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  if (
    !name ||
    name === '' ||
    !email ||
    email === '' ||
    !password ||
    password === ''
  ) {
    res.status(400).json({
      message: 'Please enter all user data!',
      status: 'ERROR',
      code: 400,
    })
  }

  try {
    console.log({ name, email, password })
    const user = await User.signUp({
      password,
      name,
      email,
    })
    return res.status(201).json({
      status: 'OK',
      result: user,
      errors: {},
    })
  } catch (err) {
    return res.status(400).json(err)
  }
})
