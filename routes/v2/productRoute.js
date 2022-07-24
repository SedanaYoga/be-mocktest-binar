const router = require('express').Router()
const { restrictJwt } = require('../../middleware/authMiddleware')

router.use(restrictJwt)

// GET Show Hello World
router.get('/products', (req, res) => {
  res.status(200).json({
    message: 'Hello World',
  })
})

module.exports = router
