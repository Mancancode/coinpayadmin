import React from 'react'
import './featuredInfo.css'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

function FeaturedInfo() {
    return (
        <div className="featured">
                <div className="featuredItem">

                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContianer">
                    <span className="featuredMoney">$400,340</span>
                    <span className="featuredMoneyRate">
                        -$13 <ArrowDownwardIcon className='featuredIcon'/>
                        </span>
                </div>
                <span className="featuredSub">Compared to last 24hrs</span>
            <div/> 
                </div>
               <div className="featuredItem">

                <span className="featuredTitle">Swap</span>
                <div className="featuredMoneyContianer">
                    <span className="featuredMoney">60,250</span>
                    <span className="featuredMoneyRate">
                        +180 <ArrowUpwardIcon className='featuredIcon Up'/>
                        </span>
                </div>
                <span className="featuredSub">Compared to last 24hrs</span>
         
            </div>  

            <div className="featuredItem">

                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContianer">
                    <span className="featuredMoney">$40,55</span>
                    <span className="featuredMoneyRate">
                        -$170 <ArrowDownwardIcon className='featuredIcon'/>
                        </span>
                </div>
                <span className="featuredSub">Compared to last 24hrs</span>
         
            </div>

            <div className="featuredItem">

                <span className="featuredTitle">Profit</span>
                <div className="featuredMoneyContianer">
                    <span className="featuredMoney">$20,340</span>
                    <span className="featuredMoneyRate">
                        +$800 <ArrowUpwardIcon className='featuredIcon Up'/>
                        </span>
                </div>
                <span className="featuredSub">Compared to last 24hrs</span>
         
            </div>
          
            
            
        </div>
    )
}

export default FeaturedInfo
