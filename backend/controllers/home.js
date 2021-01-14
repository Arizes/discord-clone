const home = (req, res, next) => {
    if (req.isAuthenticated()) { 
        console.log(req)
        res.render("home.jsx", { loggedIn: true, avater: req.user.avatar, username: req.user.username, title: "Home Page"})
    } else {
        res.render("home.jsx", { loggedIn: false, title: "Redirecting..." })
    }
}
module.exports = { home }