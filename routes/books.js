const express = require("express");
const router = express.Router();
const books = require('../controllers/book');

router.post('/add-new-books' , books.addNewBooks);
router.get('/get-book-by-id' , books.getBookById);
router.get('/get-all-books' , books.getAllBooks);
router.delete('/delete-book-by-id' ,books.DeleteBookById);
router.put('/edit-book-by-id' ,books.editBookById);
router.get('/get-book-by-category' ,books.getBookByCategory);
router.get('/get-book-by-publisher' ,books.getBookByPublisher);
router.get('/get-book-by-author' ,books.getBookByAuthor);
router.get('/get-book-by-author-year-published' ,books.getBookByAuthorAndYearPublished);

module.exports = router;