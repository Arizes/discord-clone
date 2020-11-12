const router = require("express").Router();
const bcrypt = require('bcrypt')
const { nanoid } = require('nanoid');
const passport = require("passport");
const user = require("../models/user");
const { passportInitialize } = require("../strategy/passport-config");

router.get("/", (req, res) => {
    if(req.user) {
        res.send(req.user);
    } else {
        res.status(401).send({ message: "Unauthorized" })
    }
});

router.post("/login", passport.authenticate("local", {
    successRedirect: "http://localhost:3000/dashboard",
    failureRedirect: "http://localhost:3000/",
    failureFlash: true
}
))

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
            res.redirect("/dashboard")
        }
        if (userDetails) {
            res.redirect("http://localhost:3000")
        }
    } catch(err) {
        console.log(err)
    }
});

// router.get("/authenticate?:username", async (req, res) => {
//     try {
//         if (!req.params.username) return;
//         let findUser = user.findOne({ username: req.params.username })
//         if (findUser) res.sendStatus(401)
//     } catch (err) {
//     }
// })

router.get("/register", (req, res) => {
    res.redirect("/login")
})

module.exports = router;