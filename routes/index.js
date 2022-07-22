const express = require('express')
const router = express.Router()
const { notFound, errorHandler } = require('../middleware/errorMiddleware')
const userRoute = require('./userRoute')
const productRoute = require('./productRoute')

router.get('/', (req, res) => {
  return res.status(200).json({
    message: "Congratulations, you're in!",
    status: 'OK',
    code: 200,
  })
})
router.use(userRoute)
router.use(productRoute)
router.use(notFound)
router.use(errorHandler)

module.exports = router
