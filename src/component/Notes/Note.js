import React, { useEffect, useState } from 'react';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import { DeleteOutline } from '@mui/icons-material';
import axios from 'axios';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';



import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';




const Note = ({ title, content, noteId }) => {

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

        <div className="note" >
            {/* <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog> */}
            <span>
                <PushPinOutlinedIcon onClick={handlepin} />
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
export default Note;