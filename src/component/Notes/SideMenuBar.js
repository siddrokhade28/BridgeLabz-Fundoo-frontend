import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import React from 'react';
import { useNavigate } from 'react-router-dom';


const SideMenuBar = () => {
    const naviagte = useNavigate();

    const handleNotes = () => {
        naviagte('/notes-home')

    }

    const handlearchive = () => {
        naviagte('/archivePage');
    }

    const handletrash = () => {
        naviagte('/trashPage')
    }

    return (
        <div className="menu-bar">
            <ul className="menu-items">
                <li className="lightbulb">
                    <LightbulbOutlinedIcon />
                    <span onClick={handleNotes}> Notes </span>
                </li>
                <br />

                {/* <li className=" notification">
                    <NotificationsOutlinedIcon /><span> Reminder </span>
                </li>
                <br />

                <li className="edit">
                    <EditOutlinedIcon /> <span>Edit Label</span>
                </li>
                <br /> */}

                <li>
                    <ArchiveOutlinedIcon />
                    <span onClick={handlearchive}>Archive</span>
                </li>
                <br />

                <li>
                    <DeleteOutlineOutlinedIcon />
                    <span onClick={handletrash}>Trash</span>
                </li>
            </ul>

        </div>
    )
}
export default SideMenuBar;