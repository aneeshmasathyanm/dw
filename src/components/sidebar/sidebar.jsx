import "./sidebar.css" 
import React from 'react'
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import MailIcon from '@mui/icons-material/Mail';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SettingsIcon from '@mui/icons-material/Settings';
import DashboardIcon from '@mui/icons-material/Dashboard';
import RepeatIcon from '@mui/icons-material/Repeat';

export default function Sidebar()
{
    return(
    <div className="sidebar">
        <div classname="sidebarmenu">
            <div className="sidebarlistitems.active">
                <ul className="sidebarlist">
                    <li className="sidebarlistitems">
                        <CircleNotificationsIcon style={{fontSize:"50px"}} className="sidebaricon"/>
                    </li>
            <br/>
            <li classname="sidebarlistitems">
            <MailIcon style={{fontSize:"50px"}} className="sidebaricon"/>
            </li>
            <br/>
            <li classname="sidebarlistitems">
            <DashboardIcon style={{fontSize:"50px"}} className="sidebaricon"/>
            </li>
            <br/>
            <li classname="sidebarlistitems">
            <RepeatIcon style={{fontSize:"50px"}} className="sidebaricon"/>
            </li>
            <br/>
            <li classname="sidebarlistitems">
            <TrendingUpIcon style={{fontSize:"50px"}} className="sidebaricon"/>
            </li>
            <br/>
            <li classname="sidebarlistitems">
            <SettingsIcon style={{fontSize:"50px"}} className="sidebaricon"/>
            </li>
        </ul>
        </div>
    </div>
</div>
    );
}