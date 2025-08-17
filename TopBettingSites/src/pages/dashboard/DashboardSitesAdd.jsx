import React from 'react'
import SideBar from './SideBar'
import { Link } from 'react-router-dom';


const DashboardSitesAdd = () => {

    const Categories = [
        { id: 1, name: "Sites" },
        { id: 2, name: "Bouns" },
        { id: 3, name: "PayPal" },
        { id: 4, name: "PaySafe" },
        { id: 5, name: "New sites" },
      ];
    
  return (
    <div className=' md:flex  gap-14 mb-8'>
      <SideBar />
      <div>
        <h1 className='items-center justify-center text-center text-3xl'>Welcome to Dashboard</h1>
          <div className='items-center justify-center text-center'>
              <h1 className='text-xl mb-4'>here you add Sites</h1>
              <form className='mb-8'>
                <div className="flex flex-col mb-1 mr-4 px-4 ">
                  <label className="font-extrabold text-xl">Site Name</label>
                  <textarea  placeholder="Categorie Name" className="mr-3 w-full pl-3 border border-[#E9EAEC] rounded-lg dm"></textarea>
                </div>
                <div className="flex flex-col mb-1 mr-4 px-4 ">
                  <label className="font-extrabold text-xl">Site Description</label>
                  <textarea  placeholder="Site Description" className="mr-3 w-full pl-3 border border-[#E9EAEC] rounded-lg dm"></textarea>
                </div>
                <div className="flex flex-col mb-1 mr-4 px-4 ">
                  <label className="font-extrabold text-xl">Site Link</label>
                  <textarea  placeholder="Site Link" className="mr-3 w-full pl-3 border border-[#E9EAEC] rounded-lg dm"></textarea>
                </div>
                <div className="flex flex-col mb-1 mr-4 px-4 ">
                  <label className="font-extrabold text-xl">Site Rate</label>
                  <input
                    type="number"
                    min="1"
                    max="5"
                    step="1"
                    placeholder="Site Rate"
                    className="mr-3 w-full pl-3 border border-[#E9EAEC] rounded-lg dm"
                  />
                </div>      
                <div className="flex flex-col mb-1 mr-4 px-4 ">
                  <label className="font-extrabold text-xl">Site Order</label>
                  <input
                    type="number"
                    step="1"
                    placeholder="Site Order"
                    className="mr-3 w-full pl-3 border border-[#E9EAEC] rounded-lg dm"
                  />
                </div>     
                <div className="flex flex-col mb-1 mr-4 px-4 ">
                  <label className="font-extrabold text-xl">Site Bouns</label>
                  <input
                    type="number"
                    step="1"
                    placeholder="Site Bouns"
                    className="mr-3 w-full pl-3 border border-[#E9EAEC] rounded-lg dm"
                  />
                </div>   
                <div className="flex flex-col  mb-1 mr-4 px-4 ">
                  <label className="font-extrabold mb-2 text-xl">Site Categories</label>
                  <div className='flex flex-row flex-wrap gap-2'>
                    {Categories.map((item,index) => (
                        <button key={index} className='bg-[#009788] text-[#101B2D] border-0 mx-2 px-4 py-1 font-semibold text-base rounded-md cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#00cc66] hover:text-white'>
                            {item.name}
                        </button>        
                    ))}
                  </div>
                </div>      

              </form>

              <Link to="/dashboard/sites/add/photo" className='bg-[#009788] text-[#101B2D] border-0 px-6 py-1 font-semibold text-base rounded-md cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#00cc66] hover:text-white'
                >Next to add photo
              </Link>
          </div>
      </div>
    </div>
  )
}

export default DashboardSitesAdd