const books1 = require('../model/bookSchema');
const books2 = require('../model/categorySchema');

exports.getAllCategories =  ( req , res ) => {
    // res.json(req.body); 
    if (!req.body.Categories){
        res.status(400).json({msg:"This is invalid data"});
    }
    let book = new books2({
        Categories : req.body.Categories,
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
