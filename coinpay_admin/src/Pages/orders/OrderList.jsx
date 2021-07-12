import React from 'react'
import './orderList.css'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import {Link} from "react-router-dom"
import Modal  from "../../Components/Modal"
import { Component } from 'react';


function OrderList() {
    return (
        <div className="orderList">
                <div className="orderListItem">
                  <Link to="/buy" className='link'>
                <span className="orderListTitle">Buy</span>
                <div className="orderListMoneyContianer">
                    <span className="orderListMoney">$400,340</span>
                    <span className="orderListMoneyRate">
                        -$13 <ArrowDownwardIcon className='orderListIcon'/>
                        </span>
                </div>
                <span className="orderListSub">Compared to last 24hrs</span>
                  </Link>
                </div>

               <div className="orderListItem">
                   <Link to="/swap" className='link'>
                <span className="orderListTitle">Swap</span>
                <div className="orderListMoneyContianer">
                    <span className="orderListMoney">60,250</span>
                    <span className="orderListMoneyRate">
                        +180 <ArrowUpwardIcon className='orderListIcon Up'/>
                        </span>
                </div>
                <span className="orderListSub">Compared to last 24hrs</span>
                </Link>

            </div>  

            <div className="orderListItem">
                <Link to="/sell" className='link'>
                <span className="orderListTitle">Sell</span>
                <div className="orderListMoneyContianer">
                    <span className="orderListMoney">$40,55</span>
                    <span className="orderListMoneyRate">
                        -$170 <ArrowDownwardIcon className='orderListIcon'/>
                        </span>
                </div>
                <span className="orderListSub">Compared to last 24hrs</span>
                </Link>
            </div>

            <div className="orderListItem">
                <Link to="/send" className='link'>

                <span className="orderListTitle">Send</span>
                <div className="orderListMoneyContianer">
                    <span className="orderListMoney">$20,340</span>
                    <span className="orderListMoneyRate">
                        +$800 <ArrowUpwardIcon className='orderListIcon Up'/>
                        </span>
                </div>
                <span className="orderListSub">Compared to last 24hrs</span>
                </Link>

            </div>          
           
        
        </div>
    )
}

export default OrderList
