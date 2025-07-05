require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const formsRouter = require('./routes/forms');

const app = express();
app.use(cors());
app.use(express.json());

// Placeholder routes
app.get('/', (req, res) => res.send('API Running'));

// TODO: Add form routes here
app.use('/api/form', formsRouter);

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error('MongoDB connection error:', err)); 