require("dotenv").config()
const express = require('express');
const app = express();
const session = require('express-session');
const Store = require('connect-mongo')(session);
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require('body-parser');
require("./passport/passport-singin")
const passport = require('passport');
const { graphqlHTTP } = require("express-graphql")
const RootSchema = require("./graphql/index")
const routes = require("./routes/index");

// Connecting to Mongo Database
mongoose.connect(process.env.MongoUri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

// let options = { babel: {presets: ['@babel/preset-react', [ '@babel/preset-env', {'targets': {'node': 'current'}}]]} }
// app.set("views", __dirname + "/pages" );
// app.set("view engine", "jsx");
// app.engine('jsx', require('express-react-views').createEngine(options));

app.use(express.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(express.json()); // parse application/json

// Setting up Cors to accept requests and redirects to the origin
app.use( cors({ origin: 'http://localhost:3000', credentials: true }) );

app.use(session({
  secret: 'secret',
  name: "auth",
  cookie: {
    maxAge: 60000 * 60 * 24,
    secure: true,
  },
  resave: false,
  saveUninitialized: false,
  //store: new Store({ mongooseConnection: mongoose.connection })
})
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api", routes)
app.use("/graphql", graphqlHTTP({ graphiql: true, schema: RootSchema }) )

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With,content-type,set-cookie');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  // Pass to next layer of middleware
  next();
});

const PORT = process.env.PORT || 3001
app.listen(PORT, () => { 
  console.log(`Running on port ${PORT}`) 
});