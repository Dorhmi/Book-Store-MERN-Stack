import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams , Link } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs';


const SingleBook = () => {
    const [book , setBook] = useState({})
    const {id} = useParams()

    useEffect(()=>{
        axios.get(`http://localhost:3001/books/${id}`)
        .then((res)=>{
            setBook(res.data)
        })
        .catch((error)=>{
            console.log(error);
        })
    }, [])
    console.log(book);
return (
    <section className='single-section'>
        <div className='sinsle-container'>
            <Link to={'/'} className='back-btn'><BsArrowLeft/></Link>
            <h2 className='title'>Show Book</h2>
            <div className='single-content'>
                <p className='book-info'>Id: <span className='info'>{book._id}</span></p>
                <p className='book-info'>Title: <span className='info'>{book.title}</span></p>
                <p className='book-info'>Author: <span className='info'>{book.author}</span></p>
                <p className='book-info'>publishYear: <span className='info'>{book.publishYear}</span></p>
                <p className='book-info'>Create Time: <span className='info'>{ new Date(book.createdAt).toString()}</span></p>
                <p className='book-info'>Last Update Time: <span className='info'>{new Date(book.updatedAt).toString()}</span></p>
            </div>
        </div>
    </section>
)
}

export default SingleBook