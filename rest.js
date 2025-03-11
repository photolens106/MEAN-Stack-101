const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSOn request bodies
app.use(express.json());

// To define the sample data
let books = [
    {
        "id": 1,
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee"
    },
    {
        "id": 2,
        "title": "1984",
        "author": "George Orwell"
    },
    {
        "id": 3,
        "title": "Pride and Prejudice",
        "author": "Jane Austen"
    },
    {
        "id": 4,
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald"
    },
    {
        "id": 5,
        "title": "The Catcher in the Rye",
        "author": "J.D. Salinger"
    }
];

// Define routes for handling the GET requests
app.get('/api/books', function(req, res){
    res.json(books);
});

app.get('/api/books/:id', function(req, res){
    const id = parseInt(req.params.id);
    const book = books.find(book => book.id === id);
    if (book){
        res.json(book);
    }
    else{
        res.status(404).json({
            message: 'Book not found'
        })
    }
});

// Server Listening
app.listen(PORT, () => {
    console.log(`Server Listening to http://localhost:${PORT}/api/books`);
});
