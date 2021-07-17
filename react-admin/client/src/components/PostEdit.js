import React from 'react'
import { Edit, SimpleForm, DateTimeInput, TextField, SelectInput} from 'react-admin';

const PostEdit = (props) => {
    return (
        <Edit title="Edit posts"{...props}>
            <SimpleForm>
                <TextField disabled source="ngn"/>
                <TextField disabled source="amount"/>
                <TextField source="name"/>
                <TextField disabled source="memo_id"/>
                <TextField disabled source="coin"/>
                <TextField disabled source="coin_amount"/>
                <TextField disabled source="coin_address"/>
                <SelectInput source="status" choices={[
                    {"id": "completed", "name": "completeted"},
                    {"id": "pending", "name": "pending"},
                    {"id": "declined", "name": "declined"}
                ]}/>
                <DateTimeInput  disabled source="date"/>
            </SimpleForm>
            
        </Edit>
    )
}

export default PostEdit
