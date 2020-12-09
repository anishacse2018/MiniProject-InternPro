import React,{useState,useEffect} from 'react';
import './App.css';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import Aboutus from './Aboutus';
import JobBoard from './JobBoard';
import Recruiter from './Recruiter';
import Rec from './Rec';
import Navbars from './Navbars';
import Nvabarsuser from './Nvabarsuser';
import data from '../assets/data.json';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {BrowserRouter as Router,Switch,Route,HashRouter} from 'react-router-dom';
import CallJobs from './CallJobs';
import Resttry from './Resttry';
import Contactus from './Contactus';
import Chat from './Chat';
import User from './User';
import Displayjobs from './Displayjobs';
library.add(faTrash)
const Apps=()=>{ 

 const[jobs,setJobs]=useState([]);
  useEffect(()=>{
     setJobs(data);
  },[]);

  return (
    <>
    
    <Router>
    <Navbars/>
      <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/Home' component={Home}/>
        <Route path='/Rec' component={Rec}/>
        <Route path='/Aboutus' component={Aboutus}/>
        <Route path='/Login' component={Login}/>
        <Route path='/Resttry' component={Resttry}/>
        <Route path='/Register' component={Register}/>
        <Route path='/Contactus' component={Contactus}/>
        <Route path="/User" component={User}></Route>
       
    <Route path="/Chat" name="chat" component={Chat}></Route>
      </Switch>
      </Router>
      </>
  );
}

export default Apps;