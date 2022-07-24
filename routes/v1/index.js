const router = require('express').Router()
const productV1Endpoints = require('./productRoute.js')

router.use('/v1', productV1Endpoints)

module.exports = router
