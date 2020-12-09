import React,{useState,useEffect} from 'react';
import './App.css';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import { Provider } from "react-redux";
import Homes from './Homes';
import Aboutus from './Aboutus';
import JobBoard from './JobBoard';
import Recruiter from './Recruiter';
import Rec from './Rec';
import Apps from './Apps';
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
import Users from './Users';
import Resume from './Resume';
import Resttrys from './Resttrys';
import Form from './Form';
import store from './store';
import Header from './header';
import Footer from './Footer';
import Displayjobs from './Displayjobs';
import LogOut from './LogOut';
import LogOutrec from './LogOutrec';
library.add(faTrash)
function App() {

  const[jobs,setJobs]=useState([]);
  useEffect(()=>{
     setJobs(data);
  },[]);

  return (
    <>
    
    <Router>
    
      <Switch>
        <Route path='/Apps' component={Apps}/>
      <Route path='/' exact component={Home}/>
      <Route path='/Home' component={Home}/>
      <Route path='/Homes' component={Homes}/>
        <Route path='/Rec' component={Rec}/>
        <Route path='/Aboutus' component={Aboutus}/>
        <Route path='/Login' component={Login}/>
        <Route path='/Resttry' component={Resttry}/>
        <Route path='/Register' component={Register}/>
        <Route path='/Contactus' component={Contactus}/>
        <Route path="/User" component={User}></Route>
        <Route path="/Users" component={Users}></Route>
        <Route path="/Resttrys" component={Resttrys}/>
        <Route path="/Displayjobs" component={Displayjobs}></Route>
    <Route path="/Chat" name="chat" component={Chat}></Route>
    <Route path="/Resume"  component={Resume}></Route>
    <Route path="/LogOut"  component={LogOut}></Route>
    <Route path="/LogOutrec"  component={LogOutrec}></Route>
      </Switch>
      </Router>

     
      
  </>
  );
}

export default App;