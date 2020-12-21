import React from "react";
import {List,Datagrid,TextField,EmailField, UrlField,ShowButton}from "react-admin"


 const UserList = props => (
    <List {...props} exporter={false}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ShowButton label="Ver"/>
            <TextField source="name" />

            <EmailField source="email" />
            
            <TextField source="phone" />
            <UrlField source="website" />
            <TextField source="company.name" />
        </Datagrid>
    </List>
);

export default UserList;