import React from 'react'
import   './topbar.css'
import NotificationsNoneIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import LanguageIcon from '@material-ui/icons/Language';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topbarLeft">
                <span className="logo">Coinpay Admin</span>
                </div>
                <div className="topbarRght">
                    <div className="topIconsContainer">
                        <NotificationsNoneIcon/>
                        <span className="TopIconBadge">2</span>
                    </div>
                    <div className="topIconsContainer">
                        <LanguageIcon/>
                        <span className="TopIconBadge">2</span>
                    </div>
                    <div className="topIconsContainer">
                        <SettingsIcon/>
                    </div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhdHMs1CYPk35Vzum8-LMmuHDADidpZp_SGg&usqp=CAU" alt="admin_Img" className="topAvater" />
                </div>
                </div>            
        </div>
    )
}
