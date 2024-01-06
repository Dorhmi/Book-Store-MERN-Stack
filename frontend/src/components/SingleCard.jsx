import React, { useState } from 'react'
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Modal from './Modal';

const SingleCard = ({_id , title , author , publishYear}) => {
    const [showModal , setShowModal] = useState(false)
return (
    <article className='article-container'>
        <h3 className='article-year'> {publishYear} </h3>
        <h4 className='article-id'> {_id} </h4>
        <div className='article-title'>
            <PiBookOpenTextLight className='title-icon'/>
            <h3 className='name'>{title}</h3>
        </div>
        <div className='article-author'>
            <BiUserCircle className='user-icon'/>
            <h3 className='author'>{author}</h3>
        </div>
        <div className='article-icons'>
            <Link onClick={()=>setShowModal(true)}><BiShow className='model-icon'/></Link>
            <Link to={`/books/details/${_id}`}><BsInfoCircle className='info-icon'/></Link>
            <Link to={`/books/edit/${_id}`}><AiOutlineEdit className='edit-icon'/></Link>
            <Link to={`/books/delete/${_id}`}><MdOutlineDelete className='delete-icon'/></Link>
        </div>
        {showModal && <Modal
        id={_id}
        title={title}
        author={author}
        publishYear= {publishYear}
        Close = {()=>setShowModal(false)}
        />}
    </article>
)
}

export default SingleCard