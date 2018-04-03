const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req,res) => {
    console.log('hello')
    res.sendFile(__dirname+'/test.html');
})

app.post('/', (req, res) => {
    if(req.body.pass === '123'){
        res.send({message: 'welcome '+req.body.login})
    }else{
        res.send({message: 'False'})
    }
    res.sendFile(__dirname + '/test.html')
})

app.listen(3000, err => {
    console.log('server is listening on port 3000')
})