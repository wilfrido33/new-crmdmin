import React from "react";
import {Admin, Resource,ListGuesser, EditGuesser}from "react-admin";

import jsonServerProvider from 'ra-data-json-server';
import { PostList, UserList,PostEdit, PostCreate, MyDashboard } from "./components";
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";
import authProvider from "./authProvider/AuthProvider";


const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = ()=> 
<Admin dashboard={MyDashboard} authProvider={authProvider} dataProvider={dataProvider}>
  
<Resource name="users" list={UserList} icon={UserIcon}/>
  <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>

</Admin>
  


export default App;
