
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
app.use(bodyParser.json());
app.post('/api/insert',(req,res)=>{
    const company=req.body.company;
    const position=req.body.position;
   // const languages=req.body.languages;
    const location=req.body.location;
    const role=req.body.role;
    const stipend=req.body.stipend;
    const skills=req.body.skills;
    const sqlInsert="INSERT INTO jobtable(company,position,location,role,stipend,skills) VALUES(?,?,?,?,?,?)"
    db.query(sqlInsert,[company,position,location,role,stipend,skills],(err,result)=>{
console.log(err);
    })
});
app.delete("/delete/:id",(req,res)=>{
    const id=req.params.id;
    console.log(req.params.id);
    db.query("DELETE FROM jobtable WHERE id=?",id,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
})
app.post('/api/inser',(req,res)=>{
    const userName=req.body.username;
    const passWord=req.body.password;
    const firstName=req.body.firstname;
    const eMail=req.body.email;
    const logged=req.body.logged;
    const company=req.body.company;
    const sqlInsert="INSERT INTO registertable(firstname,email,username,password,logged,company) VALUES(?,?,?,?,?,?)"
    db.query(sqlInsert,[firstName,eMail,userName,passWord,logged,company],(err,result)=>{
console.log(err);
    })
    
});

app.post('/api/validate',(req,res)=>{
    const sqlInsert="SELECT logged FROM registertable WHERE username = ? AND password = ?";
    const userName=req.body.username;
    const passWord=req.body.password;
    if (userName && passWord){
        db.query(sqlInsert,[userName,passWord],(err,result,fields)=>{
            if(result.length>0)
            {
              console.log("Logged in successfully"); 
             // db.query("SELECT logged FROM registertable WHERE username=userName AND password=passWord",[userName,passWord],(err,result,fields)=>{
              console.log(result);
              result=JSON.stringify(result);
              return res.send(result[12]);
            
            }
            else{
                console.log("Login failed. Pls try again");
                return res.send("Invalid");
            }
        })  
    }});
    app.get("/adduserapply/",(req,res)=>{
        const id=req.query.id;
        const data=req.query.data;
        //console.log(req.query);
        //console.log(req.query.id);
        //console.log(req.query.data);
        const sqlInsert="INSERT INTO appliedusers(user_name,job_id) VALUES(?,?)";
        db.query(sqlInsert,[data,id],(err,result)=>{
            if(err){
                console.log(err);
            }else{
                res.send(result);
            }
        })
    })
//addition
   /* app.get("/rectable/:data",(req,res)=>{
        const data=req.params.data;
        //console.log(req.query);
        //console.log(req.query.id);
        //console.log(req.query.data);
        const sqlInsert="INSERT INTO appliedrec(user_name,job_id) VALUES(?,?)";
        db.query(sqlInsert,[data,id],(err,result)=>{
            if(err){
                console.log(err);
            }else{
                res.send(result);
            }
        })
    })*/
app.listen(3009,()=>{
    console.log("running on port 3001");
}

);