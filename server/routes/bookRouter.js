const express=require('express');

const Book = require('../schema/book');
const router = express.Router();

router.get('/books', async (req, res) => {
    const books = await Book.find();
    res.json(books);
  });

  
// INPUT - book name or a term in the name of the book
// OUTPUT - list of all the books with that name or term in the book name

router.get('/books/search', async(req,res)=>{
    const {term}=req.query;
    const books = await Book.find({book_name:new RegExp(term,'i')});
    res.json(books);
});


// INPUT - rent price range
// OUTPUT - list of books with rent in that range

router.get('/books/priceRange',async(req,res)=>{
    const {min,max}=req.query;
    const books = await Book.find({rent_per_day:{$gte:min , $lte:max}});
    res.json(books);
});


// INPUT - category + name/term + rent per day(range)
// OUTPUT - list of books with matching values as in input

router.get('/books/filter',async(req,res)=>{
    const {category,term,min,max}=req.query;
    const books = await Book.find({category, book_name:new RegExp(term, 'i') , rent_per_day:{$gte:min, $lte:max}});
    res.json(books);
})

module.exports = router;

