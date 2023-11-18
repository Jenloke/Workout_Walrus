const express = require('express');
const axios = require('axios').default;
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

const userRoutes = require('../routes/models/user');
const uri = "mongodb+srv://workoutWalrus:123456789workoutWalrus@cluster0.ewa6d4n.mongodb.net/workoutwalrus?retryWrites=true&w=majority";

// const USERS = require('../users/users');

// Middleware
app.use(express.json());
// app.use(express.urlencoded());

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.use('', userRoutes)
    app.listen(PORT, () => {
      console.log(`Server started successfully at port ${PORT}`);
    });
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));

// const request = require('request');
// var muscle = 'biceps';
// request.get({
//   url: 'https://api.api-ninjas.com/v1/exercises?muscle=' + muscle,
//   headers: {
//   'X-Api-Key': 'H2hjF7GM2NnHzuZTm5Nakw==cnVmqdsMHbfV8EVb'
//   },
// }, (error, response, body) => {
//   if(error) return console.error('Request failed:', error);
//   else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
//   else console.log(body)
// });

app.get('/exercise', (req, res) => {
  axios.get('https://api.api-ninjas.com/v1/exercises?muscle=biceps', {
    headers: {
      'X-Api-Key': 'H2hjF7GM2NnHzuZTm5Nakw==cnVmqdsMHbfV8EVb'
    }
    })
      .then((response) => {
        // handle success

        // console.log(response.data);
        // console.log(response.status);
        // console.log(response.statusText);
        // console.log(response.headers);
        // console.log(response.config);

        // destructure data first to extract proper exercise methods
        res.send(response.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
});

// app.post('/login', (req, res) => {
//   // if (req.body.constructor === object && object.keys(req.body).length === 0) {
//   //   res.send(404);
//   //   res.end();
//   // }
  
//   const { email, password } = req.body;

//   try {
//     const { id: email_id} = USERS.find ( (x) => email === x['email'] );
//     const { id: password_id } = USERS.find ( (x) => password === x['password'] );
    
//     if (email_id === password_id) {
//       res.send( {'id' : email_id} );
//     } else {
//       res.send(404);
//     }
//   } catch (error) {
//     res.send(404);
//   }
// });

// app.get('/users', (req, res) => {
//   res.send(USERS['id']); 
// }); 

// app.get('/users/:id', (req, res) => {
//   const { id } = req.params;
//   res.send(USERS.find( (x) => id == x['id'] ));
// });
