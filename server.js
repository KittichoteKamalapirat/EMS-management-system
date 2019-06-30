const express = require('express')
const path = require('path')
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static('public'))

// render map
app.get('/map',(req,res) => res.sendFile(__dirname + '/map.html'))

app.get('/',(req,res) => res.sendFile(__dirname + '/index.html'))

app.get('/skills',(req,res) => res.sendFile(__dirname + '/skills.html'))

// app.get('/loading',(req,res) => res.sendFile(__dirname + '/loading.html'))


app.get('/loading',(req,res) => {
    res.sendFile(__dirname + '/loading.html')
})


app.get('/approve',(req,res) => res.sendFile(__dirname + '/approve.html'))






app.listen(PORT, () => console.log('Server Started...'));



