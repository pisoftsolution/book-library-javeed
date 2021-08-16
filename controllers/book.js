const Books = require('../model/bookSchema');
const categorySchema = require('../model/categorySchema');

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
//get book by entering the category in params
exports.getBookByCategory =  ( req , res ) => {
    if (!req.query.category) {
        return res.status(400).json({ msg: "You need to send the category!" })
    }
    Books.find({ category: req.query.category })
    .then(book => {
        return res.status(200).json({ book: book });
    })
    .catch(err => {
        return res.status(200).json({ msg: err.message });
    })
}

//to get all books names
exports.getAllBooks =  ( req , res ) => {
    Books.find({})
    .then(b => {
        return res.status(200).json({ b: b })
    })
    .catch(err => {
        return res.status(400).json({ msg: err.message })
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


exports.editBookById =  ( req , res ) => {
    Books.findById(req.query.id)
    .then(b=>{
        if (b) {
            b.name = req.body.name;
            b.author = req.body.author,
            b.publisher  = req.body.publisher,
            b.yearPublished  = req.body.yearPublished,
            b.category  = req.body.category,
            b.save()
            .then(b2=>{
                res.status(200).json(b2);
            })
        }
    })
    .catch(err=>{
        res.status(400).json({err});
    })
}

exports.getBookByAuthor =  ( req , res ) => {
    Books.find({ author: req.body.author })
    .then(b=> {
        return res.status(200).json({ b: b })
    })
    .catch(err => {
        return res.status(400).json({ msg: err.message })
    })
}
exports.getBookByPublisher =  ( req , res ) => {
    Books.find({ publisher: req.body.publisher })
    .then(b=> {
        return res.status(200).json({ b: b })
    })
    .catch(err => {
        return res.status(400).json({ msg: err.message })
    })
}

exports.getBookByAuthorAndYearPublished =  ( req , res ) => {
    Books.find({ author: req.body.author, yearPublished: req.body.yearPublished })
    .then(b=> {
        return res.status(200).json({ b: b })
    })
    .catch(err => {
        return res.status(400).json({ msg: err.message })
    })
}


