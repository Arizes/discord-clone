const router = require("express").Router();
const passport = require("passport");
const middleware = require("../middleware/auth")

router.get("/", middleware.checkIfLoggedIn, (req, res) => {
    res.render("loginPage", { title: "Login" })
})

router.post("/login", passport.authenticate("signIn", {
    successRedirect: "/home",
}, (req, res, next) => {
    if (req.user) {
        next()
    } else {
        res.render("loginPage", { title: "SignIn Error", error: "Invalid Username or Password!" })
    }
})
);

router.get("/logout", middleware.logout)

router.get("/register", (req, res, next) => {
    res.render("register", { title: "Register" })
})
router.post("/register", passport.authenticate("signUp", {
    successRedirect: "/home"
}, (res, req, next) => {
    if (req.user) {
        next();
    } else {
        res.render("register", { title: "SignUp Error", error: "Invalid Username or Password!" })
    }
})


);

module.exports = router;