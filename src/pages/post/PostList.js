import React from "react";
import {List,Datagrid,TextField,ReferenceField,EditButton,DeleteButton,ShowButton}from "react-admin";
import {Filter,ReferenceInput,SelectInput,TextInput}from "react-admin"
import { PostShow } from "..";


const PostFilter= (props) =>(
 
 <Filter {...props} >
       <TextInput label="Buscar" source="q" alwaysOn/>
       <ReferenceInput label="Usuario"  source="userId" reference="users" alwaysOn>
           <SelectInput optionText="name"/>
       </ReferenceInput>

 </Filter>


);


  const PostList = props => (
    <List filters={<PostFilter/>} exporter={false} {...props}>
        <Datagrid>
            <TextField source="id" />
            <ShowButton label="Ver"/>                                       

            <ReferenceField source="userId" reference="users">
            
                <TextField source="name" />
            </ReferenceField>
            <TextField source="title" />
            <EditButton/>
        </Datagrid>
    </List>
);
export default PostList;