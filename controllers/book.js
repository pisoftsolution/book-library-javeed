const Books = require('../model/bookSchema');
const Category = require('../model/categorySchema');

exports.addNewCategory =  ( req , res ) => {
    // res.json(req.body); 
    if (!req.body.Name){
        res.status(400).json({msg:"This is invalid data"});
    }
    let book2 = new Category({
        Name : req.body.Name,
    });
    book2.save()
    .then(b=>{
        if (b) {
            res.status(200).json({b});
        }
    })
    .catch(err=>{
        res.status(400).json({err});
    })
}
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
exports.getCategoryById =  ( req , res ) => {
    // res.json(req.body); 
    if (!req.query.id) {
        return res.status(400).json({ msg: "You need to send the ID!" })
    }
    Category.find({ _id: req.query.id })
    .then(book => {
        return res.status(200).json({ book: book });
    })
    .catch(err => {
        return res.status(200).json({ msg: err.message });
    })
}
exports.getAllBooks =  ( req , res ) => {
    Books.find({})
    .then(books => {
        return res.status(200).json({ books: books })
    })
    .catch(err => {
        return res.status(400).json({ msg: err.message })
    })
}
exports.getAllCategory =  ( req , res ) => {
    Category.find({Category})
    .then(book2 => {
        return res.status(200).json({ Category: book2 })
    })
    .catch(err => {
        return res.status(400).json({ msg: err.message })
    })
}


