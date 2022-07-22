const passportJwt = require('../config/passport')

exports.restrictJwt = passportJwt.authenticate('jwt', {
  session: false,
})
