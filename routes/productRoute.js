const router = require('express').Router()
const {
  getAllHandler,
  getByIdHandler,
  addHandler,
  updateHandler,
  deleteHandler,
} = require('../controller/userController.js')

// GET Retrieve all products data
router.get('/v1/products', getAllHandler)
// POST Add a product
router.post('/v1/products', addHandler)
// GET Retrieve product by ID
router.get('/v1/products/:id', getByIdHandler)
// PUT Update a product by ID
router.put('/v1/products/:id', updateHandler)
// DELETE Delete a product by ID
router.delete('/v1/products/:id', deleteHandler)

module.exports = router
