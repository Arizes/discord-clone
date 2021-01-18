const home = (req, res, next) => {
    if (req.user) {
        res.render(req.url, { title: "Homepage" });
    } else {
        res.redirect("/")
    }
}

module.exports = { home }