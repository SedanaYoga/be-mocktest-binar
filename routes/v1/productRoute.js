const router = require('express').Router()
const {
  getAllHandler,
  getByIdHandler,
  addHandler,
  updateHandler,
  deleteHandler,
} = require('../../controller/productController.js')
const { restrictJwt } = require('../../middleware/authMiddleware')

router.use(restrictJwt)

// GET Retrieve all products data
router.get('/products', getAllHandler)
// POST Add a product
router.post('/products', addHandler)
// GET Retrieve product by ID
router.get('/products/:id', getByIdHandler)
// PUT Update a product by ID
router.put('/products/:id', updateHandler)
// DELETE Delete a product by ID
router.delete('/products/:id', deleteHandler)

module.exports = router
