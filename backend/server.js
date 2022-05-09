const express = require('express')
const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => {
  //This will display if we 'll send request to localhost:5000 in Postman
  // res.send('Hello')
  // res.json({message: 'LOL'})
  res.status(200).json({message: 'Status 201 now :)'})
})

//Routes
app.use('/api/users', require('./routes/userRoutes'))

app.listen(PORT, () => console.log(`Server started on ${PORT}`))