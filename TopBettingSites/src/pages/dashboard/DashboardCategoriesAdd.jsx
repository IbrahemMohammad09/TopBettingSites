import React from 'react'
import SideBar from './SideBar'
import { Link } from 'react-router-dom';

const DashboardCategoriesAdd = () => {
  return (
    <div className=' md:flex  gap-14 '>
      <SideBar />
      <div>
        <h1 className='items-center justify-center text-center text-3xl'>Welcome to Dashboard</h1>
          <div className='items-center justify-center text-center'>
              <h1 className='text-xl mb-4'>here you add Categories</h1>
              <form>
                <div className="flex flex-col mb-7 mr-4 px-4 ">
                  <label className="font-extrabold text-xl">Categorie Name</label>
                  <textarea  placeholder="Categorie Name" className="mr-3 w-full pl-3 border border-[#E9EAEC] rounded-lg dm"></textarea>
                </div>
                <div className="flex flex-col mb-7 mr-4 px-4 ">
                  <label className="font-extrabold text-xl">Categorie Order</label>
                  <input
                    type="number"
                    // min="1"
                    // max="10"
                    step="1"
                    placeholder="Categorie Order"
                    className="mr-3 w-full pl-3 border border-[#E9EAEC] rounded-lg dm"
                  />
                </div>
              </form>
              <button className='bg-[#009788] text-[#101B2D] border-0 px-6 py-1 font-semibold text-base rounded-md cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#00cc66] hover:text-white'
                >Add Categories
              </button>
          </div>
      </div>
    </div>
  )
}

export default DashboardCategoriesAdd