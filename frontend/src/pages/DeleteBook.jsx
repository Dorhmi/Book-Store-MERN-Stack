import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs';
import axios from 'axios';


const DeleteBook = () => {
    const {id} = useParams()
    const navigate = useNavigate()

    const handleDelete = () => {
        axios.delete(`http://localhost:3001/books/${id}`)
        .then(()=>{
            navigate('/')
        })
        .catch((error)=>{
            console.log(error);
        })
    }
return (
    <section className='delete-section'>
        <div className='delete-container'>
            <Link to={'/'} className='back-btn'><BsArrowLeft/></Link>
            <h2 className='title'>Delete Book</h2>
            <div className='delete-content'>
                <p className='alert'>Are You Sure You want to delete this book?</p>
                <button onClick={handleDelete} className='delete-btn'>Yes, Delete it</button>
            </div>
        </div>
    </section>
)
}

export default DeleteBook