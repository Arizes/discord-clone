const auth = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.sendStatus(404).send({ message: "Not Authenticated" });
    };
};
const data = (req, res, next) => {
    if (req.user) {
        res.send(req.user);
    } else {
        res.sendStatus(401).send({ message: "Unauthorized" });
    };
};
const logout = (req, res, next) => {
    if (req.user) {
        req.logout();
    };
    res.redirect("/");
};
const checkIfLoggedIn = (req, res, next) => {
    if (req.user) {
        res.redirect("/home")
    } else {
        next();
    }
}
module.exports = { auth, data, logout, checkIfLoggedIn }