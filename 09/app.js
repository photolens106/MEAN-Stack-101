const http = require('http')
const express = require('express')
const PORT = 3000;
const app = express();
// Routing
app.get('/', function(req, res){
    console.log("Hello World!");
    res.send("Hello World");
});

app.get('/intmca', function(req, res){
    const id = req.query.id;
    res.send('Welcome to INT MCA '+id);
})

app.get('/intmca/:id', function(req, res){
    const id = req.params.id;
    res.send('Welcome to INT MCA '+id);
})

// Server Listening
app.listen(PORT, () => {
    console.log(`Server Listening to http://localhost:${PORT}/intmca/KH.SC.I5MCA21008`);
});