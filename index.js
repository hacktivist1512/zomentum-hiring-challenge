const express = require('express')
const http = require('http')
const morgan = require('morgan')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const movieRouter = require('./routes/movieBook');


const url = 'mongodb://localhost:27017/movieBook';
const connect = mongoose.connect(url);

connect.then((db) => {
    console.log("Connected to the database");
}, (err) => {console.log(err); });

const hostname = 'localhost'
const port = 3000

const app = express();
app.use(morgan('dev'))
app.use(bodyParser.json())

app.use('/movies', movieRouter);

app.use(express.static(__dirname + '/public'))

app.use((req,res, next) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<html><body><h1>This is a movie ticket booking implementation of Express Server</h1></body></html>')
})

const server = http.createServer(app)

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
})