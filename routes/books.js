const express = require("express");
const router = express.Router();
const books = require('../controllers/book');


router.post('/getAllCategories' , books.getAllCategories);
// router.post('/getAllBooks ' , book.getAllBooks);
// router.get('/getBookById' ,book.getBookById);
// router.get('/getBooksByCategory' ,book.getBooksByCategory);
// router.put('/addCategory' ,book.addCategory);
// router.put('/editCategory' ,book.editCategory);
// router.put('/deleteCategory' ,book.deleteCategory);
// router.put('/addBook' ,book.addBook);
// router.put('/editBook' ,book.editBook);
// router.put('/deleteBook' ,book.deleteBook);




module.exports = router;