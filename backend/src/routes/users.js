const express = require('express');
const User = require('./models/user'); // Assuming your user model file is in './models/user'

const router = express.Router();

router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    console.log(users)
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/users/:name', async (req, res) => {
  const userName = req.params.name;

  try {
    const user = await User.findOne(userName)

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = router;
