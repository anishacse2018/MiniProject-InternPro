import React, { Component, useState } from "react";
import axios from "axios";
import "./Contactus.css";
const Contactus=()=>{
    const [username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const[firstname,setFirstName]=useState("");
    const[email,setEmail]=useState("");
    const submit=()=>{
           axios.post("http://localhost:3003/api/insert",
           {firstname:firstname,email:email,username:username,password:password});
    };
    return(
   <div className="popos">
          <h1 style={{color:"white",fontSize:"30px",textAlign:"center",background:"deeppink"}} >CONTACT US</h1>
       <label style={{color:"white",fontSize:"20px",marginLeft:"20px"}}>Name:</label>
       <input type="text" name="firstname" onChange={(e)=>{
setFirstName(e.target.value);
       }}/>
       <br></br>
       <label style={{color:"white",fontSize:"20px",marginLeft:"20px"}}>Email:</label>
       <input type="text" name="email" onChange={(e)=>{
setEmail(e.target.value);
       }}/>
       <br></br>
     <label style={{color:"white",fontSize:"20px",marginLeft:"20px"}}>Username:</label>
<input type="text" name="username" onChange={(e)=>{
       setUsername(e.target.value);
}}
/>
<br></br>
<label style={{color:"white",fontSize:"20px",marginLeft:"20px"}}>Message:</label>
<input type="text" name="password" onChange={(e)=>{
       setPassword(e.target.value);
}}/>
<button onClick={submit}>Submit</button>
   </div>

    )
}
export default Contactus;