import React, { useEffect, useState } from 'react'
import SideBar from './SideBar'
import { MdDeleteForever } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";
import { Link } from 'react-router-dom';
import { Api } from '../../constant/api';
import axios from 'axios';

const DashboardHome = () => {
    const [Categories ,setCategories] = useState ([])
    const fetchData = async () => {

        try{
            const respone = await axios.get(Api.GET().CATEGORIES);
            setCategories(respone.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect (() => {
        fetchData ();
    },[])

    const deleteCat = async (id, name) => {
        const confirmDelete = window.confirm(`Are you sure you want to delete this Category ${name}?`);
        if (confirmDelete) {
            try {
                await axios.delete(`https://www.betbonus24.com/api/admin/categories/${id}/`);
                fetchData();
            } catch (error) {
                console.log(error);
            }
        }
    };

    
  return (
    <div className=' md:flex  gap-14 '>
        <SideBar />
        <div className=''>
            <h1 className='items-center justify-center text-center text-3xl'>Welcome to Dashboard</h1>
            <div className='items-center justify-center text-center'>
                <h1 className='text-xl mb-4'>here you can view , add and delet Categories</h1>
                <Link to='/dashboard/categories/add' className='bg-[#009788] text-[#101B2D] border-0 px-6 py-1 font-semibold text-base rounded-md cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#00cc66] hover:text-white'
                    >Add Categories
                </Link>
            </div>
            <div className='flex flex-col'>
                {Categories.map((item,index) => (
                    <div key={index} className="flex flex-row mt-8 bg-gray-700 m-4 p-4 items-center justify-between">
                        <h1 className="text-white font-bold">{item.name}</h1>
                        <div className="flex space-x-4">
                            <button onClick={()=>{deleteCat(item.id , item.name)}}><MdDeleteForever className="cursor-pointer text-red-500 hover:text-red-700" /></button>
                            <Link to={`/dashboard/categories/edit/${item.id}`}><MdModeEditOutline className="cursor-pointer text-yellow-400 hover:text-yellow-600" /></Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default DashboardHome