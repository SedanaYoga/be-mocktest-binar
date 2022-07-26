const express = require('express')
const path = require('path')
const router = express.Router()
const { notFound, errorHandler } = require('../middleware/errorMiddleware')
const userRoute = require('./userRoute')
const v1Route = require('./v1')
const v2Route = require('./v2')
// Swagger UI
const swaggerUi = require('swagger-ui-express')
const swaggerDoc = require('../config/swaggerBinar.json')
const { format } = require('../utils/textUtils')
router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))

router.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../public/index.html'))
})
router.use(userRoute)
router.use(v1Route)
router.use(v2Route)
router.use(notFound)
router.use(errorHandler)

module.exports = router
