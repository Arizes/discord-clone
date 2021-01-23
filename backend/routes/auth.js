const router = require("express").Router();
const passport = require("passport");
const middleware = require("../middleware/auth")
const {snowflake} = require("../controller/snowflakes")
const bcrypt = require("bcrypt")
const userSchema = require("../models/user")

router.get("/", middleware.data)

router.post("/login", passport.authenticate("local"), (req, res) => {
    if (req.user) { 
        res.sendStatus(200)
    }
})

router.get("/logout", middleware.logout)

router.get("/register", (req, res, next) => {
    res.render("register", { title: "Register" })
})
router.post("/register", async (req, res) => {
    const { username, password } = req.body;
    const userId = snowflake(1, 1, 1); 
    const hashedPassword = await bcrypt.hash(password, 5)
    let newData = new userSchema({ id: userId, username: username, password: hashedPassword })
    newData.save()
    req.login(newData, function(err) {
        if (err) console.log(err)
        console.log(req.user)
    })
}
);

module.exports = router;