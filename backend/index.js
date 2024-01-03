import express, { response } from "express";
import cors from 'cors';
import { PORT, URL} from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";

const app = express();
app.use(express.json());
app.use(cors());

app.get('/' , (req,res) => {
    console.log(req);
    return res.status(234).send('Welcom');
})


app.post('/books' , async (req , res) => {
    try {
        if (
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear 
        ) {
            return res.status(400).send({
                message: 'Send all required fields: title, author, publishYear'
            })
        }
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
        }
        const book = await Book.create(newBook)
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message})
    }
} )

app.put('/books/:id' , async (req , res) => {
    try {
        if (
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear 
        ) {
            return res.status(400).send({
                message: 'Send all required fields: title, author, publishYear'
            })
        }
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
        }
        const {id} = req.params;
        const book = await Book.findByIdAndUpdate(id , newBook)
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message})
    }
} )

app.get('/books' , async (req , res) => {
    try {
        const books = await Book.find({})
        return res.status(200).json({
            count: books.length,
            data:books,
        })
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message})
    }
})

app.get('/books/:id' , async (req , res) => {
    try {
        const {id} = req.params;
        const book = await Book.findById(id)
        return res.status(200).json(book)
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message})
    }
})

app.delete('/books/:id' , async (req , res) => {
    try {
        const {id} = req.params;
        const book = await Book.findByIdAndDelete(id);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message : error.message})
    }
})

mongoose.connect(URL)
.then(()=> {
    console.log('App connected to database');
    app.listen(PORT, () => {
        console.log(`App is listening to port : ${PORT}`);
    });
})
.catch((error)=>{
    console.log(error);
})