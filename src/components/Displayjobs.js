import { Call, SettingsRemoteSharp } from '@material-ui/icons';
import axios from 'axios';
import React, { Component } from 'react';
import {Table} from 'reactstrap';
import './Resttry.css';
import Nvabarsuser from './Nvabarsuser';
class Displayjobs extends Component {
    constructor(props){
        super(props);
        this.state = {
            items : [],
            jobsapplied:[]
        };

        // You should bind this object to componentWillMount method, other setState was not working
        this.componentWillMount = this.componentWillMount.bind(this);
    }


    // This method is call before component will mounted
    componentWillMount() {
        fetch('http://localhost/trigrecs.php')
            .then(res => res.json())
            .then( data => this.setState({ items : data }) );
            fetch('http://localhost/extract.php')
            .then(res => res.json())
            .then( data => this.setState({ jobsapplied : data }) );
    }
    
    render() {
        const { items } = this.state;
        const {jobsapplied}=this.state;
            //console.log(items);
             //console.log(jobsapplied);
             var result="Hi";
              let data=localStorage.getItem('Data');
               //console.log(data);
               /*{jobsapplied.map(jobapplied =>
               result = jobapplied.user_name === data? "active":"",
             // console.log(jobapplied.user_name),
              console.log("ttyl"),
               )}
               //console.log(result+"ttyl");*/
              // let mymap = new Map();
               var jobsfinal=[];
              // mymap.set(position, 'num1'); 
               //mymap.set(role, 'num1'); 
               //mymap.set(company, 'num1'); 
               //mymap.set(company, 'num1'); 
               for(var i=0;i<jobsapplied.length;i++)
               {
                   console.log(jobsapplied[i].username)
                   if(jobsapplied[i].username===data){
                     
                       for(var j=0;j<items.length;j++){
                        console.log(items[j].id);
                           if(items[j].id===jobsapplied[i].job_id){
                               console.log(items[j].stipend);
                               var obj={
                                   'Jobid':items[j].id,
                                   'company':items[j].company,
                                   'position':items[j].position,
                                   'skills':items[j].skills,
                                   'location':items[j].location,
                                   'stipend':items[j].stipend,
                                   
                               }
                               jobsfinal.push(obj);
                           }
                           
                       }
                      
                   }
               }
               console.log(jobsfinal);
             
        return (
            <>
             <div><Nvabarsuser/></div>
            <div className="pops">
                 <h1 style={{color:"white",fontSize:"30px",textAlign:"center",background:"deeppink"}} >YOUR APPLICATIONS</h1>
                 <table>
    
    <tr>
<th style={{color:"white"}}>Job Id</th>  
<th style={{color:"white"}}>Company</th> 
<th style={{color:"white"}}>Position</th> 
<th style={{color:"white"}}>Skills</th>
<th style={{color:"white"}}>Location</th>
<th style={{color:"white"}}>Stipend</th>

</tr>
                 {jobsfinal.map(jobsfinals =>
                 <tr>
                  <td>{jobsfinals.Jobid}</td>
                  <td>{jobsfinals.company}</td>
                  <td>{jobsfinals.position}</td>
                  <td>{jobsfinals.skills}</td>
                  <td>{jobsfinals.location}</td>
                  <td>{jobsfinals.stipend}</td>
                  </tr>
                    )}
                    </table>
            </div>
        
        </>
        );
}}

export default Displayjobs;