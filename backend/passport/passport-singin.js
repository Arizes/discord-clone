const signIn = require("passport-local").Strategy;
const userSchema = require("../models/user");
const bcrypt = require('bcrypt');
const passport = require("passport");

passport.use( new signIn({ usernameField: "username", passwordField: "password" }, async (username, password, done) => {
    await userSchema.findOne({ username }, async (err, user) => {
        if (!user) return done(null, false)
        if (user) { 
            try {
                console.log(user.id)
                if (await bcrypt.compare(password, user.password)) {    
                    return done(null, user)
                } else {
                    return done(null, false)
                }
            } catch (err) {
                return done(err)
            }
        }
        })
    })
);

passport.serializeUser((user, done) => { 
    done(null, user.id) 
})

passport.deserializeUser( async (id, done) => { 
    console.log(id)
    try {
        const user = await userSchema.findOne({id});
        return user ? done(null, user) : done(null, null)
    } catch (err) {
        console.log(err)
        done(err, null)
    }
});