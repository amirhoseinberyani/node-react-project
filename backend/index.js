const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // allow frontend to talk to backend

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://mongo:27017/mydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define schema and model
const Submission = mongoose.model('Submission', {
  name: String,
  email: String,
});

// Routes
app.get('/api/', (req, res) => {
  res.send('Hello from Node.js Backend');
});

app.post('/api/submit', async (req, res) => {
  try {
    const { name, email } = req.body;
    const submission = new Submission({ name, email });
    await submission.save();
    res.json({ message: 'Form submitted successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Start server
app.listen(5000, () => console.log('Backend running on port 5000'));

