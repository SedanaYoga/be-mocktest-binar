'use strict'
const bcrypt = require('bcrypt')

const encrypt = (password) => bcrypt.hashSync(password, 10)

module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'admin',
          email: 'admin@mock.com',
          passwordDigest: encrypt('test123'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'John Doe',
          email: 'johndoe@mock.com',
          passwordDigest: encrypt('test123'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Jane Doe',
          email: 'janedoe@mock.com',
          passwordDigest: encrypt('test123'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  async down(queryInterface, DataTypes) {
    await queryInterface.bulkDelete('users', null, {})
  },
}
