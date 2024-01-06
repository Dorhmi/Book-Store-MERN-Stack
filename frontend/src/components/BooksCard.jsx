import React from 'react'
import SingleCard from './SingleCard'


const BooksCard = ({books}) => {
return (
    <div className='cards-container'>
        {books.map((book) => {
            return <SingleCard key={book._id} {...book}/>
        })}
    </div>
)
}

export default BooksCard