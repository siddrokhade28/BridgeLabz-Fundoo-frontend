import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import React from 'react';


const SideMenuBar = () => {
   
    return (
        <div className="menu-bar">
            <ul className="menu-items">
                <li className="lightbulb">
                    <LightbulbOutlinedIcon />
                    <span> Notes</span>
                </li>
                <br />

                <li className=" notification">
                    <NotificationsOutlinedIcon /><span> Reminder </span>
                </li>
                <br />

                <li className="edit">
                    <EditOutlinedIcon /> <span>Edit Label</span>
                </li>
                <br />

                <li>
                    <ArchiveOutlinedIcon /> <span>Archive</span>
                </li>
                <br />

                <li>
                    <DeleteOutlineOutlinedIcon /> <span>Trash</span>
                </li>
            </ul>

        </div>
    )
}
export default SideMenuBar;