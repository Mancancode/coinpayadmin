import React from 'react'
import {List, Datagrid, DateField, EditButton, TextField, EmailField} from 'react-admin'

const PostsList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="id"/>
                <TextField source="name"/>
                <EmailField source="email"/>
                <DateField source="createdOn"/>
                <TextField source="transactions"/>
                <EditButton basePath="/users"/>
            </Datagrid>
            
        </List>
    )
}

export default PostsList
