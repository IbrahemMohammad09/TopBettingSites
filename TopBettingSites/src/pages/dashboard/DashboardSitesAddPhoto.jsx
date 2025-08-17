import React from 'react'
import SideBar from './SideBar'

const DashboardSitesAddPhoto = () => {
  return (
    <div className=' md:flex  gap-14 mb-8'>
        <SideBar />
        <div>
            <h1 className='items-center justify-center text-center text-3xl'>Welcome to Dashboard</h1>
            <div className='items-center justify-center text-center'>
                <h1 className='text-xl mb-4'>here you the photo to the Site</h1>
                
            </div>
        </div>
    </div>
  )
}

export default DashboardSitesAddPhoto