import React from 'react'
import {List, Datagrid, DateField, EditButton, TextField, EmailField} from 'react-admin'

const OrderList = (props) => {
    return (
        <List {...props}>
            <Datagrid >
                <TextField source="id"/>
                <TextField source="name"/>
                <EmailField source="email"/>
                <TextField source="status"/>
                <DateField source="date"/>
                <TextField source="coin"/>
                <TextField source="amount"/>
                <EditButton basePath="/posts"/>
            </Datagrid>
            
        </List>
    )
}

export default OrderList
