const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

const userRoutes = require('../routes/users');
const uri = "mongodb+srv://workoutWalrus:123456789workoutWalrus@cluster0.ewa6d4n.mongodb.net/workoutwalrus?retryWrites=true&w=majority";

// const USERS = require('../users/users');

// Middleware
app.use(express.json());
app.use(express.urlencoded());

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.use('', userRoutes)
    app.listen(PORT, () => {
      console.log(`Server started successfully at port ${PORT}`);
    });
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));

