import React, { Component, useState } from "react";
import axios from "axios";
import {BrowserRouter as Router,Switch,Route,HashRouter,Link} from 'react-router-dom';
import Login from './Login';
import "./Register.css";
const Register=()=>{
    const [username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const[firstname,setFirstName]=useState("");
    const[email,setEmail]=useState("");
    const[logged,setLogged]=useState("");
    const[company,setCompany]=useState("");
    const submit=()=>{
           axios.post("http://localhost:3009/api/inser",
           {firstname:firstname,email:email,username:username,password:password,logged:logged,company:company});
           <Router>
        <Switch>
    <Route path='/Login' component={Login}/>
    </Switch>
    </Router>
    };
    return(
   <div className="popos" style={{color:"white",background:"black",width:"400px",height:"600px"}}>
          <h1 style={{color:"white",fontSize:"30px",textAlign:"center",background:"deeppink"}} >REGISTER</h1>
       <label style={{color:"white",fontSize:"20px",marginLeft:"20px"}}>Name:</label>
       <input type="text" name="firstname" onChange={(e)=>{
setFirstName(e.target.value);
       }}/><br></br>
       <label style={{color:"white",fontSize:"20px",marginLeft:"20px"}}>Email:</label>
       <input type="text" name="email" onChange={(e)=>{
setEmail(e.target.value);
       }}/><br></br>
     <label style={{color:"white",fontSize:"20px",marginLeft:"20px"}}>Username:</label>
<input type="text" name="username" onChange={(e)=>{
       setUsername(e.target.value);
}}
/>
<br/>
<label style={{color:"white",fontSize:"20px",marginLeft:"20px"}}>Password:</label>
<input type="text" name="password" onChange={(e)=>{
       setPassword(e.target.value);
}}/>
<br/>
<label style={{color:"white",fontSize:"20px",marginLeft:"20px"}}>Recruiter/User:</label>
<input type="text" name="logged" onChange={(e)=>{
       setLogged(e.target.value);
}}/><br/>
<label style={{color:"white",fontSize:"20px",marginLeft:"20px"}}>If Recruiter Enter Company:</label>
<input type="text" name="company" onChange={(e)=>{
       setCompany(e.target.value);
}}/>
<Link to="./Login">
<button onClick={submit}>Register</button>
</Link>
   </div>

    )
}
export default Register;