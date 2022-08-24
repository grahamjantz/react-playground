import { React, useState } from 'react'
import Header from './Header'
import Button from './Button';
import Note from './Note'

const Notes = () => {
  const [input, setInput] = useState('');
  const [note, setNote] = useState('');
  
  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setNote(input)
    setInput()
  }

  return (
    <div className='component'>
        <Header title="Notes"/>
        <form onSubmit={handleSubmit}>
            <textarea 
              className="textarea" 
              placeholder="enter note"
              onChange={handleChange}>
            </textarea>
            <Button text="Add Note" type='submit'/>
        </form>
        <Note text={note} {note.length === 0 ? style={{display: none}}}/>
    </div>
  )
}

export default Notes