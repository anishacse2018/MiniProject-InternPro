import { Call, SettingsRemoteSharp } from '@material-ui/icons';
import axios from 'axios';
import React, { Component } from 'react';
import {Table} from 'reactstrap';
import './Resttry.css';
import Nvabarsuser from './Nvabarsuser';

class Resume extends Component {
     render(){

     
return(
  <>
  <Nvabarsuser/>
  <span>
  <h1 style={{fontSize:"50px",alignSelf:"center"}}>Need Help In Creating A Resume??</h1>
  <a href="https://anishacse2018.github.io/WPSCSEB/resume.html" target={"_blank"}><button style={{width:"200px"}}>Go to Resume Builder</button></a>
  <img src="https://png.pngtree.com/png-clipart/20200709/original/pngtree-creative-resume-template-png-image_3529775.jpg" width="50%" height="50%" style={{marginLeft:"600px",marginTop:"-60px"}}/>
  
  </span>
  </>
);

}}
export default Resume;