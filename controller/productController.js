const asyncHandler = require('express-async-handler')
const { Product } = require('../models')
const findHandler = require('../utils/findHandler')
const { format } = require('../utils/textUtils')
const keyConstraint = ['name', 'price', 'imageUrl']

// @desc Get All products
// @route GET /v1/products
// @access Private
exports.getAllHandler = asyncHandler(async (req, res) => {
  const products = await findHandler('Product', [], 'all')
  if (products === null) {
    return res
      .status(404)
      .json(
        format('ERROR', null, { message: 'No products on this database yet' }),
      )
  } else {
    return res.status(200).json(format('OK', products))
  }
})

// @desc Get a Product by Id
// @route GET /v1/products/:id
// @access Private
exports.getByIdHandler = asyncHandler(async (req, res) => {
  const id = req.params.id
  const product = await findHandler('Product', [], 'one', id)
  if (product === null) {
    return res
      .status(404)
      .json(format('ERROR', null, { message: `No product with id: ${id}` }))
  } else {
    return res.status(200).json(format('OK', product))
  }
})

// @desc Create a Product
// @route POST /v1/products
// @access Private
exports.addHandler = asyncHandler(async (req, res) => {
  const newObject = req.body
  let missingProps = [...keyConstraint]

  Object.keys(newObject).forEach((key) => {
    if (!keyConstraint.includes(key)) {
      return res
        .status(400)
        .json(
          format('ERROR', null, { message: `${key} is an invalid property` }),
        )
    } else {
      missingProps = missingProps.filter((props) => props !== key)
    }
  })

  if (missingProps.length !== 0) {
    return res.json(
      format('ERROR', null, {
        message: `Please input ${missingProps.toString()}`,
      }),
    )
  }
  const createdProduct = await Product.create(newObject)
  res.status(201).json(format('OK', createdProduct))
})

// @desc Update a Product
// @route PUT /v1/products/:id
// @access Private
exports.updateHandler = asyncHandler(async (req, res) => {
  const id = req.params.id
  const newObject = req.body

  Object.keys(newObject).forEach((key) => {
    if (!keyConstraint.includes(key))
      return res
        .status(400)
        .json(
          format('ERROR', null, { message: `${key} is an invalid property` }),
        )
  })

  const isUpdated = await Product.update(newObject, {
    where: {
      id,
    },
  })

  if (!isUpdated[0])
    return res
      .status(400)
      .json(format('ERROR', null, { message: `ID not found` }))

  const updatedData = await findHandler('Product', [], 'one', id)

  return res.status(201).json(format('OK', updatedData))
})

// @desc Delete A Product By ID
// @route Delete /v1/products/:id
// @access Private
exports.deleteHandler = asyncHandler(async (req, res) => {
  const id = req.params.id

  const deletedData = await Product.destroy({
    where: { id },
  })
  if (!deletedData)
    return res
      .status(404)
      .json(format('ERROR', null, { message: `ID not found` }))

  return res
    .status(200)
    .json(format('OK', `Success deleting product with id: ${id}`))
})
