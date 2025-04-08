const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://mongo:27017/mydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/api/', (req, res) => {
  res.send('Hello from Node.js Backend');
});

app.listen(5000, () => console.log('Backend running on port 5000'));
