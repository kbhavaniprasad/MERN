import '../style.css'
import React from 'react';
import {BrowserRouter as Router,Link} from 'react-router-dom';
export default function Header()
{
    return(
        <div class="header">
            <h1>FlipKart</h1>
            <ul>
                <li><Link to="/"> Home</Link></li>
                <li> <Link to="/login">Login</Link></li>
                <li> <Link to="/register">Register</Link> </li>
            </ul>
        </div>

    )
}