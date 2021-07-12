import React from 'react'
import "./widgetsm.css"
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import GroupIcon from '@material-ui/icons/Group';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import RedeemIcon from '@material-ui/icons/Redeem';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';

export default function Widgetsm() {
    return (
        <div className="widgetsm">
            <div className="widgetsmItem">
            <span className="widgetsmTitle">Quick View</span>
            <ul className="widgetLIst">
                <li className="widgetLIstItem">
                    <span className="widgetIcon">
                    <GroupIcon className="widgetViewIcon"/>Users
                    </span>
                    <div className="widgetData">
                        <span className="widgetNum">2171k</span>
                    </div>
                    <div className="widgetRange">
                        <span className="widgetRate">+20%</span>
                        <ArrowUpwardIcon className="widgetArrow"/> 
                        <span className="widgetSub">Last 24hrs</span>
                    </div>
                {/* <span className="widgrtsmSub">Compared to last 7 days</span> */}
                </li>
                <li className="widgetLIstItem">
                    <span className="widgetIcon">
                    <AttachMoneyIcon className="widgetViewIcon"/> Transfer
                    </span>
                    <div className="widgetData">
                        <span className="widgetNum">3271k</span>
                    </div>
                    <div className="widgetRange">
                        <span className="widgetRate">+24%</span>
                        <ArrowUpwardIcon className="widgetArrow"/> 
                        <span className="widgetSub">Last 24hrs</span>
                    </div>
                {/* <span className="widgrtsmSub">Compared to last 7 days</span> */}
                </li>
                <li className="widgetLIstItem">
                    <span className="widgetIcon">
                    <RedeemIcon className="widgetViewIcon"/> Rewards
                    </span>
                    <div className="widgetData">
                        <span className="widgetNum">201k</span>
                    </div>
                    <div className="widgetRange">
                        <span className="widgetRate">-2%</span>
                        < ArrowDownwardIcon className="widgetArrowof"/> 
                        <span className="widgetSub">Last 24hrs</span>
                    </div>
                {/* <span className="widgrtsmSub">Compared to last 7 days</span> */}
                </li>
                <li className="widgetLIstItem">
                    <span className="widgetIcon">
                    <EmojiPeopleIcon className="widgetViewIcon"/> Visitors
                    </span>
                    <div className="widgetData">
                        <span className="widgetNum">471k</span>
                    </div>
                    <div className="widgetRange">
                        <span className="widgetRate">+17%</span>
                        <ArrowUpwardIcon className="widgetArrow"/> 
                        <span className="widgetSub">Last 24hrs</span>
                    </div>
                {/* <span className="widgrtsmSub">Compared to last 7 days</span> */}
                </li>
                
            </ul>
            <div/> 
            </div>
            
        </div>
    )
}
