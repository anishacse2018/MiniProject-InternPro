
/*const express=require("express");
const bodyParser=require("body-parser");
const cors=require("cors");
const app=express();
const mysql=require("mysql");
const { response } = require("express");

const db=mysql.createConnection({
host:"localhost",
user:"root",
password:"",
database:"internprodb",
});
app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
app.post('/api/validate',(req,res)=>{
    const sqlInsert="SELECT * FROM registertable WHERE username = ? AND password = ?"
    const userName=req.body.username;
    const passWord=req.body.password;
    if (userName && passWord){
        db.query(sqlInsert,[userName,passWord],(err,result,fields)=>{
            if(result.length>0)
            {
              console.log("Logged in successfully"); 
            }
            else{
                console.log("Login failed. Pls try again");
            }
})  
}});
app.listen(3009,()=>{
    console.log("running on port 3001");
}

);*/
