import React from 'react'
import SideBar from './SideBar'
import image from '../../../public/logo.PNG';
import { MdDeleteForever } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";

const DashboardSites = () => {
    const sites = [
        {
          id: 1,
          img: image,
          categorie: "Bouns",
          title: "seo",
          desc: "lorem",
          bouns: "50",
          url: "https://www.sparkengdev.com"
        },
        {
          id: 2,
          img: image,
          categorie: "PayPal",
          title: "seo",
          desc: "lorem",
          bouns: "50",
          url: "https://www.sparkengdev.com"
        },
        {
          id: 3,
          img: image,
          categorie: "PaySafe",
          title: "seo",
          desc: "lorem",
          bouns: "50",
          url: "https://www.sparkengdev.com"
        },
        {
            id: 4,
            img: image,
            categorie: "PaySafe",
            title: "seo",
            desc: "lorem",
            bouns: "50",
            url: "https://www.sparkengdev.com"
          },
      ];


  return (
    <div className=' md:flex  gap-14 '>
        <SideBar />
        <div>
            <h1 className='items-center justify-center text-center text-3xl'>Welcome to Dashboard</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
                {sites.map((item,index) => (
                    <div key={index} className="flex flex-col items-center justify-center p-4 m-4 w-60 border rounded-lg shadow-md">
                        <img src={item.img} alt={item.title} className="w-32 h-32 object-contain" />
                        <h1 className="text-lg text-black font-bold">{item.title}</h1>
                        <p>{item.desc}</p>
                        <p className="font-semibold text-[#ffd700] animate-pulse-scale">
                            Bonus: {item.bouns} %
                        </p>
                        {item.url.startsWith('http') ? (
                            <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#009788] text-[#101B2D] border-0 px-6 py-1 font-semibold text-base rounded-md cursor-pointer my-5 mx-auto block transition-colors duration-300 ease-in-out
                                        hover:bg-[#00cc66] hover:text-white"
                            >
                                Visit Site
                            </a>
                            ) : (
                            <Link
                                to={item.url}
                                className="bg-[#00FF88] text-[#101B2D] border-0 px-6 py-1 font-semibold text-base rounded-md cursor-pointer my-5 mx-auto block transition-colors duration-300 ease-in-out
                                        hover:bg-[#00cc66] hover:text-white"
                            >
                                Visit Site
                            </Link>
                        )}
                        <div className='flex'>
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