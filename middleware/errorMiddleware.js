const { format } = require('../utils/textUtils')
exports.notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`)
  res.status(404)
  next(format('ERROR', null, { message: error.message }))
}

exports.errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 400 : res.statusCode
  res.status(statusCode)
  res.json(
    format('ERROR', null, {
      message: err.message,
      stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    }),
  )
}
