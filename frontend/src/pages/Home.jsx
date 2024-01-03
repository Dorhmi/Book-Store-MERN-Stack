import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loading from '../components/Loading';
import axios from 'axios'
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

const Home = () => {
    const [books , setBooks] = useState([]);
    const [isLoading , setIsLoading] = useState(false);

    useEffect(()=>{
        setIsLoading(true)
        axios.get('http://localhost:3001/books')
        .then((response) => {
            setBooks(response.data.data)
            setIsLoading(false)
        })
        .catch((error)=> {
            console.log(error)
            setIsLoading(false)
        })
    }, [])
return (
    <section className='home-section'>
        <div className='home-container'>
            <div className='home-header'>
                <h1 className='title'>Books List</h1>
                <Link to={'/books/create'} className='add-btn'>Add Book +</Link>
            </div>
            <div className='home-content'>
                {isLoading ? <Loading/>
                :
                <table className='home-table'>
                    <thead>
                        <tr>
                            <th className='t-head'>No</th>
                            <th className='t-head'>Title</th>
                            <th className='t-head'>Author</th>
                            <th className='t-head'>Publish Year</th>
                            <th className='t-head'>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book , index) => (
                            <tr key={book._id}>
                                <td className='t-head'>{index + 1}</td>
                                <td className='t-head'>{book.title}</td>
                                <td className='t-head'>{book.author}</td>
                                <td className='t-head'>{book.publishYear}</td>
                                <td className='t-head'>
                                    <div className='icons-container'>
                                        <Link to={`/books/details/${book._id}`}><BsInfoCircle className='info-icon'/></Link>
                                        <Link to={`/books/edit/${book._id}`}><AiOutlineEdit className='edit-icon'/></Link>
                                        <Link to={`/books/delete/${book._id}`}><MdOutlineDelete className='delete-icon'/></Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                }
            </div>
        </div>
    </section>
)
}

export default Home