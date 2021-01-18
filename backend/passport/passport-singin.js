const user  = require("../models/user");
const signIn = require("passport-local").Strategy;
const bcrypt = require('bcrypt');

function passportInitializeSignIn(passport) {

    passport.use( new signIn({ usernameField: "username" }, async (username, password, done) => {
        user.findOne({ username: username }, async (err, data) => {
            if (!data) return done(null, false)
            try {
                if (await bcrypt.compare(password, data.password)) {
                    return done(null, data)
                } else {
                    return done(null, false)
                }
            } catch (err) {
                return done(err)
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

module.exports = passportInitializeSignIn