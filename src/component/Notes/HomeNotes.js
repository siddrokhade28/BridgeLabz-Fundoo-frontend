import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './HomeNotes.css'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import GridViewIcon from '@mui/icons-material/GridView';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import SideMenuBar from "./SideMenuBar";




const NotesHome = () => {
    const [isExpanded, setExpanded] = useState(false)

    const [user_id, setid] = useState()

    const [note, setnote] = useState({ title: "", content: "" });

    const naviagte = useNavigate();






    const handleLogout = () => {
        localStorage.clear();
        naviagte("/login")
    }
    const handleNote = (e) => {
        console.log(e.target.value)
    }

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            naviagte('/Login')
        }

    })
    const reloadPage = () => {
        window.location.reload();
    }
    const handleExpanded = () => {
        setExpanded(true)
    }
    return (
        <div className=" parent-div">
            <div className="fst-div">
                <div className="snd-div">
                    <div className="menu_icon">
                        <MenuIcon className="icon_size" />
                    </div>
                    <div className="notes-png">
                        <img className="notes-png" src="https://play-lh.googleusercontent.com/9bJoeaPbGTB8Tz_h4N-p-6ReRd8vSS-frZb2tmJulaGIoTKElKj3zpmcFJvnS96ANZP5" onClick={reloadPage}></img>
                    </div>

                    <span className="keep-txt">Keep</span>

                    <div className="Search-bar">
                        <span><SearchIcon /></span>
                        <input type="text" placeholder="Search"  ></input>
                    </div>

                    <div className="other-icon">
                        <div className="refresh-icon">
                            <RefreshIcon onClick={reloadPage} />
                        </div>
                        <div className="gridView">
                            <GridViewIcon />
                        </div>
                        <div className="setting">
                            <SettingsIcon />
                        </div>
                        <div className="apps">
                            <AppsIcon />
                        </div>

                    </div>

                    <div className="logout">
                        <button type="submit" onClick={handleLogout}
                        >Logout</button>
                    </div>
                </div>
            </div >
            <div className="sideBar-div">
                <SideMenuBar />
            </div>
            <div className="addNote">
                <form>
                    {isExpanded && (
                        <input type={'text'}
                            placeholder='Title'
                            name="title"
                            value={note.title}
                            onChange={handleNote} />)}
                    {/* <input type={'text'}
                        placeholder='Title'
                        name="title"
                        value={note.title}
                        onChange={handleNote} /> */}
                    <p>
                        <textarea name="content"
                            placeholder="Write a Note ..."
                            value={note.content}
                            onClick={handleExpanded}
                            onChange={handleNote}
                            rows={isExpanded ? 3 : 1}>
                        </textarea>
                    </p>
                </form>

            </div>
            <div className="note">
                <h1>hello</h1>
                <p>what going on </p>

            </div>
            {/* <div className="notes">
        {
                        visible === false
                        ?
                        <div>
                        <input type="text" placeholder="Take a note..." onClick={() => setvisible(true)} />
                        </div>
                        :
                        <div>
                        <input type="text" placeholder='Title' value={title} onChange={(e) => settitle(e.target.value)}/><br></br>
                        <input type="text" placeholder='Take a note...' value={description} onChange={(e) => setdescription(e.target.value)}/><br></br>
                        <button disabled={!title || !description ? true : false } onClick={SaveNote}>close</button>
                        </div>
                    }

        </div> */}

        </div>
    )
}
export default NotesHome;