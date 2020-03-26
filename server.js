const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const connectDB = require('./config/db');

// Load env vars
dotenv.config({ path: './config/config.env' });

app = express();

// App config
// mongoose.connect('mongodb://localhost/covid_memorial');
// Connect to database
connectDB();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Mongoose model config
var personSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  country: String,
  message: String
});

var Person = mongoose.model('Person', personSchema);

// ROUTES

// app.get('/', function(req, res) {
//   res.redirect('/people');
// });

app.get('/', function(req, res) {
  Person.find({}, function(err, people) {
    if (err) {
      console.log('ERROR');
    } else {
      res.render('index', { people: people });
    }
  });
});

// Create Route
app.post('/', function(req, res) {
  // Create Person
  Person.create(req.body.person, function(err, newPerson) {
    if (err) {
      res.render('index');
    } else {
      res.redirect('/');
    }
  });
});

const PORT = process.env.PORT || 5000;

// app.listen(process.env.PORT, process.env.IP, function() {
// app.listen(3000, function() {
//   console.log('Server is running - betta catch it');
// });
const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

// db.people.find()
