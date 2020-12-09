import React, { Component } from 'react';
import { database } from './Fire';
import './Chat.css';
export default class Chat extends Component {
    constructor() {
      super();
  
      this.state = {
        messages: [],
        username: ''
      };
  
      this.onAddMessage = this.onAddMessage.bind(this);
    }
  
    componentWillMount() {
      const username = localStorage.getItem('chat_username');
      this.setState({username: username ? username : 'Unknown'})
      const messagesRef = database.ref('messages')
        .orderByKey()
        .limitToLast(100);
  
      messagesRef.on('value', snapshot => {
       
        let messagesObj = snapshot.val();
        let messages = [];
        if(messagesObj)
        {
        Object.keys(messagesObj).forEach(key =>  messages.push(messagesObj[key]));
        messages = messages.map((message) => { return {text: message.text, user: message.user, id: message.key}})
        this.setState(prevState => ({
          messages: messages,
        }));}
        
      });
    }
  
    onAddMessage(event) {
      event.preventDefault();
      database.ref('messages').push({text: this.input.value, user: this.state.username});
      this.input.value = '';
    }
  
    render() {
      return (
        <div>
          <div>
          <h1 style={{color:"white",fontSize:"30px",textAlign:"center",background:"deeppink"}} >CHAT MESSAGES</h1>             
              {this.state.messages.map((message) => {
               const _class = message.user === this.state.username ? 'message-left container' : 'message-right container';
              return (
                  <div className="con">
                    <h6 className="name-heading">{message.user}</h6>
                    <p className="marg-left-10">{message.text}</p>
                    <span className="time-left"></span>
                  </div>
              )
              })}
          </div>
        <div className="container textarea-div">
          <textarea id="p" ref={node => this.input = node} rows="5" columns="1000"></textarea>
          <button onClick={this.onAddMessage} style={{marginLeft:"1100px"}}>Send</button>
        </div>
      </div>
      );
    }
  }