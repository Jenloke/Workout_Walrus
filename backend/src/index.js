const express = require('express');
const app = express();
const PORT = 3000;

// const USERS = require('../users/users');

// Middleware
app.use(express.json());
// app.use(express.urlencoded());

app.listen(PORT, () => console.log(`Server started successfully at port ${PORT}`)); 

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
