const express = require("express");
const router = express.Router();
const books = require('../controllers/categories');

router.post('/add-new-category' , books.addNewCategory);
router.get('/get-category-by-id' , books.getCategoryById);
router.get('/get-all-category' , books.getAllCategory);
router.delete('/delete-category-by-id' , books.DeleteCategoryById);
router.put('/edit-category-by-id' ,books.editCategoryById);

module.exports = router;