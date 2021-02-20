const router = require("express").Router();
const passport = require("passport");
const middleware = require("../middleware/auth");
const { createSnowflake } = require("../controller/snowflakes");
const bcrypt = require("bcrypt");
const userSchema = require("../models/userAuth");

router.get("/", middleware.data);

router.post('/login', passport.authenticate('local', { session: true }), middleware.auth);

router.get("/logout", middleware.logout);

router.post("/register", async (req, res) => {
    const { username, password } = req.body;

    userSchema.findOne({ username }, async (err, data) => {
        if (data) return res.status(404).send({ message: "Account already exists with that username" })
        else {
            // Generating unique snowflake
            const userId = await createSnowflake(1); 
            // Hashing user password using bcrypt
            const hashedPassword = await bcrypt.hash(password, 5);
            // Created user record in database
            new userSchema({ id: userId, username: username, password: hashedPassword }).save();

            req.login(newData, function(err) {
                if (err) console.log(err);
                console.log(req.user);
            });
        };
    });
});

module.exports = router;