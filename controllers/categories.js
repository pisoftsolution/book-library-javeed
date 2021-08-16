const Category = require('../model/categorySchema');

exports.addNewCategory =  ( req , res ) => {
    // res.json(req.body); 
    if (!req.body.name){
        res.status(400).json({msg:"This is invalid data"});
    }
    let category = new Category({
        name : req.body.name,
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
//to get all category names
exports.getAllCategory =  ( req , res ) => {
    Category.findById({category:req.query.id})
    .then(categories => {
        return res.status(200).json({ categories: categories })
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

exports.editCategoryById =  ( req , res ) => {
    Category.findById(req.query.id)
    .then(b=>{
        if (b) {
            b.name = req.body.name;
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