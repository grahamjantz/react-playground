import React from 'react'
import Button from './Button'
import { IoCloseOutline } from 'react-icons/io5'

const Note = ({ note, deleteNote }) => {
    
    return (
        <div className='note'>
            <h1>{note.text}</h1>
            <Button 
                text={<IoCloseOutline className='fa'/>} 
                className='x-btn'
                handleClick={() => deleteNote(note.id)}
                />
        </div>
    )
}



export default Note