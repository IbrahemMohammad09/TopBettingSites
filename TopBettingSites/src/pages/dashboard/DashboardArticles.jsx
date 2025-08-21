import React, { useEffect } from 'react'
import SideBar from './SideBar'
import { useState } from 'react'
import ArticleCardDashboard from './ArticleCardDashboard'
import axios from 'axios'
import { Api } from '../../constant/api'
import { Link } from 'react-router-dom'

const DashboardArticles = () => {
    const [article , setArticle] = useState([])

    const fetchData = async () => {
        try {
            const response = await axios.get(Api.GET().Articles);
            setArticle(response.data);
        } catch (error) {
            
        }
    }

    useEffect (()=>{
        fetchData();
    },[])

  return (
    <div className=' md:flex  gap-14 '>
        <SideBar />
        <div>
            <h1 className='items-center justify-center text-center text-3xl '>اهلا بك في لوحة التحكم</h1>
            <div className='items-center justify-center text-center'>
                <h1 className='text-xl mb-4 px-2 pb-4'>هنا يمكنك اضافة , تعديل و حذف المقالات</h1>
                <Link to="/dashboard/articles/add" className=' bg-[#009788] text-[#101B2D] border-0 px-6 py-1 font-semibold text-base rounded-md cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#00cc66] hover:text-white'
                    >اضافة مقال
                </Link>
            </div>    
            <div className='pt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 p-4 text-center justify-center'>
                {article.length === 0 ? (
                    <p className="text-gray-500 pt-8 text-lg font-semibold">
                        لا يوجد اي مقال بعد
                    </p>
                ):(
                    article.map((item,index) => (
                        <ArticleCardDashboard 
                            key={item.id} 
                            title={item.header}
                            image={item.image_url}
                            content={item.text}
                            id={item.id}
                        />
                    ))
                )}
            </div>
        </div>
    </div>
  )
}

export default DashboardArticles