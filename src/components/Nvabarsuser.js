import React, { Component, useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SideBardatauser } from "./SideBardatauser";
import {IconContext} from 'react-icons';
import "./Navbars.css";
const Nvabarsuser=()=>{
    const [sidebar,setSidebar]=useState(false);
    const showSidebar=()=>setSidebar(!sidebar);
    return(
        
        <>
       
        <IconContext.Provider value={{color:"#fff"}}>
<div className="navbar">
<Link to="#" className='menu-bars'>
   <FaIcons.FaBars onClick={showSidebar}/>
</Link>
<h1 style={{color:"white",fontSize:"35px"}}>INTERNPRO</h1>
<Link to="/Home">
<h1 style={{color:"white",marginLeft:"560px",marginRight:"10px"}}>Home</h1>
</Link>
<Link to="/Aboutus">
<h1 style={{color:"white",marginRight:"10px"}}>AboutUs</h1>
</Link>
<Link to="/Contactus">
<h1 style={{color:"white",marginRight:"10px"}}>ContactUs</h1>
</Link>
<Link to="/Login">
<h1 style={{color:"white",marginRight:"10px"}}>Login</h1>
</Link>
<Link to="/Register">
<h1 style={{color:"white"}}>Register</h1>
</Link>
<Link to="/LogOut">
<h1 style={{color:"white"}}>LogOut</h1>
</Link>
</div>
<nav className={sidebar?'nav-menu active':'nav-menu'}>
<ul className='nav-menu-items' onClick={showSidebar}>
<li className='navbar-toggle'>
    <Link to='#' className='menu-bars'>
        <AiIcons.AiOutlineClose/>
    </Link>
</li>
{SideBardatauser.map((item,index)=>{
    return(
        <li key={index} className={item.cName}>
           <Link to={item.path}>
    {item.icon}<span>{item.title}</span>
            </Link>
        </li>
    );
})}

</ul>
</nav>
</IconContext.Provider>
    </>);
    
}
export default Nvabarsuser;