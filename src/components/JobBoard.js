import { Language } from '@material-ui/icons';
import React,{useState,useEffect} from 'react';
import data from './data.json';
const JobBoard=({job})=>{
   const tags=[job.role,job.level];
  if(job.languages)
   {
       tags.push(...job.languages);
   }    
   if(job.tools){
       tags.push(...job.tools);
   }
   
   return(
       
<div className={`flex bg-white shadow-md m-4 p-6 rounded
${
   job.featured && 'border-l-4 border-teal-500 border-solid'
}`}>
    <div>
        <img src={job.logo} alt={job.company}/>
        </div>
        <div className='flex flex-col justify-between ml-4'>
<h3 className='font-bold text-teal-500'>{job.company}
{job.new && (<span className='bg-teal-500 text-teal-100 font-bold m-2 py-1 px-2 rounded-full'>New</span>)}
{job.featured && (<span className='bg-gray-800 text-white font-bold py-1 px-2 rounded-full'>Featured</span>)}
</h3>
<h2 className='font-bold text-xl'>{job.position}</h2>
<p className='text-gray-700'>
    {job.postedAt}.{job.contract}.{job.location}
</p>
</div>
       <div className='flex items-center ml-auto'>
    {tags?tags.map((tag)=>(<span className=
    'text-teal-500 bg-teal-100 font-bold m-2 p-2 rounded'>{tag}</span>)):''}
    </div>
    </div>
    )
};
export default JobBoard;