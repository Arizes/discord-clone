const express = require('express');
const app = express();
const session = require('express-session');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require("cors");
const cookieParser = require("cookie-parser");

const passport = require('passport');
require("./passport/passport-singin")

/**
 * Routes
 */
const router = require("./routes/index")

mongoose.connect("mongodb+srv://arize:arize@cluster0.ig7ih.mongodb.net/data", { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// let options = { babel: {presets: ['@babel/preset-react', [ '@babel/preset-env', {'targets': {'node': 'current'}}]]} }
// app.set("views", __dirname + "/pages" );
// app.set("view engine", "jsx");
// app.engine('jsx', require('express-react-views').createEngine(options));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}))

app.use(cookieParser());
app.use(session({
  secret: 'n@arize@',
  cookie: {
    maxAge: 86400000,
  },
  resave: false,
  saveUninitialized: false,
  name: "auth",
  samesite: "none"
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api", router)

app.use("*", async (req, res, next) => {
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});

// app.get("/", (req, res) => {
//   res.sendFile(join(__dirname, "..", "frontend", "public", "index.html"));
// });

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Mixing it up on port ${PORT}`)
});