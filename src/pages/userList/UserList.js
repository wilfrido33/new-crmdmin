import React from "react";
import {List,Datagrid,TextField,EmailField, UrlField,ShowButton}from "react-admin"


 const UserList = props => (
    <List {...props} exporter={false}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ShowButton label="Ver"/>

            <TextField label="Nombre" source="name" />

            <EmailField  label="Correo"  source="email" />
            
            <TextField label="Telefono" source="phone" />
        
        
        </Datagrid>
    </List>
);

export default UserList;