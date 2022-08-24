import React from 'react'

const Note = ({ text }) => {
    return (
        <div className='note'>
            <h1>{text}</h1>
        </div>
    )
}

export default Note