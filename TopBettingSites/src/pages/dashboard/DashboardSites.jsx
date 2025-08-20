import React, { useEffect, useState } from 'react'
import SideBar from './SideBar'
import { MdDeleteForever } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";
import {FaStar} from "react-icons/fa";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Api } from '../../constant/api';

const DashboardSites = () => {
    const [sites , setSites] = useState([])

    const fetchData = async () =>{
        try {
            const response = await axios.get(Api.GET().Sites)
            setSites(response.data)
        } catch (error) {
            
        }
    }

    useEffect (()=>{
        fetchData();
    },[])

    const deleteSite = async (id, name) => {
        const confirmDelete = window.confirm(`هل انت متأكد من أنك تريد حذف هذا الموقع ${name}`);
        if (confirmDelete) {
            try {
                await axios.delete(`https://www.betbonus24.com/api/admin/sites/${id}/`);
                fetchData();
            } catch (error) {
                console.log(error);
            }
        }
    };

  return (
    <div className=' md:flex  gap-14 '>
        <SideBar />
        <div>
            <h1 className='items-center justify-center text-center text-3xl'>اهلا بك في لوحة التحكم</h1>
            <div className='items-center justify-center text-center'>
                <h1 className='text-xl mb-4'>هنا يمكنك اضافة ,تعديل وحذف المواقع</h1>
                <Link to='/dashboard/sites/add' className='bg-[#009788] text-[#101B2D] border-0 px-6 py-1 font-semibold text-base rounded-md cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#00cc66] hover:text-white'
                    >اضافة موقع
                </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {sites.map((item,index) => (            
                    <div key={index} className="flex flex-col items-start  w-[350px] border rounded-lg shadow-md">
                        <div className='flex flex-row p-4 items-center justify-center w-full'>
                            <img src={item.logo_url} alt={item.name} className="w-20 h-20 object-contain " />
                            <div className='flex flex-col flex-1 items-center'>
                                <h1 className="text-sm text-black font-bold">{item.name}</h1>
                                <p className="font-semibold text-[#ffd700] animate-pulse-scale">
                                    Bonus: {item.bonus} %
                                </p>
                                <div className="flex justify-center text-xl p-2">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                    <FaStar
                                        key={i}
                                        className={
                                        i < item.rate
                                            ? "text-[#F6973F]"
                                            : "text-[#F6973F] opacity-30"
                                        }
                                    />
                                    ))}
                                </div>
                            </div>

                            {/* If you want external links, use <a> instead of <Link> */}
                            {item.link.startsWith('http') ? (
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#009788] text-[#101B2D] border-0 px-6 py-1 font-semibold text-base rounded-md cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#00cc66] hover:text-white"
                                >
                                    Visit Site
                                </a>
                                ) : (
                                <Link
                                    to={item.link}
                                    className="bg-[#009788] text-[#101B2D] border-0 px-6 py-1 font-semibold text-base rounded-md cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#00cc66] hover:text-white"
                                >
                                    Visit Site
                                </Link>
                            )}
                        </div>
                        {/* <p className='p-4 pt-0 text-lg text-black w-full'>{"اسم الفئة : "+item.category.name}</p> */}
                        <div className="p-4 pt-0 text-lg text-black w-full">
                            <p>الفئات :</p>
                            <ul className="list-disc list-inside">
                                {item.categories.map(cat => (
                                <li key={cat.id}>{cat.name} (ترتيب: {cat.order})</li>
                                ))}
                            </ul>
                        </div>

                        {/* <p className='p-4 pt-0 text-lg text-black w-full'>{"ترتيب العرض : "+item.order}</p> */}
                        <p className='p-4 pt-0  w-full'>{item.link}</p>
                        <p className='p-4 pt-0  w-full'>{item.text}</p>
                        
                        <div className='flex flex-row pt-0 p-4 text-2xl justify-center items-center text-center'>
                            <button onClick={()=>{deleteSite(item.id, item.name)}}>
                                <MdDeleteForever className="cursor-pointer text-red-500 hover:text-red-700 mx-8" />
                            </button>
                            <Link to={`/dashboard/sites/edit/${item.id}`}>
                                <MdModeEditOutline className="cursor-pointer text-yellow-400 hover:text-yellow-600 mx-8" />
                            </Link>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    </div>
  )
}

export default DashboardSites