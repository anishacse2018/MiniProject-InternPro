import {React,Component} from 'react'
import Homes from './Homes';
class LogOutrec extends Component{
    render(){
        localStorage.clear();
    return (
        <div>
          <Homes/>
        </div>
    )
}
}
export default LogOutrec;
