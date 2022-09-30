import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './HomeNotes.css'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import GridViewIcon from '@mui/icons-material/GridView';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';


const NotesHome = () => {
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
    return (
        <div className="fst-div">
            <div className="snd-div">
                <div className="menu_icon">
                    <MenuIcon className="icon_size" />
                </div>
                <div className="notes-png">
                    <img className="notes-png" src="https://play-lh.googleusercontent.com/9bJoeaPbGTB8Tz_h4N-p-6ReRd8vSS-frZb2tmJulaGIoTKElKj3zpmcFJvnS96ANZP5"></img>
                </div>

                <span className="keep-txt">Keep</span>

                <div className="Search-bar">
                    <span><SearchIcon /></span>
                    <input type="text" placeholder="Search"  ></input>
                </div>

                <div className="other-icon">
                    <div className="refresh-icon">
                        <RefreshIcon />
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
    )
}
export default NotesHome;