import { SettingsRemoteSharp } from '@material-ui/icons';
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
            /*if(document. getElementById('clickmon').onclick== false)
            {
            alert("Pls Apply Before Submit");
            }*/
            //var r=document.getElementById('clickmon').clicked;
            //console.log(r);
            
             let data=localStorage.getItem('Data');
             console.log(data);
             if(data==null)
             {
                 alert("Pls Login to Submit ur Application");
             }
             else{
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

            axios.get('http://localhost:3009/adduserapply/',request).then((response)=>{
                window.location.reload(false);
            }
            )
          }}
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
                        <td><a href={"https://forms.gle/Z8TdWAGwHJh7Rcqy8"} target="_blank"><button style={{marginLeft:"20px"}} >Apply</button></a></td>
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

export default Resttrys;