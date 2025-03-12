const express = require('express');
const data = require('./data')
const app = express();

app.use('/', (req, res, next) => {
    res.send("Node JS Search and Filter")
});

app.listen(3000, ()=> {
    console.log('Server Started: http://localhost:3000/')
});