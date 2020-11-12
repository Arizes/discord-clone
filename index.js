const express = require('express')
const app = express()
const router = require('express').Router();
const routes = require('./routes')
const session = require('express-session');
const cors = require('cors');
const passport = require('passport')
require("./strategy/passport-config")
const path = require('path')
const mongoose = require('mongoose');
const passportInitialize = require('./strategy/passport-config');
const flash = require('express-flash');

passportInitialize(passport)

mongoose.connect("mongodb+srv://arize:arize@cluster0.ig7ih.mongodb.net/data", { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
//app.use(express.static(path.join(__dirname, 'client/build')));

app.use(flash())
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

// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
// }
// );

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Mixing it up on port ${PORT}`)
})