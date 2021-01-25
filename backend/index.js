const express  = require('express');
const app      = express();
const session  = require('express-session');
const Store    = require('connect-mongo')(session);
const mongoose = require("mongoose");
const cors     = require("cors");
const path     = require("path")
const passport = require('passport');
require("./passport/passport-singin")

/**
 * Routes
 */
const router = require("./routes/index")

mongoose.connect("mongodb+srv://arize:arize@cluster0.ig7ih.mongodb.net/data", { 
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

// let options = { babel: {presets: ['@babel/preset-react', [ '@babel/preset-env', {'targets': {'node': 'current'}}]]} }
// app.set("views", __dirname + "/pages" );
// app.set("view engine", "jsx");
// app.engine('jsx', require('express-react-views').createEngine(options));

app.use(express.urlencoded({ extended: false }));

app.use(cors({
  origin: ['http://localhost:3000'],
  credentials: true,
}))

app.use(session( {
  secret: 'secret',
  cookie: {
      maxAge: 60000 * 10 * 24
  },
  resave: false,
  saveUninitialized: false,
  name: "auth",
  store: new Store({mongooseConnection: mongoose.connection }),
  samesite: "none"
}))

app.use(passport.initialize());
app.use(passport.session());

app.use("/api", router)

app.use("*", async (req, res, next) => {
  res.setHeader('Access-Control-Allow-Credentials', "http://localhost:3000");
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
	next();
});

const PORT = 3001 || process.env.PORT
app.listen(PORT, () => {
  console.log(`Mixing it up on port ${PORT}`)
});