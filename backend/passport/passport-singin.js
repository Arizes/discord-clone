const passport = require("passport");
const signIn = require("passport-local").Strategy;
const userAuth = require("../models/userAuth");
const bcrypt = require('bcrypt');

passport.serializeUser((user, done) => { 
    done(null, user.id) 
});

passport.deserializeUser( async (id, done) => { 
    try {
        let user = await userSchema.findOne({ id });
        return user ? done(null, user) : done(null, false);
    } catch (err) {
        console.log(err)
        done(err, false)
    }
});

passport.use(new signIn( { usernameField: 'username', passwordField: 'password' }, async (username, password, done) => {
    let findUser = await userAuth.findOne({ username })
    if (findUser) {
        if (await bcrypt.compare(password, findUser.password)) {
            return done(null, findUser)
        } else {
            return done(null, false)
        }
    } else return done(null, false)
})
);