import React from "react";
import {List,Datagrid,TextField,ReferenceField,EditButton}from "react-admin"
import { PostFilter } from "..";


 const PostList = props => (
    <List filters={<PostFilter/>} exporter={false} {...props}>
        <Datagrid>
            <TextField source="id" />

            <ReferenceField source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="title" />
            <EditButton/>
        </Datagrid>
    </List>
);
export default PostList;