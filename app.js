require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res)=>{
  res.send('First Page')
})

app.get('/login', (req, res)=>{
  res.send('Required Login')
})


app.get('/user', (req, res) =>{
  res.send("User Authenticate Successfully")
})


app.listen(process.env.port, () =>{ 
  console.log(`The Backend Is Working Proper on port : ${port}`)
})

