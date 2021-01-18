const user  = require("../models/user");
const signUp = require("passport-local").Strategy;
const bcrypt = require('bcrypt');
const { snowflake } = require("../controller/snowflakes")

function passportInitializeSignUp(passport) {

    passport.use( new signUp({ usernameField: "username" }, async (username, password, done) => {
        user.findOne({ username: username }, async (err, data) => {
            let userDetails = await user.findOne({ username })
            if (!userDetails) {
                const userId = snowflake(1, 1, 1)
                const hashedPassword = await bcrypt.hash(password, 5)
                let newData = new user({ id: userId, username: username, password: hashedPassword })
                newData.save()
                res.redirect("/home")
            }
            if (userDetails) {
                res.redirect("/")
            }
        })
        })
    );

    passport.serializeUser((user, done) => { done(null, user.id) })
    
    passport.deserializeUser((id, done) => { 
        user.findOne({ id }, async (err, data) => {
            return done(null, data) 
        })
    });
};

module.exports = passportInitializeSignUp