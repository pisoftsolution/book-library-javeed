const Books = require('../model/bookSchema');
const Category = require('../model/categorySchema');

//Add name for category 
exports.addNewCategory =  ( req , res ) => {
    // res.json(req.body); 
    if (!req.body.Name){
        res.status(400).json({msg:"This is invalid data"});
    }
    let category = new Category({
        Name : req.body.Name,
    });
    category.save()
    .then(b=>{
        if (b) {
            res.status(200).json({b});
        }
    })
    .catch(err=>{
        res.status(400).json({err});
    })
}
//add book name,author....
exports.addNewBooks = async  ( req , res ) => {
    // res.json(req.body); 
    if ( !req.body.name ||!req.body.author || !req.body.publisher || !req.body.yearPublished || !req.body.category){
        res.status(400).json({msg:"This is invalid data"});
    }
    let book = new Books({
        name : req.body.name,
        author: req.body.author,
        publisher : req.body.publisher,
        yearPublished : req.body.yearPublished,
        category : req.body.category,
    });
    book.save()
    .then(b=>{
        if (b) {
            res.status(200).json({b});
        }
    })
    .catch(err=>{
        res.status(400).json({err});
    })
}
//get the book by the ID
exports.getBookById =  ( req , res ) => {
    // res.json(req.body); 
    if (!req.query.id) {
        return res.status(400).json({ msg: "You need to send the ID!" })
    }
    Books.find({ _id: req.query.id })
    .then(book => {
        return res.status(200).json({ book: book });
    })
    .catch(err => {
        return res.status(200).json({ msg: err.message });
    })
}
//get the category by id
exports.getCategoryById =  ( req , res ) => {
    // res.json(req.body); 
    if (!req.query.id) {
        return res.status(400).json({ msg: "You need to send the ID!" })
    }
    Category.find({ _id: req.query.id })
    .then(category => {
        return res.status(200).json({ category: category });
    })
    .catch(err => {
        return res.status(200).json({ msg: err.message });
    })
}
//to get all books names
exports.getAllBooks =  ( req , res ) => {
    Books.find({})
    .then(book => {
        return res.status(200).json({ book: book })
    })
    .catch(err => {
        return res.status(400).json({ msg: err.message })
    })
}
//to get all category names
exports.getAllCategory =  ( req , res ) => {
    Category.find({})
    .then(category => {
        return res.status(200).json({ category: category })
    })
    .catch(err => {
        return res.status(400).json({ msg: err.message })
    })
}
//to delete category by id
exports.DeleteCategoryById =  ( req , res ) => {
    Category.findByIdAndDelete({_id: req.query.id })
    .then(category => {
        return res.status(200).json({ category: category });
    })
    .catch(err => {
        return res.status(200).json({ msg: err.message });
    })
}
//to delete book by id
exports.DeleteBookById =  ( req , res ) => {
    Books.findByIdAndDelete({_id: req.query.id })
    .then(books => {
        return res.status(200).json({ books: books });
    })
    .catch(err => {
        return res.status(200).json({ msg: err.message });
    })
}



