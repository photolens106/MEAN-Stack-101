const express = require('express')
const PORT = 3000;
const data = require('./data');
const app = express();
// Routing
app.get('/', function(req, res, next){
    const filters = req.query;
    const filteredUsers = data.filter(user => {
        let isValid = true;
        for (key in filters){
            console.log(key, user[key], filters[key]);
            isValid = isValid && user[key]== filters[key]
        }
        return isValid;
    });
});

// Server Listening
app.listen(PORT, () => {
    console.log(`Server Listening to http://localhost:3000?city=Metropolis​`);
});
