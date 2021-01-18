const express = require('express');
const app = express();
//const routes = require("./routes/index.js")
const session = require('express-session');
const passport = require('passport');
const { join } = require('path');
const mongoose = require("mongoose");
const flash = require('express-flash');
const bodyParser = require('body-parser');
const passportInitializeSignIn = require("./passport/passport-singin");
const passportInitializeSignUp = require("./passport/passport-signup")
passportInitializeSignIn(passport);
passportInitializeSignUp(passport);

/* Importing routes */
const auth = require("./routes/auth");
const home = require("./routes/home");

mongoose.connect("mongodb+srv://arize:arize@cluster0.ig7ih.mongodb.net/data", { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let options = { babel: {presets: ['@babel/preset-react', [ '@babel/preset-env', {'targets': {'node': 'current'}}]]} }
app.set("views", __dirname + "/pages" );
app.set("view engine", "jsx");
app.engine('jsx', require('express-react-views').createEngine(options));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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

app.use("/", auth)
app.use("/home", home)

// app.get("/", (req, res) => {
//   res.sendFile(join(__dirname, "..", "frontend", "public", "index.html"));
// });

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Mixing it up on port ${PORT}`)
});