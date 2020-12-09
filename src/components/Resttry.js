import { Call, SettingsRemoteSharp } from '@material-ui/icons';
import axios from 'axios';
import React, { Component } from 'react';
import {Table} from 'reactstrap';
import './Resttry.css';
import Nvabarsuser from './Nvabarsuser';
import Navbars from './Navbars';
class Resttry extends Component {
    constructor(props){
        super(props);
        this.state = {
            items : [],
            jobskept:[],
            registered:[]
        };

        // You should bind this object to componentWillMount method, other setState was not working
        this.componentWillMount = this.componentWillMount.bind(this);
    }


    // This method is call before component will mounted
    componentWillMount() {
        fetch('http://localhost/jsonfile.php')
            .then(res => res.json())
            .then( data => this.setState({ items : data }) );
            fetch('http://localhost/register.php')
            .then(res => res.json())
            .then( data => this.setState({ registered : data }) );
           /* fetch('http://localhost/rectable.php')
            .then(res => res.json())
            .then( data => this.setState({ jobskept : data }) );*/
    }
    
    render() {
        const { items } = this.state;
        const {jobskept}=this.state;
        const {registered}=this.state;
            
            var result="";
              let data=localStorage.getItem('myData');
               console.log(data);
               for(var i=0;i<registered.length;i++){
                   if(registered[i].username===data){
                       result=registered[i].company;
                   }
               }

               var finallist=[];       
                       for(var j=0;j<items.length;j++){
                           if(items[j].company===result){
                               console.log(items[j].stipend);
                               var obj={
                                   'Jobid':items[j].id,
                                   'company':items[j].company,
                                   'position':items[j].position,
                                   'skills':items[j].skills,
                                   'location':items[j].location,
                                   'stipend':items[j].stipend,
                                   
                               }
                               finallist.push(obj);
                           }
                           
                       }
                       const deleteJob=(id)=>{
                        

                           var answer = window.confirm("do you want to delete?")
                         if (answer){
                             //document.getElementByID("hdnValue").value='true';
                             axios.delete(`http://localhost:3009/delete/${id}`).then((response)=>{
                                window.location.reload(false);
                               
                            })
                            }
   
                        
                    }
             
        return (
            <>
             <div><Navbars/></div>
            <div className="pops">
                 <h1 style={{color:"white",fontSize:"30px",textAlign:"center",background:"deeppink"}} >DASHBOARD</h1>
                 <table>
    
    <tr>
<th style={{color:"white"}}>Job Id</th>  
<th style={{color:"white"}}>Company</th> 
<th style={{color:"white"}}>Position</th> 
<th style={{color:"white"}}>Skills</th>
<th style={{color:"white"}}>Location</th>
<th style={{color:"white"}}>Stipend</th>
<th style={{color:"white"}}>Actions</th>
</tr>
                 {finallist.map(finals =>
                 <tr>
                  <td>{finals.Jobid}</td>
                  <td>{finals.company}</td>
                  <td>{finals.position}</td>
                  <td>{finals.skills}</td>
                  <td>{finals.location}</td>
                  <td>{finals.stipend}</td>
                  <td><button onClick={()=>{
                           deleteJob(finals.Jobid);
                       }}>Remove</button></td>
                  </tr>
                    )}
                    </table>
            </div>
        
        </>
        );
}}

export default Resttry;
