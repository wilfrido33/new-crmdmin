import React from "react";
import {Admin, Resource,ListGuesser, EditGuesser,ShowGuesser}from "react-admin";

import jsonServerProvider from 'ra-data-json-server';
import { MyDashboard,UserList,PostList,PostEdit, PostCreate,PostShow } from "./pages";
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";
import authProvider from "./authProvider/AuthProvider";


const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = ()=> 
<Admin dashboard={MyDashboard} authProvider={authProvider} dataProvider={dataProvider}>
  
<Resource name="users" list={UserList} icon={UserIcon}/>
  <Resource name="posts"  list={PostList} show ={PostShow} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
  <Resource name ="examen"/>
  <Resource name ="foro"/>
</Admin>
  


export default App;
