import React, { useEffect, useState } from 'react'
import Header from '../Notes/Header'
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import { DeleteOutline } from '@mui/icons-material';
import Note from '../Notes/Note';
import axios from 'axios';


const Trashpage = () => {
  const [note, setNotes] = useState([]);
  const id = localStorage.getItem('userId')

  useEffect(() => {
    const loadpage = async () => {

      axios.get(`http://localhost:8080/notes/getNotes/${id}`,)
        .then(result => {
          console.log("result", result.data)
          setNotes(result.data.data)
          // console.log(result.data.data)

        })
        .catch(err => { console.log(err) })
    }
    loadpage();
  }, [])
  return (
    <div>
      <Header />
      <div>
        {
          note.filter(notes => notes.status == "Active").map(note => <div key={note.note_id}><Note title={note.title} content={note.description} noteId={note.note_id} /></div>)
        }
      </div>
    </div>
  )
}

export default Trashpage;