import React from "react";
import "./Home.css";
import Nvabarsuser from "./Nvabarsuser";
const Home=()=>{
    return(
        <>
        <div><Nvabarsuser/></div>
        <div className='display'>
        <img src="https://th.bing.com/th/id/OIP.gWFuS2dhMJDnF4DO4PBg0AHaFj?w=215&h=180&c=7&o=5&dpr=1.25&pid=1.7" width="100%" height="50%"/>
        <div class="centered">
            <h1>WELCOME TO INTERNPRO</h1>
            <p id="siz">The only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle. As with all matters of the heart, you’ll know when you find it.” -Steve Jobs, founder, Apple.
           </p>
           <button style={{marginLeft:"500px"}}><a href="https://bot.dialogflow.com/5934f418-0296-4f7e-b1a0-ac19144897d4" target="_blank">Chat</a></button>
            </div>
           
            </div>
            </>
    )
    ;
};
export default Home;