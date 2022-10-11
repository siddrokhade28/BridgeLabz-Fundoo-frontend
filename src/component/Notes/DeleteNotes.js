import React, { useEffect, useState } from 'react';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import { DeleteOutline } from '@mui/icons-material';
import axios from 'axios';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import RestoreFromTrashOutlinedIcon from '@mui/icons-material/RestoreFromTrashOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';




const DeleteNotes = ({ title, content, noteId }) => {

    // const [open, setOpen] = useState(false)
    // const [Utitle, setTitle] = useState('');
    // const [Ucontent, setContent] = useState('');

    const handletrash = () => {
        axios.get(`http://localhost:8080/notes/trash/${noteId}`)
            .then(res => {
                console.log(res.data)
                window.location.reload();
            }
            )
            .catch(err => { console.log(err.data) })

    }
    const id = localStorage.getItem('userId')

    const handleDelete = () => {
        axios.delete(`http://localhost:8080/notes/delete/${id}/${noteId}`)
            .then(res => {
                console.log(res.data)
                window.location.reload();
            }
            )
            .catch(err => { console.log(err.data) })

    }

    const handlepin = () => {

    }



    return (
        <div className="note">
            <h1>
                {title}
            </h1>
            <p>{content}</p>
            <div className="notesicons">
                <RestoreFromTrashOutlinedIcon onClick={handletrash} />
                <DeleteForeverOutlinedIcon onClick={handleDelete} />
            </div>

        </div>
    )
}
export default DeleteNotes;