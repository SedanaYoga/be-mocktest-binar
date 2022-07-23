const router = require('express').Router()
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
/**
 * @swagger
 * /v1/products:
 *  get:
 *    tags:
 *     - "Product"
 *    description: GET Retrieve All Products Data
 *    consumes:
 *    - "application/json"
 *    response:
 *      200:
 *        description: "Successfully retrieved"
 *      400:
 *        description: "No Product found"
 */
router.get('/v1/products', getAllHandler)

// POST Add a product
/**
 * @swagger
 * /v1/products:
 *  post:
 *    tags:
 *     - "Product"
 *    description: POST Add a product
 *    consumes:
 *    - "application/json"
 *    response:
 *      200:
 *        description: "Successfully created"
 */
router.post('/v1/products', addHandler)
// GET Retrieve product by ID
router.get('/v1/products/:id', getByIdHandler)
// PUT Update a product by ID
router.put('/v1/products/:id', updateHandler)
// DELETE Delete a product by ID
router.delete('/v1/products/:id', deleteHandler)

module.exports = router
