const express = require("express");
const router = express.Router();
const books = require('../controllers/book');


router.post('/add-new-category' , books.addNewCategory);
router.post('/add-new-books' , books.addNewBooks);
router.get('/get-book-by-id' , books.getBookById);
router.get('/get-category-by-id' , books.getCategoryById);
router.put('/get-all-books' , books.getAllBooks);
router.put('/get-all-category' , books.getAllCategory);
// router.get('/getBooksByCategory' ,book.getBooksByCategory);

// router.put('/editCategory' ,book.editCategory);
// router.put('/deleteCategory' ,book.deleteCategory);

// router.put('/editBook' ,book.editBook);
// router.put('/deleteBook' ,book.deleteBook);




module.exports = router;