import React,{useState,useEffect, Component} from 'react';
import data from './data.json';
import JobBoard from "./JobBoard.js";
function CallJobs(){
        console.log(data);
    const[jobs,setJobs]=useState([]);
    useEffect(()=>{
       setJobs(data);
    },[]);
    return(
        <>
        {
    jobs.length==0?(
          <p>Jobs are being fetched..</p>
        ):(
          jobs.map(job=>( <JobBoard job={job} key={job.id}/>))
        )
}
        </>
);

}
export default CallJobs;