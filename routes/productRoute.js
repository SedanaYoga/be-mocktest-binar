const router = require('express').Router()
const cors = require('cors')
const {
  getAllHandler,
  getByIdHandler,
  addHandler,
  updateHandler,
  deleteHandler,
} = require('../controller/productController.js')
const { restrictJwt } = require('../middleware/authMiddleware')

router.use(restrictJwt)

// GET Retrieve all products data
router.get('/v1/products', getAllHandler)
// POST Add a product
router.post('/v1/products', addHandler)
// GET Retrieve product by ID
router.get('/v1/products/:id', getByIdHandler)
// PUT Update a product by ID
router.put('/v1/products/:id', cors(), updateHandler)
// DELETE Delete a product by ID
router.delete('/v1/products/:id', cors(), deleteHandler)

module.exports = router
