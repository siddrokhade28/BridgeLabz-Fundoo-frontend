import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './HomeNotes.css'

import Header from "./Header";
import CreateNote from "./CreateNote";
import axios from "axios";
import Note from "./Note";
import PinnedNote from "./PinnedNote";



const NotesHome = () => {

    const naviagte = useNavigate();
    const [note, setNotes] = useState([]);
    const [ispinned, setIspinned] = useState(false)

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            naviagte('/Login')
            window.location.reload(true);
        }

    })
    const id = localStorage.getItem('userId')



    useEffect(() => {
        const loadpage = async () => {

            axios.get(`http://localhost:8080/notes/getNotes/${id}`,)
                .then(result => {
                    console.log("result", result.data)
                    setNotes(result.data.data)
                })
                .catch(err => { console.log(err) })

        }
        loadpage();
    }, [id])

    useEffect(() => { lenth(); })

    const lenth = () => {
        const len = note.filter(notes => notes.status === "Pinned").length;
        if (len !== 0) {
            setIspinned(true);
        }

    }

    return (
        <div className=" parent-div" >
            <div className="fst-div">
                <Header />
            </div >
            <div className="addNote">
                <CreateNote />
            </div>
            <div>
                {ispinned ? (<div className="pinned" >
                    <div className="pinned1" >
                        <h2>Pinned</h2>
                        {
                            note.filter(notes => notes.status === "Pinned").map(note => <div key={note.note_id}><PinnedNote title={note.title} content={note.description} noteId={note.note_id} /></div>)
                        }
                    </div>
                    <div className="pinned2">
                        <h2>Others</h2>
                        <div>
                            {
                                note.filter(notes => notes.status === "Active").map(note => <div key={note.note_id}><Note title={note.title} content={note.description} noteId={note.note_id} /></div>)
                            }
                        </div>
                    </div>
                </div>
                ) : (<div>
                    {
                        note.filter(notes => notes.status === "Active").map(note => <div key={note.note_id}><Note title={note.title} content={note.description} noteId={note.note_id} /></div>)
                    }
                </div>)}

            </div>

        </div>
    )
}
export default NotesHome;