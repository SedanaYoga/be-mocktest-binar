'use strict'

module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.bulkInsert(
      'products',
      [
        {
          name: 'Macbook Pro 2022 14inch',
          price: 900,
          imageUrl:
            'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-select-202110?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1632788573000',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Macbook Pro 2022 13inch',
          price: 1200,
          imageUrl:
            'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202206?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1653493200207',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Macbook Pro 2022 16inch',
          price: 2000,
          imageUrl:
            'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spacegray-select-202110?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1632788574000',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  async down(queryInterface, DataTypes) {
    await queryInterface.bulkDelete('products', null, {})
  },
}
