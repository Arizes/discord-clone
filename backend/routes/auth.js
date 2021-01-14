const router                 = require("express").Router();
const bcrypt                 = require('bcrypt');
const { nanoid }             = require('nanoid');
const passport               = require("passport");
const user                   = require("../models/user");
const { passportInitialize } = require("../passport/passport-config");
const { logout } = require("../middleware/auth")
const { auth } = require("../controllers/auth")

router.get("/", auth)

router.post("/login", passport.authenticate("local", {
    failureRedirect: "/",
    successRedirect: "/home",
    failureFlash: "Error"
    })
);

router.get("/logout", logout)

router.post("/register", async (req, res) => {
    try {
        let userDetails = await user.findOne({ username: req.body.username })
        if (!userDetails) {
            const userId =  nanoid()
            const hashedPassword = await bcrypt.hash(req.body.password, 10)
            let newData = new user({
                id: userId,
                username: req.body.username,
                password: hashedPassword })
            newData.save()
            res.redirect("/home")
        }
        if (userDetails) {
            res.redirect("/")
        }
    } catch(err) {
        console.log(err)
    }
});

module.exports = router;