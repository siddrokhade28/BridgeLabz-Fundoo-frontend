import React, { useState } from "react";
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import axios from "axios";
import { ClickAwayListener } from "@mui/material";

const CreateNote = () => {
    const [isExpanded, setExpanded] = useState(false);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const token = localStorage.getItem('token')

    const handleExpanded = () => {
        setExpanded(true)
    }

    const handleClickAway = () => {
        setExpanded(false);
    }


    const handleTitle = (event) => {
        setTitle(event.target.value);
        console.log(title)
    }

    const handleContent = (event) => {
        setContent(event.target.value)
        console.log(content);
    }
    const id = localStorage.getItem('userId')

    const submitButton = (i) => {
        i.preventDefault();
        const noteData = {
            title: title,
            description: content
        };
        if (noteData.title === "" && noteData.description === "") {
            return;
        }
        else {

            axios.post(`http://localhost:8080/notes/add/${id}`, noteData, {
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


    return (
        <div>
            <ClickAwayListener onClickAway={handleClickAway}>
                <form>
                    {isExpanded && (
                        <input type={'text'}
                            placeholder='Title'
                            name="title"
                            value={title}
                            onChange={(e) => { handleTitle(e) }} />
                    )}
                    <p>
                        <textarea name="content"
                            placeholder="Write a Note ..."
                            value={content}
                            onClick={handleExpanded}
                            onChange={(e) => { handleContent(e) }}
                            rows={isExpanded ? 3 : 1}>
                        </textarea>
                    </p>
                    {isExpanded && (
                        <div className="desc_icon">
                            <AddAlertOutlinedIcon className="bottonicon" />
                            <ImageOutlinedIcon className="bottonicon" />
                            <ArchiveOutlinedIcon className="bottonicon" />
                            <ColorLensOutlinedIcon className="bottonicon" />
                        </div>
                    )}
                    <button onClick={submitButton}> <AddOutlinedIcon /></button>
                </form>
            </ClickAwayListener>


        </div>
    )
}
export default CreateNote;