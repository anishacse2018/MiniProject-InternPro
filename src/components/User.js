import React, { Component } from 'react';
import  {database} from './Fire';
import Navbars from './Navbars';
import './User.css';
export default class User extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      username: ''
    };
  }

  componentWillMount() {
    const userRef = database.ref('users')
      .orderByKey()
      .limitToLast(100);

    userRef.once('value', snapshot => {
      const users = [snapshot.val()];
      this.setState({users: users});
    });
  }

  onNameChange(e) {
    this.setState({username: e.target.value})
  }

  onAddClick(e) {
    e.preventDefault();
    database.ref('users').push({username: this.state.username});
    localStorage.setItem('chat_username', this.state.username);
    this.props.history.push('/chat');
  }

  render() {
    return(
      <>
      <div><Navbars/></div>
    <div className="contain">
     <h1 style={{color:"white",fontSize:"30px",textAlign:"center",background:"deeppink"}} >CHAT</h1>    
        <label style={{color:"white",marginLeft:"20px"}} >Username: </label>
        <input className="form-control input-sm" type="text"  onChange={this.onNameChange.bind(this)}/>
        <button className="btn btn-info" onClick={this.onAddClick.bind(this)}>Add</button>
    </div>
    </>
    );
  }
}
