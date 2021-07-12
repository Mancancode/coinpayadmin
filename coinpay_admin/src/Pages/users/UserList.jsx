import React from 'react'
import "./userList.css"
import { DataGrid } from '@material-ui/data-grid';
import DeleteSharpIcon  from '@material-ui/icons/DeleteSharp';


export default function UserList() {
  const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'user', headerName: 'User', width: 200, 
  renderCell: (params) => {
    return(
      <div className="userListUser">
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
    field: 'transaction',
    headerName: 'Transaction',
    width: 150,
   },
   {
    field: 'action',
    headerName: 'Action',
    width: 150,
    renderCell: (params) => {
      return(
        <>
          <button className="userListEdit">Edit</button>
          <DeleteSharpIcon className="userListDelete"/>
        </>
        );
    }
   },

];

const rows = [
  { id: 1, username: 'Snow Jon',
   avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhdHMs1CYPk35Vzum8-LMmuHDADidpZp_SGg&usqp=CAU", 
  email: 'jon@gemial.com', status: 'active', transaction: '$200.000' },
  { id: 2, username: 'Lannister Cersei', avatar: 'img', email: 'cersei@gemial.com', status: 'active', transaction: '$280.000' },
  { id: 3, username: 'Lannister Jaime', avatar: 'img', email: 'jaime@gemial.com', status: 'active', transaction: '$400.000' },
  { id: 4, username: 'Stark  Arya', avatar: 'img', email: 'arya@gemial.com', status: 'active', transaction: '$150.000' },
  { id: 5, username: 'Targaryen Daenerys', avatar: 'img', email: 'daenery@gemial.com',status: 'active', transaction: '$160.000' },
  { id: 6, username: 'Melisandre', avatar: 'img', email: 'melisandre@gemial.com', status: 'active', transaction: '$260.000' },
  { id: 7, username: 'Clifford Ferrara', avatar: 'img', email: 'Ferrara@gemial.com', status: 'active', transaction: '$630.000' },
  { id: 8, username: 'Frances Rossini', avatar: 'img', email: 'Rossisi@gemial.com', status: 'active', transaction: '$275.000' },
  { id: 9, username: 'Roxie Harvey', avatar: 'img', email: 'harvey@gemial.com', status: 'active', transaction: '$210.000' },
];

    return (
        <div className="userList">
          <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div> 
        </div>
    )
}
