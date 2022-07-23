const express = require('express')
const router = express.Router()
const { notFound, errorHandler } = require('../middleware/errorMiddleware')
const userRoute = require('./userRoute')
const productRoute = require('./productRoute')
// Swagger UI
const swaggerUi = require('swagger-ui-express')
const swaggerDoc = require('../config/swaggerBinar.json')
const { format } = require('../utils/textUtils')
router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))

router.get('/', (req, res) => {
  res
    .status(200)
    .json(
      format(
        'OK',
        "Congrats! you're in, go to https://mocktest-be.herokuapp.com/docs to get into documentation!",
      ),
    )
})
router.use(userRoute)
router.use(productRoute)
router.use(notFound)
router.use(errorHandler)

module.exports = router
