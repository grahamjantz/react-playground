import React from 'react'
import Button from './Button'
import { FaRegTimesCircle } from 'react-icons/fa'

const Note = ({ note, deleteNote }) => {
    
    return (
        <div className='note'>
            <h1>{note.text}</h1>
            <Button 
                text={<FaRegTimesCircle className='fa'/>} 
                className='x-btn'
                handleClick={deleteNote}
                />
        </div>
    )
}

export default Note