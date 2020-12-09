const express=require("express");
const bodyParser=require("body-parser");
const cors=require("cors");
const app=express();
const mysql=require("mysql");

const db=mysql.createPool({
host:"localhost",
user:"root",
password:"",
database:"internprodb",
});
app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.post('/api/insert',(req,res)=>{
    const userName=req.body.username;
    const passWord=req.body.password;
    const firstName=req.body.firstname;
    const eMail=req.body.email;
    const sqlInsert="INSERT INTO registertable(firstname,email,username,password) VALUES(?,?,?,?)"
    db.query(sqlInsert,[firstName,eMail,userName,passWord],(err,result)=>{
console.log(err);
    })
});
app.listen(3003,()=>{
    console.log("running on port 3001");
}

);
/*const{
    createPool
}=require('mysql');
const pool=createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"internprodb",
})
pool.query(`SELECT * FROM logintable`,(err,result,fields)=>{
    if(err)
    {
        return console.log(err);
    }
    return console.log(result);
})*/
