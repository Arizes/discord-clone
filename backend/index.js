const express = require('express');
const app = express();
//const routes = require("./routes/index.js")
const session = require('express-session');
const passport = require('passport');
const { join } = require('path');
const mongoose = require("mongoose");
const flash = require('express-flash');
const bodyParser = require('body-parser');
const passportInitialize = require("./passport/passport-config");
require("./passport/passport-config");
passportInitialize(passport);

/* Importing routes */
const auth = require("./routes/auth");
const home = require("./routes/home");


mongoose.connect("mongodb+srv://arize:arize@cluster0.ig7ih.mongodb.net/data", { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.set("views", join(__dirname, "..", "frontend", "src", "pages"));
app.set("view engine", "jsx");
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
  secret: 'n@arize@arize',
  cookie: {
    maxAge: 60000 * 60 * 24
  },
  resave: false,
  saveUninitialized: false,
  name: "auth",
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());

// app.get("/", (req, res) => {
//   res.sendFile(join(__dirname, "..", "frontend", "public", "index.html"));
// });

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Mixing it up on port ${PORT}`)
});