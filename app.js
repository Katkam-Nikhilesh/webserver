const express = require('express')
const app = express()
const path = require('path')
const publicdir = path.join(__dirname,"web")

app.use(express.static(publicdir))

app.get('/', function (req, res) {
  res.render('index.html')
})
app.get('/about', function (req, res) {
    res.send('Hello World i am in about')
  })
 const port = process.env.port || 3000
app.listen(port,()=>{
    console.log('welcome serveer running on port 3000')
})