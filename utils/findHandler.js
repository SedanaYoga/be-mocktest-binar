'use strict'
const model = require('../models/index')

module.exports = async (
  type = 'Product',
  [...includeCol],
  findMethod = 'all',
  id = '',
) => {
  try {
    const data =
      findMethod === 'all'
        ? await model[type].findAll({
            include: [...includeCol],
          })
        : findMethod === 'one'
        ? await model[type].findOne({
            where: {
              id,
            },
            include: [...includeCol],
          })
        : null
    return data
  } catch (error) {
    return new Error(error)
  }
}
