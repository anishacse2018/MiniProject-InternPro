import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from "react-icons/io";

export const SideBardata=[
    {
        title:'Home',
        path: '/Homes',
        icon: <AiIcons.AiFillHome/>,
        cName:'nav-text'
    },
    {
        title:'Add a job',
        path: '/Rec',
        icon: <IoIcons.IoIosPaper/>,
        cName:'nav-text'
    },
    {
        title:'Internships Dashboard',
        path: '/Resttry',
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
        path: '/User',
        icon: <FaIcons.FaEnvelopeOpenText/>,
        cName:'nav-text'
    },
    
]