const express = require('express');
const User = require('./models/user'); // Assuming your user model file is in './models/user'

const router = express.Router();

router.route('/users').get(async (req, res) => {
  try {
    const users = await User.find();
    //res.status(200).send(users)
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.route('/users/:username').get(async (req, res) => {
  try {
    const userName = {username: req.params.username}

    const user = await User.find(userName);
    //res.status(200).send(user)
    res.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.route('/login').post(async (req, res) => {
  const query = {
    username: req.body.username,
    password: req.body.password
  }

  try {
    const user = await User.findOne(query)
    if (user != null){
      const objToSend = {id: user.id, height: user.height, weight: user.weight};
      res.json(objToSend)
    }

    if (!user) {
      return res.status(404).send();
    }

  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.route('/signup').post(async (req, res) => {
  const query = { username: req.body.username}
  try{
    checkUser = await User.findOne(query)

    if(checkUser == null){
      const newUser = new User({
        name: req.body.name,
        birthday: req.body.birthday,
        username: req.body.username,
        password: req.body.password,
        height: req.body.height,
        weight: req.body.weight
      })
      newUser.save()
      res.json(newUser)
    }else{
      return res.status(400).json({username: "A user has already resgistered with this username"})
    }
  }catch(error){
    console.error("Error when creating user: ", error)
    res.status(400).send()
  }
})


module.exports = router;
