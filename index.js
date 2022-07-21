const express = require('express')
const path = require('path')
const morgan = require('morgan')
const routes = require('./routes')

// App Initialization
const app = express()

// Development setup
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
  app.use(morgan('dev'))
}

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use(routes)

// Server Listener to PORT variable
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
