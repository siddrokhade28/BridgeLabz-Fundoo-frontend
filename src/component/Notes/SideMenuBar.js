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
                    <LightbulbOutlinedIcon />Notes
                </li>
                <br />

                <li className=" notification">
                    <NotificationsOutlinedIcon /> Reminder
                </li>
                <br />

                <li className="edit">
                    <EditOutlinedIcon /> Edit Label
                </li>
                <br />

                <li>
                    <ArchiveOutlinedIcon /> Archive
                </li>
                <br />

                <li>
                    <DeleteOutlineOutlinedIcon /> Trash
                </li>
            </ul>

        </div>
    )
}
export default SideMenuBar;