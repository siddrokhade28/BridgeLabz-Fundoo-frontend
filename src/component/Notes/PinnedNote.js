import React, { useEffect, useState } from 'react';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import { DeleteOutline } from '@mui/icons-material';
import axios from 'axios';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import PushPinIcon from '@mui/icons-material/PushPin';




const PinnedNote = ({ title, content, noteId }) => {

    // const [open, setOpen] = useState(false)
    // const [Utitle, setTitle] = useState('');
    // const [Ucontent, setContent] = useState('');

    const handlearchive = () => {
        axios.get(`http://localhost:8080/notes/archive/${noteId}`)
            .then(res => {
                console.log(res.data)
                window.location.reload();
            })
            .catch(err => { console.log(err.data) })

    }

    const handletrash = () => {
        axios.get(`http://localhost:8080/notes/trash/${noteId}`)
            .then(res => {
                console.log(res.data)
                window.location.reload();
            }
            )
            .catch(err => { console.log(err.data) })

    }
    const handlepin = () => {
        axios.get(`http://localhost:8080/notes/pin/${noteId}`)
            .then(res => {
                console.log(res.data)
                window.location.reload();
            }
            )
            .catch(err => { console.log(err.data) })

    }





    return (
        <div className="note">
            <span>
                <PushPinIcon onClick={handlepin} />
            </span>
            <h1>
                {title}
            </h1>
            <p>{content}</p>
            <div className="notesicons">
                <ArchiveOutlinedIcon onClick={handlearchive} />
                <DeleteOutline onClick={handletrash} />
            </div>

        </div>
    )
}
export default PinnedNote;