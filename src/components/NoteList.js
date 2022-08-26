import React from 'react'
import Note from './Note'

const NoteList = ({ note, deleteNote }) => {
  const noteList = note.map(item => <Note key={item.id} note={item} deleteNote={deleteNote} />)

  return (
    <div className='noteList'>
        {noteList}
    </div>
  )
}

export default NoteList