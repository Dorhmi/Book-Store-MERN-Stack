import express from "express";
import cors from 'cors';
import { PORT, URL} from "./config.js";
import mongoose from "mongoose";

const app = express();
app.use(express.json());
app.use(cors());

app.get('/' , (req,res) => {
    console.log(req);
    return res.status(234).send('Welcom');
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