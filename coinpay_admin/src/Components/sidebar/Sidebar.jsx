import React from 'react'
import './sidebar.css'
import DashboardIcon from '@material-ui/icons/Dashboard';
import GroupIcon from '@material-ui/icons/Group';
// import TimelineIcon from '@material-ui/icons/Timeline';
import { ShoppingBasketSharp, TimelineSharp } from '@material-ui/icons';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AssessmentIcon from '@material-ui/icons/Assessment';
import FeedbackIcon from '@material-ui/icons/Feedback';
import MessageIcon from '@material-ui/icons/Message';
import RedeemIcon from '@material-ui/icons/Redeem';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle "> Dashboard
                        <ul className="sidebarList">
                            <Link to="/" className='link'>      
                            <li className="sidebarListItem  ">
                                <DashboardIcon className='sidebarItem'/>
                                Home
                            </li>
                            </Link>

                            <Link to="/orders" className='link'>
                            
                            <li to='/orders' className="sidebarListItem">
                                <ShoppingBasketSharp/>
                                Orders
                            </li>
                            </Link>


                            <Link  to="/users" className='link'>
                            
                            <li className="sidebarListItem">
                                <GroupIcon/>
                                Users
                            </li>
                            </Link>

                            <li  className="sidebarListItem">
                                <TimelineSharp/>
                                Rates
                            </li>

                        </ul>
                    </h3>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle"> QUick Menu
                        <ul className="sidebarList">
                            <li className="sidebarListItem">
                                <AttachMoneyIcon/>
                                Transaction
                            </li>
                            <li className="sidebarListItem">
                                <AssessmentIcon/>
                                Reports
                            </li>
                            <li className="sidebarListItem">
                                <FeedbackIcon/>
                                Testimonies
                            </li>
                        </ul>
                    </h3>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle"> Notification
                        <ul className="sidebarList">
                            <li className="sidebarListItem">
                                <MessageIcon/>
                                Message
                            </li>
                            <li className="sidebarListItem">
                                <RedeemIcon/>
                                Rewards
                            </li>
                            <li className="sidebarListItem">
                                <LiveHelpIcon/>
                                FAQs
                            </li>
                        </ul>
                    </h3>
                </div>
            </div>
        </div>
    )
}
