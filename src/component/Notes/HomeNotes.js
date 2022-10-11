import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './HomeNotes.css'

import Header from "./Header";
import CreateNote from "./CreateNote";
import axios from "axios";
import Note from "./Note";
import NotesPage from "../Pages/NotesPage";
import ArchivePage from "../Pages/ArchivePage";




const NotesHome = () => {

    const naviagte = useNavigate();
    const [note, setNotes] = useState([]);
    const [leng, setlen] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userid, setuserid] = useState()

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
                    // console.log(result.data.data)
                    console.log("hello",note.length)

                })
                .catch(err => { console.log(err) })
        }
        loadpage();
    }, [])

    


    return (
        <div className=" parent-div" >
            <div className="fst-div">
                <Header />
            </div >
            <div className="addNote">
                <CreateNote />
            </div>
            <div>
                {
                    note.filter(notes => notes.status == "Active").map(note => <div key={note.note_id}><Note title={note.title} content={note.description} noteId={note.note_id} /></div>)
                }
            </div>



        </div>
    )
}
export default NotesHome;