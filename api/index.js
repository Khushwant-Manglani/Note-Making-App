const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const MONGODB_URL = process.env.MONGODB_URL;

mongoose.connect(MONGODB_URL);

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.use('/api/notes', require('./routes/noteRoutes'));

app.listen(PORT, () => {
  console.log(`Server is listen at ${PORT}`);
});
