'use strict'
const { Model } = require('sequelize')
const bcrypt = require('bcrypt')
const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    static encrypt = (password) => bcrypt.hashSync(password, 10)

    static signUp = ({ password, name, email }) => {
      const encryptedPassword = this.encrypt(password)
      const user = this.create({
        passwordDigest: encryptedPassword,
        name,
        email,
      })
      return user
    }

    checkPassword = (password) =>
      bcrypt.compareSync(password, this.passwordDigest)

    static authenticate = asyncHandler(async ({ email, password }) => {
      const user = await this.findOne({ where: { email } })
      if (!user) throw new Error('Account does not exist')
      const isPasswordValid = user.checkPassword(password)
      if (!isPasswordValid)
        throw new Error('Please input the correct password!')
      return Promise.resolve(user)
    })

    generateToken = () => {
      const payload = {
        id: this.id,
      }
      const secret = process.env.SECRET_JWT
      const token = jwt.sign(payload, secret, { expiresIn: '1d' })
      return token
    }
  }

  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      passwordDigest: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: 'users',
      modelName: 'User',
    },
  )
  return User
}
