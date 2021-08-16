const express = require("express");
const mongoose = require("mongoose");
const bookRoute = require("./routes/books");
const categoryRoute = require("./routes/categories");
const app = express();

const dbURI = "mongodb://localhost/authentication";

app.use(express.json());
app.use(express.urlencoded());
app.use('/api/book',bookRoute);
app.use('/api/category',categoryRoute);

mongoose.connect( dbURI , {useNewUrlParser: true,useUnifiedTopology:true});
const db = mongoose.connection;
db.on("error",(err=>{console.log(err)}));
db.once("open", ()=>{console.log("Connected to the server")});

app.listen(8080 , ()=>{
 console.log("server started at 8080");
})