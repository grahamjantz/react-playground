import { React, useState } from 'react'
import Header from './Header'
import Button from './Button';
import Note from './Note'

  

const Notes = () => {
  const [text, setText] = useState('');
  const [note, setNote] = useState([
    // {
    //   id: 1,
    //   text: 'Note 1'
    // },
    // {
    //   id: 2,
    //   text: 'Note 2'
    // }
  ]);
  const [map, setMap] = useState();
  
  const handleChange = (e) => {
    setText(e.target.value)
  }

  const numbers = [1,2,3,4,5];
  const handleSubmit = (e) => {
    e.preventDefault();

    setMap(note.map((item) => [...note, item]))

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
        <p>{map}</p>
        <Note text={note}/>
    </div>
  )
}

export default Notes