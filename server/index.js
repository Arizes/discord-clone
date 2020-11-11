const express = require('express')
const app = express()
const router = require('express').Router();
const routes = require('./routes')
const session = require('express-session');
const cors = require('cors');
const passport = require('passport')
require("./passport-config")

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use( cors( {
    origin: ['http://localhost:3000'],
    credentials: true,
}))

app.use(session( {
  secret: 'n@arize@arize',
  cookie: {
      maxAge: 60000 * 60 * 24
  },
  resave: false,
  saveUninitialized: false,
  name: "auth"
}))

app.use(passport.initialize());
app.use(passport.session());

app.use("/api", routes)

app.get("*", (req, res) => {
     return res.status(401).send({ message: "Unauthorised" })
})
const PORT = 3001
app.listen(PORT, () => {
  console.log(`Mixing it up on port ${PORT}`)
})