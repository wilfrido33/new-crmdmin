import React from "react";
import {Admin, Resource,ListGuesser, EditGuesser}from "react-admin";

import jsonServerProvider from 'ra-data-json-server';
import { PostList, UserList,PostEdit, PostCreate } from "./components";


const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = ()=> 
<Admin dataProvider={dataProvider}>
  <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate}/>
<Resource name="users" list={UserList}/>

</Admin>
  


export default App;
