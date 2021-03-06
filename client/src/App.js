import "./App.css";
import React  from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Post";
import Registration from "./pages/Registration";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <Link to="/"> Home Page</Link>
          <Link to="/Createpost"> Create A Post</Link>
          <Link to="/login"> Login</Link>
          <Link to="/registration"> Registration</Link>
        
        </div>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/createpost" exact element={<CreatePost/>} />
          <Route path="/post/:id" exact element={<Post/>} />
          <Route path="/registration" exact element={<Registration/>} />
          <Route path="/login" exact element={<Login/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
