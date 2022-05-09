const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 5000;

// Connect to database
connectDB();

const app = express()

//That helps to make request json to the server (from Postman, for example)
app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.get('/', (req, res) => {
  //This will display if we 'll send request to localhost:5000 in Postman
  // res.send('Hello')
  // res.json({message: 'LOL'})
  res.status(200).json({message: 'Status 201 now :)'})
})

//Routes
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on ${PORT}`))