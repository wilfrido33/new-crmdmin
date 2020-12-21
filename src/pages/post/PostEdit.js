import React from "react";
import {Edit,SimpleForm,ReferenceInput,SelectInput,TextInput}from "react-admin";

 const PostEdit = props => (

    <Edit {...props}>
        
        <SimpleForm>
            <TextInput source="id" />
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Edit>
);
export default PostEdit;