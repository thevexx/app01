const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req,res) => {
    console.log('hi');
    res.sendFile(__dirname+'/test.html');
})

app.post('/', (req, res) => {

    res.sendFile(__dirname + '/test.html')
})

app.listen(3000, err => {
    console.log('server is listening on port 3000')
})