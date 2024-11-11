import React, { useEffect, useState } from 'react'
import { FaMoneyBill,FaRegClock } from "react-icons/fa";
import { FaArrowRightArrowLeft} from "react-icons/fa6";
import { MdDashboard,MdStackedBarChart,MdHelpOutline,MdOutlineKeyboardArrowRight } from "react-icons/md";
import { motion } from "framer-motion"


const Header = () => {
    const allnavlinks=[
        {
            icon:<MdDashboard />,
            name:"Dashboard"
        },
        {
            icon:<FaRegClock />,
            name:"Activity"
        },
        {
            icon:<MdStackedBarChart/>,
            name:"Analytics"
        },
        {
            icon:<FaArrowRightArrowLeft/>,
            name:"Transactions"
        },
        {
            icon:<MdHelpOutline/>,
            name:"Help Center"
        },
    ]

    const [activenavbar,setActivenavbar]=useState(0);

   const variants={
    expanded:{width:"24%"},
    nonexpanded:{width:"9%"}
   }
  const [isExpanded,SetisExpanded]=useState(true);
  return (
    <motion.div 
    animate={isExpanded ? "expanded" : "nonexpanded"}
    variants={variants}
    className='border border-r-1 w-1/4 h-screen flex flex-col px-10 py-12 relative'>
        <div className='flex items-center space-x-3'>
            <FaMoneyBill className='text-4xl'/>
            <span className={isExpanded ? "block" : "hidden"}>Money Tracker</span>
        </div>
        <div onClick={() =>SetisExpanded(!isExpanded)} className=' cursor-pointer w-5 h-5 bg-black rounded-full absolute right-[-10px] top-[55px] flex items-center justify-center'>
        <MdOutlineKeyboardArrowRight className='text-white'/>

        </div>
        <div className='mt-10 space-y-6'>
            {allnavlinks.map((item,index) =>(
                <div key={index} className={`flex space-x-2 items-center p-2 rounded cursor-pointer
                ${activenavbar === index ? "bg-black text-white" : " "}`}
                
                onClick={() => setActivenavbar(index)}
                > 
                   <span>{item.icon}</span>
                   <span className={isExpanded ? "block" : "hidden"}>{item.name}</span>
                </div>
            ))}
        </div>
    </motion.div>
  )
}

export default Header