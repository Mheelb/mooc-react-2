import Header from "./components/Header";
import Counter from "./pages/Counter";
import UserList from "./pages/UserList";
import Login from "./pages/Login";
import React, { useContext} from 'react';
import { Route, Routes } from "react-router-dom";
import UserProfile from "./components/UserProfile";
import Roles from "./pages/Roles";
import Register from "./pages/Register2";
import Page404 from "./pages/Page404";
import Post from "./pages/Post";
import User from "./pages/User";
import classnames from 'classnames';
import { Context } from "./context";

function App() {
  const {context} = useContext(Context);

  return (
    <div className={classnames("min-vh-100 bg-" + context.theme, {'text-light': context.theme === "dark"})}>
      <Header/>
      <div className="p-3">
        <Routes>
          <Route path="/" element={<UserList />}/>
          <Route path="/roles" element={<Roles/>}/>
          <Route path="/counter" element={<Counter/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/posts/:id"  element={<Post/>}/>
          <Route path="/users/:id" element={<User/>}/>
          <Route path="*" element={<Page404/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
