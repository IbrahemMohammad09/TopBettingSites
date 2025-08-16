import React from 'react'
import SideBar from './SideBar'
import { MdDeleteForever } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";

const DashboardHome = () => {

    const Categories = [
        { id: 1, name: "All" },
        { id: 2, name: "Bouns" },
        { id: 3, name: "PayPal" },
        { id: 4, name: "PaySafe" },
        { id: 5, name: "New sites" },
      ];
    
  return (
    <div className=' md:flex  gap-14 '>
        <SideBar />
        <div className=''>
            <h1 className='items-center justify-center text-center text-3xl'>Welcome to Dashboard</h1>
            <div className='flex flex-col'>
                {Categories.map((item,index) => (
                    <div key={index} className="flex flex-row mt-8 bg-gray-700 m-4 p-4 items-center justify-between">
                        <h1 className="text-white font-bold">{item.name}</h1>
                        <div className="flex space-x-4">
                        <MdDeleteForever className="cursor-pointer text-red-500 hover:text-red-700" />
                        <MdModeEditOutline className="cursor-pointer text-yellow-400 hover:text-yellow-600" />
                        </div>
                    </div>
                  
                ))}
            </div>
        </div>
    </div>
  )
}

export default DashboardHome