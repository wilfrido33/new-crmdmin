import React from "react";
import {Admin, Resource,ListGuesser, EditGuesser,ShowGuesser}from "react-admin";

import jsonServerProvider from 'ra-data-json-server';
import { MyDashboard,UserList,PostList,PostEdit, PostCreate,PostShow } from "./pages";
import PostIcon from "@material-ui/icons/Book";
import CreateIcon from '@material-ui/icons/Create';
import UserIcon from "@material-ui/icons/Group";
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import authProvider from "./authProvider/AuthProvider";
import {theme}from "./Theme";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = ()=> 
<Admin dashboard={MyDashboard} authProvider={authProvider} dataProvider={dataProvider}
theme={theme}
>
  
<Resource name="users" list={UserList} icon={UserIcon}/>
  <Resource name="posts"  list={PostList} show ={PostShow} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
  <Resource name ="examen" list={ ListGuesser} icon={ InsertDriveFileIcon}/>
  <Resource name ="foro" list={ ListGuesser} icon={ CreateIcon}/>
</Admin>
  


export default App;
