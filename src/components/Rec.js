import React, { Component, useState } from "react";
import axios from "axios";
import './Rec.css';
import Navbars from './Navbars';
const Rec=()=>{
    const [company,setCompany]=useState("");
    const[position,setPosition]=useState("");
    //const[languages,setLanguages]=useState("");
    const[location,setLocation]=useState("");
    const[role,setRole]=useState("");
    const[stipend,setStipend]=useState("");
    const[skills,setSkills]=useState("");
    const submit=()=>{
        let data=localStorage.getItem('myData');
        if(data==null)
        {
            alert("Pls Login to add a job");
        }
        else{
           axios.post("http://localhost:3009/api/insert",
           {company:company,position:position,
        location:location,role:role,stipend:stipend,skills:skills
        
        });
    }
             /*var params = new URLSearchParams();
         params.append("data", data);
         var request = {
            params: params
          };
          axios.get(`http://localhost:3009/rectable/${data}`,request).then((response)=>{
              window.location.reload(false);
          })*/
    };
    return(
       <>
       <div><Navbars/></div>
           <div id="fsyn">
          <h1 style={{margin:"0px",color:"white",background:"deeppink",fontSize:"30px",alignSelf:"center",textAlign:"center"}}>ADD A JOB</h1>
       <form id="to-do-form">
     <label style={{color:"white",marginLeft:"50px",fontSize:"25px"}}>Company:</label>
<input type="text" name="company"  placeholder="Enter company Name:"onChange={(e)=>{
       setCompany(e.target.value);
}}
/><br></br>
<label style={{color:"white",marginLeft:"50px",fontSize:"25px"}}>Position:</label>
<input type="text" name="position" placeholder="Enter Position:" onChange={(e)=>{
       setPosition(e.target.value);
}}/><br></br>
<label style={{color:"white",marginLeft:"50px",fontSize:"25px"}}>Skills:   </label>
<input type="text" name="languages" placeholder="Enter Skills Required:" onChange={(e)=>{
       setSkills(e.target.value);
}}
/>
<br></br>
<label style={{color:"white",marginLeft:"50px",fontSize:"25px"}}>Location:</label>
<input type="text" name="location" placeholder="Enter Job Location:" onChange={(e)=>{
       setLocation(e.target.value);
}}
/><br></br>
<label style={{color:"white",marginLeft:"50px",fontSize:"25px"}}>Role:</label>
<input type="text" name="role" placeholder="Enter Role:" onChange={(e)=>{
       setRole(e.target.value);
}}
/><br></br>
<label style={{color:"white",marginLeft:"50px",fontSize:"25px"}}>Stipend:</label>
<input type="text" name="stipend" placeholder="Enter Stipend:" onChange={(e)=>{
       setStipend(e.target.value);
}}
/><br></br>
<br></br>
<button onClick={submit}>ADD</button>
<br></br>
</form>
   </div>
   </>
    )
    
}
export default Rec;

/*import { SettingsRemoteSharp } from '@material-ui/icons';
import axios from 'axios';
import React, { Component } from 'react';
import {Table} from 'reactstrap';
import './Resttry.css';
import Nvabarsuser from './Nvabarsuser';
class Resttrys extends Component {
    constructor(props){
        super(props);
        this.state = {
            items : []
        };

        // You should bind this object to componentWillMount method, other setState was not working
        this.componentWillMount = this.componentWillMount.bind(this);
    }


    // This method is call before component will mounted
    componentWillMount() {
        fetch('http://localhost/jsonfile.php')
            .then(res => res.json())
            .then( data => this.setState({ items : data }) );
    }
  
   
    render() {

       const { items } = this.state;
          console.log(items);
         const applyJob=(id)=>{
             let data=localStorage.getItem('Data');
             console.log(data);
             var params = new URLSearchParams();
             params.append("id", id);
         params.append("data", data);
         var request = {
            params: params
          };
          /*let params={foo:[id,data]}
          let myAxios=axios.create({
              paramsSerializer:params=>Qs.stringify
          })*/

         /* axios.get('http://localhost:3009/adduserapply/',request).then((response)=>{
              window.location.reload(false);
          }
          )
        }
      return (
          <>
          <div><Nvabarsuser/></div>
          <div className="pops">
               <h1 style={{color:"white",fontSize:"30px",textAlign:"center",background:"deeppink"}} >DASHBOARD</h1>
<table>
  
       <tr>
<th style={{color:"white"}}>Company </th>  
<th style={{color:"white"}}>Position </th> 
<th style={{color:"white"}}>Skills</th>
<th style={{color:"white"}}>Location</th>
<th style={{color:"white"}}>Role</th>
<th style={{color:"white"}}>Stipend</th>
<th style={{color:"white"}}>Apply</th>
<th style={{color:"white"}}>Confirm Submission</th>
</tr>
              {items.map(item =>
                  <tr>
                  <td>{item.company}</td>  
                  <td>{item.position}</td> 
                   <td>{item.skills}</td>
                    <td>{item.location}</td>
                     <td>{item.role}</td>
                      <td>{item.stipend}</td>
                      <td><button style={{marginLeft:"20px"}} onClick={()=>{
                         applyJob(item.id);
                     }}>Apply</button></td>
                     <td><button style={{marginLeft:"20px"}}onClick={()=>{
                         applyJob(item.id);
                     }}>Submit</button></td>
                      </tr>
             
              )}

          
          </table>
          </div>
          </>
      );
      
  }
}

export default Resttrys;*/