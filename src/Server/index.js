const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const EmployeeModel = require('./models/Employee');
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/employee');
console.log("connection successful")

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({ email: email })
    .then(user => {
      if (!user) {
        return res.json("No records exist");
      }
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("Incorrect password");
      }
    })
    .catch(error => {
      res.status(500).json("An error occurred");
    });
});


app.post('/register', (req, res) => {
    EmployeeModel.create(req.body)
    .then(employees=>res.json(employees))
    .catch(err=>res.json(err))
  console.log('Received data:', req.body);  

});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
