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
    const [visible, setvisible] = useState(false)

    const [title, settitle] = useState('')

    const [description, setdescription] = useState('')

    const [user_id, setid] = useState()

    const [notes, setnotes] = useState([])

    const naviagte = useNavigate();

   


    

    const handleLogout = () => {
        localStorage.clear();
        naviagte("/login")
    }

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            naviagte('/Login')
        }

    })
    const reloadPage = () => {
        window.location.reload();
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
            <SideMenuBar/>
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