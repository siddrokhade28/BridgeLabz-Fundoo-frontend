import React, { useState } from 'react';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import { DeleteOutline } from '@mui/icons-material';
import axios from 'axios';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';




const Note = ({ title, content, noteId }) => {

    const [open, setOpen] = React.useState(false);
    const [utitle, setTitle] = useState(title);
    const [ucontent, setContent] = useState(content);
    const token = localStorage.getItem('token')
    const id = localStorage.getItem('userId')

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

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const submitButton = (i) => {
        i.preventDefault();
        const noteData = {
            title: utitle,
            description: ucontent
        };
        if (noteData.title === "" && noteData.description === "") {
            return;
        }
        else {

            axios.put(`http://localhost:8080/notes/update/${id}/${noteId}`, noteData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then(result => {
                    console.log(result.data)
                    window.location.reload(true);
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }


    const handleTitle = (event) => {
        setTitle(event.target.value);
        console.log(title)
    }

    const handleContent = (event) => {
        setContent(event.target.value)
        console.log(content);
    }


    return (

        <div className="note" onClick={handleClickOpen}>
            <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                    <form>
                        <input type={'text'}
                            placeholder='Title'
                            name="title"
                            value={utitle}
                            onChange={(e) => { handleTitle(e) }} />
                        <p>
                            <textarea name="content"
                                placeholder="Write a Note ..."
                                value={ucontent}
                                onChange={(e) => { handleContent(e) }}>
                            </textarea>
                        </p>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={submitButton} variant="contained" style={{ backgroundColor: "#FABC05" }}>Update</Button>
                </DialogActions>
            </Dialog>
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