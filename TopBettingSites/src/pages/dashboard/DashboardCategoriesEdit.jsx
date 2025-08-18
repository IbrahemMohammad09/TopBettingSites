import React from 'react'
import SideBar from './SideBar'
import { useState } from 'react';

const DashboardCategoriesEdit = () => {
    const [name, setName] = useState('');
    const [order, setOrder] = useState('');

  return (
    <div className="md:flex gap-14">
        <SideBar />
        <div>
        <h1 className="text-center text-3xl">Welcome to Dashboard</h1>
        <div className="text-center">
          <h1 className="text-xl mb-4">Here you add Categories</h1>
          <form >
            <div className="flex flex-col mb-7 mr-4 px-4">
              <label className="font-extrabold text-xl">Category Name</label>
              <textarea
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Category Name"
                className="mr-3 w-full pl-3 border border-[#E9EAEC] rounded-lg dm"
              />
            </div>
            <div className="flex flex-col mb-7 mr-4 px-4">
              <label className="font-extrabold text-xl">Category Order</label>
              <input
                type="number"
                step="1"
                value={order}
                onChange={(e) => setOrder(e.target.value)}
                placeholder="Category Order"
                className="mr-3 w-full pl-3 border border-[#E9EAEC] rounded-lg dm"
              />
            </div>
            <button
              type="submit"
              className="bg-[#009788] text-[#101B2D] border-0 px-6 py-1 font-semibold text-base rounded-md cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#00cc66] hover:text-white"
            >
              Add Category
            </button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default DashboardCategoriesEdit