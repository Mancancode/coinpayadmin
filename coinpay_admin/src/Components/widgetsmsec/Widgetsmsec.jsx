import React from 'react'
import "./widgetsmsec.css"
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
// import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

export default function Widgetsmsec() {
    return (
        <div className="widgetsmsec">
            <div className="widgrtsmsecItem">
            <span className="widgrtsmsecTitle">Visitors</span>
                <div className="widgrtsmsecIdContianer">
                    <span className="widgetsmsecId">340k</span>
                    <span className="widgrtsmsecRate">
                        -3k <ArrowDownwardIcon className='widgetsmsecIcon'/>
                        </span>
                </div>
                <span className="widgrtsmsecSub">Compared to last 7 days</span>
            <div/> 
            </div>
            
        </div>
    )
}
