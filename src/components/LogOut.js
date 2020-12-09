import {React,Component} from 'react'
import Home from './Home';
class LogOut extends Component{
    render(){
        localStorage.clear();
    return (
        <div>
          <Home/>
        </div>
    )
}
}
export default LogOut;
