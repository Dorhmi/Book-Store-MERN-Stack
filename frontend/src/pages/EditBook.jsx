import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs';
import { Link, useNavigate, useParams } from 'react-router-dom';


const EditBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishYear, setPublishYear] = useState('');
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:3001/books/${id}`)
        .then((res) => {
            setTitle(res.data.title)
            setAuthor(res.data.author)
            setPublishYear(res.data.publishYear)
        })
        .catch((error)=>{
            console.log(error);
        })
    }, [])

    const handleSave = () => {
        const data = {
            title,
            author,
            publishYear,
        }
        axios.put(`http://localhost:3001/books/${id}`, data)
        .then((result)=> {
            // setTitle('');
            // setAuthor('');
            // setPublishYear('');
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
                <h2 className='title'>Edit Book</h2>
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

export default EditBook