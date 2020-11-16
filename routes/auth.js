const router                 = require("express").Router();
const bcrypt                 = require('bcrypt');
const { nanoid }             = require('nanoid');
const passport               = require("passport");
const user                   = require("../models/user");
const { passportInitialize } = require("../strategy/passport-config");

router.get("/", (req, res) => {
    if(req.user) {
        res.send(req.user);
    } else {
        res.status(401).send({ message: "Unauthorized" });
    }
});

router.post("/login", passport.authenticate("local", {
    failureRedirect: "/api/auth/logout",
}), (req, res) => {
    res.redirect("http://localhost:3000/home")
});

/*router.get("/login", (req, res) => {
    if (req.user) {
        res.redirect("http://localhost:3000/home")
    } else {
        res.redirect("http://localhost:3000/")
    }
})*/

router.get("/logout", (req, res) => {
    if (req.user) {
        req.logout()
        res.redirect("http://localhost:3000/")
    } else {
        res.redirect("http://localhost:3000/")
    }
})
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
            res.redirect("/")
        }
        if (userDetails) {
            res.redirect("http://localhost:3000/")
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
    res.redirect("/")
});

module.exports = router;