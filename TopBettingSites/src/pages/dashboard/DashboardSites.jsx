import React from 'react'
import SideBar from './SideBar'
import image from '../../../public/logo.PNG';
import { MdDeleteForever } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";
import {FaStar} from "react-icons/fa";
import { Link } from 'react-router-dom';

const DashboardSites = () => {
    const sites = [
        {
          id: 1,
          img: image,
          categorie: "Sites",
          title: "Sites",
          desc: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
          bouns: "50",
          rate: 3,
          url: "https://www.sparkengdev.com"
        },
        {
          id: 2,
          img: image,
          categorie: "Bouns",
          title: "Bouns",
          desc: "lorem",
          bouns: "50",
          rate: 4.5,
          url: "https://www.sparkengdev.com"
        },
        {
          id: 3,
          img: image,
          categorie: "PayPal",
          title: "PayPal",
          desc: "lorem",
          bouns: "50",
          rate: 4.5,
          url: "https://www.sparkengdev.com"
        },
        {
            id: 4,
            img: image,
            categorie: "PaySafe",
            title: "PaySafe",
            desc: "lorem",
            bouns: "50",
            rate: 4.5,
            url: "https://www.sparkengdev.com"
          },
          {
            id: 5,
            img: image,
            categorie: "PaySafe",
            title: "PaySafe",
            desc: "lorem",
            bouns: "50",
            rate: 4.5,
            url: "https://www.sparkengdev.com"
          },
          {
            id: 6,
            img: image,
            categorie: "PaySafe",
            title: "PaySafe",
            desc: "lorem",
            bouns: "50",
            rate: 4.5,
            url: "https://www.sparkengdev.com"
          },
          {
            id: 7,
            img: image,
            categorie: "PaySafe",
            title: "PaySafe",
            desc: "lorem",
            bouns: "50",
            rate: 4.5,
            url: "https://www.sparkengdev.com"
          },
          {
            id: 8,
            img: image,
            categorie: "PaySafe",
            title: "PaySafe",
            desc: "lorem",
            bouns: "50",
            rate: 4.5,
            url: "https://www.sparkengdev.com"
          },
      ];


  return (
    <div className=' md:flex  gap-14 '>
        <SideBar />
        <div>
            <h1 className='items-center justify-center text-center text-3xl'>Welcome to Dashboard</h1>
            <div className='items-center justify-center text-center'>
                <h1 className='text-xl mb-4'>here you can view , add and delet Categories</h1>
                <Link to='/dashboard/sites/add' className='bg-[#009788] text-[#101B2D] border-0 px-6 py-1 font-semibold text-base rounded-md cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#00cc66] hover:text-white'
                    >Add Sites
                </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {sites.map((item,index) => (            
                    <div key={index} className="flex flex-col items-start  w-[350px] border rounded-lg shadow-md">
                        <div className='flex flex-row p-4 items-center justify-center w-full'>
                            <img src={item.img} alt={item.title} className="w-20 h-20 object-contain " />
                            <div className='flex flex-col flex-1 items-center'>
                                <h1 className="text-lg text-black font-bold">{item.title}</h1>
                                <p className="font-semibold text-[#ffd700] animate-pulse-scale">
                                    Bonus: {item.bouns} %
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
                            {item.url.startsWith('http') ? (
                                <a
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#009788] text-[#101B2D] border-0 px-6 py-1 font-semibold text-base rounded-md cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#00cc66] hover:text-white"
                                >
                                    Visit Site
                                </a>
                                ) : (
                                <Link
                                    to={item.url}
                                    className="bg-[#009788] text-[#101B2D] border-0 px-6 py-1 font-semibold text-base rounded-md cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#00cc66] hover:text-white"
                                >
                                    Visit Site
                                </Link>
                            )}
                        </div>
                        <p className='p-4 pt-0  w-full'>{item.desc}</p>
                        <div className='flex flex-row pt-0 p-4 text-2xl justify-center items-center text-center'>
                            <div>
                                <MdDeleteForever className="cursor-pointer text-red-500 hover:text-red-700 mx-8" />
                            </div>
                            <div>
                                <MdModeEditOutline className="cursor-pointer text-yellow-400 hover:text-yellow-600 mx-8" />
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    </div>
  )
}

export default DashboardSites