const router = require('express').Router()
const productV2Endpoints = require('./productRoute.js')

router.use('/v2', productV2Endpoints)

module.exports = router
