import React from 'react'
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    const nav = 
    <div className="container">
        <div className="float-right">
            <NavLink className="mx-2" exact to='/portfolio'>Portfolio</NavLink>
            <NavLink exact to='/transactions'>Transactions</NavLink>
        </div>      
    </div>
  
    return (
       localStorage.token ? nav : null // Render navbar only if user is logged in
    )
}