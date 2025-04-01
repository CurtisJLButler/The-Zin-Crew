var express = require('express');
var router = express.Router();
var Cars = require('../../models/car')
// const auth = require('../../middleware/auth')


//Get all books --> /books/
router.get('/', (req, res) => {
    Cars.find().exec() //exec executes the query and returns a promise
        .then(books => {
            res.send(books)
    })
    .catch(err => {
        res.status(500).send
    })
})

//Get one book by ID
router.get('/:id', (req, res) => {
    Cars.findById(req.params.id).exec()
        .then( book => {
            if(!book){
                res.status(404).send()//book with given id does not exist
            } else{
                res.send(book)
            }
        })
        .catch( err => {
            if (err.name === "CastError"){
                res.status(400).send({message: "Invalid ID Provided"})
            } else{
                res.status(500).send({message: "Server error, come back soon"})
            }
        })
})

//Create a new book
router.post('/', (req, res) => {
    
    //creat a new instance of books and apply the req.body into it
    const newBook = new Cars(req.body)
    //persist it th the database
    newBook.save()
    .then( result => res.status(201).send(result))
    .catch( err => res.status(500).send())
})

//update a book by ID
router.put('/:id', (req, res) => {

    Cars.findByIdAndUpdate(req.params.id, req.body, { new: true }).exec()  // Pass req.body as the update data and { new: true }
        .then(updatedBook => {
            if (!updatedBook) {
                // If the book was not found
                return res.status(404).send({ message: "Book not found" });
            }
            // Return the updated book
            res.status(200).send(updatedBook);
        })
        .catch(err => {
            console.error(err);  // Log the error for debugging
            if (err.name === "CastError") {
                // Handle invalid ObjectId format
                res.status(400).send({ message: "Invalid ID Provided" });
            } else {
                // Handle server errors
                res.status(500).send({ message: "Server error, please try again later" });
            }
        });
});

//Delete one book by ID

router.delete('/:id', (req, res) => {
    Cars.findByIdAndDelete(req.params.id).exec()
        .then(result => {
            if (!result) {
                // If no book was found
                res.status(404).send(); // This is fine, but let's ensure this path is not left unhandled
            } else {
                // If deletion was successful, but we're missing the proper response status
                res.status(200).send({
                    message: "Object was deleted!",
                    book: result
                });
            }
        })
        .catch(err => {
            if (err.name === "CastError") {
                res.status(400).send({ message: "Invalid ID Provided" });
            } else {
                res.status(500).send({ message: "Server error, come back soon" });
            }
        });
});

module.exports = router