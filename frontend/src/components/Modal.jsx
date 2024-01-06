import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';


const Modal = ({id , title , author , publishYear , Close}) => {
return (
    <div onClick={Close} className='overlay'>
        <div onClick={(e)=> e.stopPropagation()} className='modal-container'>
                <AiOutlineClose onClick={Close} className='close-btn'/>
                <h3 className='modal-year'>{publishYear}</h3>
                <h4 className='article-id'> {id} </h4>
            <div className='article-title'>
                <PiBookOpenTextLight className='title-icon'/>
                <h3 className='name'>{title}</h3>
            </div>
            <div className='article-author'>
                <BiUserCircle className='user-icon'/>
                <h3 className='author'>{author}</h3>
            </div>
            <h4 className='summary'>Summary</h4>
            <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quaerat eos cupiditate nam quisquam dolores? Neque odit fugiat culpa, maxime quae ullam quos labore ipsa veritatis laboriosam aliquam porro pariatur.</p>
        </div>
    </div>
)
}

export default Modal