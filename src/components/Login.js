import React, { Component, useState } from "react";
import axios from "axios";
import "./Login.css";
import Home from './Home';
import App from './App';
import Apps from './Apps';
import Nvabarsuser from './Nvabarsuser';
import Navbars from './Navbars';
import ReactDOM from 'react-dom';
import {createBrowserHistory} from 'history';
import {BrowserRouter as Router,Switch,Route,HashRouter,Link,Redirect} from 'react-router-dom';
const Login=()=>{
    const [username,setUsername]=useState("");
    const[password,setPassword]=useState("");
   

    const submit=async(e,history)=>{
    e.preventDefault();
      const browserHistory = createBrowserHistory();
           try {
              const newPost = {
                     username:username,
                      password:password,
                     
                  };
               const resp = await axios.post('http://localhost:3009/api/validate', newPost);
               console.log(resp.data);
                if(resp.data==="R" || resp.data==="r"){
                 console.log("success!!!!!");
                 localStorage.setItem('myData',username);
                 let data=localStorage.getItem('myData');
                 console.log(data);
                  browserHistory.push('/Homes');
                 
               window.location.reload(false);
                }
                else if(resp.data==="U"||resp.data==="u"){
                  localStorage.setItem('Data',username);
                 let data=localStorage.getItem('Data');
                 console.log(data);
                 browserHistory.push('/Home');
                 
                    
               window.location.reload(false);
          
                }
                else{
                  alert("Invalid username/password. Pls enter valid credentials!!");
                }
               
           } catch (err) {
              
               console.error(err);
           }
   
    
}  
    return(
   <div className="popo">
          <form>
          <h1 style={{color:"white",fontSize:"30px",textAlign:"center",background:"deeppink"}} >LOGIN</h1>
     <label style={{color:"white",fontSize:"20px",marginLeft:"20px"}}>Username:</label>
<input type="text" name="username" onChange={(e)=>{
       setUsername(e.target.value);
}}
/>
<label style={{color:"white",fontSize:"20px",marginLeft:"20px"}}>Password:</label>
<input type="text" name="password" onChange={(e)=>{
       setPassword(e.target.value);
}}/>
<br></br>
<button onClick={(e)=>submit(e)}>Login</button>
</form>
   </div>

    )
}
export default Login;
