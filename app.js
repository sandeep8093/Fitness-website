const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/contactFit', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const app = express();
const port = process.env.PORT || 8000;

const contactSchema = new mongoose.Schema({
  name: String,
  age: String,
  gender: String,
  phone: String,
  desc: String,
});

const Contact = mongoose.model('Contact', contactSchema);

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')); // For serving static files
app.use(express.urlencoded());

// PUG SPECIFIC STUFF
app.set('view engine', 'pug'); // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')); // Set the views directory

// ENDPOINTS
app.get('/', (req, res) => {
  const params = {};
  res.status(200).render('home.pug', params);
});

app.get('/about', (req, res) => {
  const params = {};
  res.status(200).render('about.pug', params);
});

app.get('/session', (req, res) => {
  const params = {};
  res.status(200).render('session.pug', params);
});

app.get('/services', (req, res) => {
  const params = {};
  res.status(200).render('services.pug', params);
});
app.get('/bmi', (req, res) => {
  const params = {};
  res.status(200).render('bmi.pug', params);
});

app.get('/contact', (req, res) => {
  const params = {};
  res.status(200).render('contact.pug', params);
});

app.post('/contact', (req, res) => {
  var myData = new Contact(req.body);
  myData
    .save()
    .then(() => {
      res.send('This item has been saved to the database');
    })
    .catch(() => {
      res.status(400).send('item was not saved to the database');
    });
});

app.listen(port, () => {
  console.log(`The application started successfully on port ${port}`);
});
