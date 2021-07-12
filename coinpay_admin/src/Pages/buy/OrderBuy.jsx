import React from 'react'
import "./orderBuy.css"
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { DataGrid } from '@material-ui/data-grid';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Modal  from "../../Components/Modal"




export default function OrderBuy() {
    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'user', headerName: 'User', width: 200, 
        renderCell: (params) => {
          return(
            <div className="orderBuy">
              {params.row.username}
            </div>
            );
        }
      },
        { field: 'email', headerName: 'email', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
          width: 150,
        },
        {
          field: 'date',
          headerName: 'Date',
          width: 150,
        },
        {
          field: 'coin_type',
          headerName: 'Coin Type',
          width: 150,
        },
        {
          field: 'amount',
          headerName: 'Amount',
          width: 150,
         },
         {
          field: 'action',
          headerName: 'Action',
          width: 150,
          renderCell: (params) => { 
            return(
              <  >
                <Modal/>
              </>
              );
          }
         },
      
      ];
      
      const rows = [
        { id: 1, username: 'Snow Jon',
         avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhdHMs1CYPk35Vzum8-LMmuHDADidpZp_SGg&usqp=CAU", 
        email: 'jon@gemial.com', status: 'completed', date: '02/02/21', coin_type: 'BTC',  amount: '$200.000' },
        { id: 2, username: 'Lannister Cersei', avatar: 'img', email: 'cersei@gemial.com', status: 'completed', date: '02/02/21', coin_type: 'BTC', amount: '$280.000' },
        { id: 3, username: 'Lannister Jaime', avatar: 'img', email: 'jaime@gemial.com', status: 'declined', date: '02/02/21', coin_type: 'BTC', amount: '$400.000' },
        { id: 4, username: 'Stark  Arya', avatar: 'img', email: 'arya@gemial.com', status: 'completed', date: '07/02/21', coin_type: 'BNB', amount: '$150.000' },
        { id: 5, username: 'Targaryen Daenerys', avatar: 'img', email: 'daenery@gemial.com',status: 'pending', date: '02/02/21', coin_type:  'BTC', amount: '$160.000' },
        { id: 6, username: 'Melisandre', avatar: 'img', email: 'melisandre@gemial.com', status: 'declined', date: '02/03/21', coin_type: 'BNB', amount: '$260.000' },
        { id: 7, username: 'Clifford Ferrara', avatar: 'img', email: 'Ferrara@gemial.com', status: 'pending', date: '02/03/21', coin_type: 'ADA', amount: '$630.000' },
        { id: 8, username: 'Frances Rossini', avatar: 'img', email: 'Rossisi@gemial.com', status: 'completed', date: '02/04/21', coin_type: 'BTC', amount: '$275.000' },
        { id: 9, username: 'Roxie Harvey', avatar: 'img', email: 'harvey@gemial.com', status: 'declined', date: '02/04/21', coin_type: 'ETH', amount: '$210.000' },
      ];
    return (
        <div className="orderBuy">
              <div className="oderBuyTotalContianer">

                <div className="orderBuyItem">
                
                <span className="orderBuyTitle">Buy</span>
                <div className="orderBuyMoneyContianer">
                    <span className="orderBuyMoney">$400,340</span>
                    <span className="orderBuyMoneyRate">
                        -$13 <ArrowDownwardIcon className='orderBuyIcon'/>
                        </span>
                </div>
                <span className="orderBuySub">Compared to last 24hrs</span>
                  
                </div>
                <div className="orderBuyItem Users">
                
                <span className="orderBuyTitle">Users that bought</span>
                <div className="orderBuyMoneyContianer">
                    <span className="orderBuyMoney">40,340</span>
                    <span className="orderBuyMoneyRate">
                        +213 < ArrowUpwardIcon className='orderBuyIcon up'/>
                        </span>
                </div>
                <span className="orderBuySub">Compared to last 24hrs</span>
                  
                </div> 
             </div>
                
                <div className="orderBuyTable" style={{ height: 400, width: '100%' }}>
                 <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
               </div> 

               

        </div>
    )
}
