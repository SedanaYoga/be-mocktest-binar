const express = require('express')
const routes = require('./routes')
const passportJwt = require('./config/passport')
const cors = require('cors')

// Swagger UI
const swaggerUi = require('swagger-ui-express')
const swaggerDoc = require('./config/swaggerBinar.json')

// App Initialization
const app = express()

// Development setup
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
  app.use(require('morgan')('dev'))
}

// const corsOptions = {
//   origin: '*',
//   methods: ['GET', 'POST'],
//   credentials: true,
// }

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(passportJwt.initialize())
// app.use(cors(corsOptions))

// Routes
app.use(routes)

// Server Listener to PORT variable
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
