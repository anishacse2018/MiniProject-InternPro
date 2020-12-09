import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from "react-icons/io";

export const SideBardatauser=[
    {
        title:'Home',
        path: '/Home',
        icon: <AiIcons.AiFillHome/>,
        cName:'nav-text'
    },
    {
        title:'Resume Builder',
        path: '/Resume',
        icon: <IoIcons.IoIosPaper/>,
        cName:'nav-text'
    },
    {
        title:'Apply a job',
        path: '/Resttrys',
        icon: <IoIcons.IoIosPaper/>,
        cName:'nav-text'
    },
    {
        title:'Internships Dashboard',
        path: '/Displayjobs',
        icon: <FaIcons.FaCartPlus/>,
        cName:'nav-text'
    },
    /*{
        title:'Team',
        path: '/homes',
        icon: <IoIcons.IoMdPeople/>,
        cName:'nav-text'
    },*/
    {
        title:'Messages',
        path: '/Users',
        icon: <FaIcons.FaEnvelopeOpenText/>,
        cName:'nav-text'
    },
    
]