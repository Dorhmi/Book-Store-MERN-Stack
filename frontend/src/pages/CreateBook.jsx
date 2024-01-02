import axios from 'axios';
import React, { useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';


const CreateBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishYear, setPublishYear] = useState('');
    const navigate = useNavigate();

    const handleSave = () => {
        const data = {
            title,
            author,
            publishYear,
        }
        axios.post('http://localhost:3001/books', data)
        .then((result)=> {
            console.log(result.data);
            navigate('/');
        })
        .catch((error) => {
            console.log(error);
        })
    }
return (
    <section className='create-section'>
        <div className='create-container'>
            <div className='create-header'>
                <Link to={'/'} className='back-btn'><BsArrowLeft/></Link>
                <h2 className='title'>Create Book</h2>
            </div>
            <div className='create-content'>
                <div className='form'>
                    <div className='input-container'>
                        <label className='label'>Title</label>
                        <input className='input' type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
                    </div>
                    <div className='input-container'>
                        <label className='label'>Author</label>
                        <input className='input' type="text" value={author} onChange={(e)=>setAuthor(e.target.value)}  />
                    </div>
                    <div className='input-container'>
                        <label className='label'>PublishYear</label>
                        <input className='input' type="number" value={publishYear} onChange={(e)=>setPublishYear(e.target.value)} />
                    </div>
                    <button onClick={handleSave} className='save-btn'>Save</button>
                </div>
            </div>
        </div>
    </section>
)
}

export default CreateBook