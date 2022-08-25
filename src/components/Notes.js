import { React, useState } from 'react'
import Header from './Header'
import Button from './Button';
import NoteList from './NoteList';

  

const Notes = () => {
  const [text, setText] = useState('');
  const [note, setNote] = useState([
    {
      id: 1,
      text: 'Note 1'
    },
    {
      id: 2,
      text: 'Note 2'
    }
  ]);

  const handleChange = (e) => {
    setText(e.target.value)
  }

  

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 10000)
    setNote(text.length > 0 ? [...note, {text, id}] : [...note])
    setText('')
  }

  const deleteNote = (id) => {
    setNote(note.filter((note) => note.id !== id))
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
            <Button text="Add Note" type='submit' className="btn" />
            <NoteList note={note} deleteNote={deleteNote}/>
        </form>
    </div>
  )
}

export default Notes