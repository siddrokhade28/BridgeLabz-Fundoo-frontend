import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import GridViewIcon from '@mui/icons-material/GridView';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import SideMenuBar from "./SideMenuBar";

const Header = () => {
    const [isSideBarExpanded, setSideBarExpanded] = useState(false)
    const naviagte = useNavigate();


    //handling toggling of Menu bar
    const handleSideBar = () => {
        setSideBarExpanded(prevState => !prevState);
    }

    const reloadPage = () => {
        window.location.reload();
        // naviagte('/notes-home')
    }

    const handleLogout = () => {
        localStorage.clear();
        naviagte("/login")
    }
    return (
        <div className="snd-div">
            <div className="demo">
                <div className="menu_icon">
                    <MenuIcon className="icon_size" onClick={handleSideBar} />
                    {isSideBarExpanded ? <SideMenuBar /> : null}

                </div>
            </div>
            <div className="notes-png">
                <img className="notes-png" src="https://play-lh.googleusercontent.com/9bJoeaPbGTB8Tz_h4N-p-6ReRd8vSS-frZb2tmJulaGIoTKElKj3zpmcFJvnS96ANZP5" onClick={reloadPage} alt="keep"></img>
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
    )
}

export default Header;