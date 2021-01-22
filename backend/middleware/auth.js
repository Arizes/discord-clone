const auth = (req, res, next) => {
    if (req.user) {
        res.sendStatus(200)
    } else {
        res.sendStatus(401).send({ message: "Not Authenticated" });
    };
};

const data = (req, res, next) => {
    if (req.user) {
        res.sendStatus(200).send(req.user);
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