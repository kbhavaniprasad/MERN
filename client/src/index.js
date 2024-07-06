import ReactDOM from 'react-dom/client';
import React from 'react';
import './Input.css'
import Register from './component/Register'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from'./component/navbar'
const root = ReactDOM.createRoot(document.getElementById('root'));//root id form index.html
//virtual dom
root.render(
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<h1>Login</h1>}/>
          <Route path="/logout" element={<h1>Logout</h1>}/>
        </Routes>
      </Router>

    </div>

)


