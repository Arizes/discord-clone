const auth = (req, res, next) => {
    //console.log(req.user)
    if (req.user) {
        req.login(req.user, (err) => {
            if (err) console.log(err)
        })
        req.session.user = req.user
        res.sendStatus(200)
    } else {
        res.status(401).send({ message: "Not Authenticated" });
    };
};

const data = (req, res, next) => {
    console.log(req.session.user)
    if (req.user) {
        res.sendStatus(200)
    } else {
        res.status(401).send({ message: "Unauthorized" });
    };
};
const logout = (req, res, next) => {
    if (req.user) {
        req.logout();
    };
    res.redirect("/");
};

module.exports = { auth, data, logout }