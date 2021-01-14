const auth = (req, res, next) => {
    if (req.isAuthenticated()) {
        res.redirect("/home")
    } else {
        res.render("loginPage", { error: false })
    }
}

module.exports = { auth }