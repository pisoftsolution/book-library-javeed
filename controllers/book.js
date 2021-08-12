const books1 = require('../model/bookSchema');
const books2 = require('../model/categorySchema');

exports.getAllCategories =  ( req , res ) => {
    // res.json(req.body); 
    if (!req.body.Categories){
        res.status(400).json({msg:"This is invalid data"});
    }
    let book2 = new books2({
        Categories : req.body.Categories,
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
exports.getAllBooks =  ( req , res ) => {
    // res.json(req.body); 
    if ( !req.body.name ||!req.body.author || !req.body.publisher || !req.body.yearPublished || !req.body.category){
        res.status(400).json({msg:"This is invalid data"});
    }
    let book = new books1({
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
