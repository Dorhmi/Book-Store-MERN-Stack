import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loading from '../components/Loading';
import axios from 'axios'
import BooksTable from '../components/BooksTable';
import BooksCard from '../components/BooksCard';

const Home = () => {
    const [books , setBooks] = useState([]);
    const [isLoading , setIsLoading] = useState(false);
    const [isStyle , setIsStyle] = useState('')

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
            <div className='style-btns-container'>
                <button onClick={()=>setIsStyle('table')} className='table-btn'>Table</button>
                <button onClick={()=>setIsStyle('card')} className='card-btn'>Card</button>
            </div>
        <div className='home-container'>
            <div className='home-header'>
                <h1 className='title'>Books List</h1>
                <Link to={'/books/create'} className='add-btn'>Add Book +</Link>
            </div>
            <div className='home-content'>
                {isLoading ? (
                <Loading/>
                ) : isStyle === 'table' ? (
                <BooksTable books={books} />
                ) : (
                <BooksCard books={books}/>
                )}
            </div>
        </div>
    </section>
)
}

export default Home