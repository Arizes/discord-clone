const user = require("./models/user")
const passportBearer = require("passport-http-bearer").Strategy
const passport = require('passport')

passport.use( new passportBearer((token, done) => {
    let User = user.findOne({ username: token.username, password: token.password })
    if (!User) return done(null, false)
    return done(null, User, { scope: "all" })
}
))
