import axios from "axios";
import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";
import { Api } from "../../constant/api";
import { Link } from "react-router-dom";


const ArticleCardDashboard = ({ id, title, image, content }) => {

    const deleteArt = async (id,title) =>{
        const confirmDelete = window.confirm(`هل انت متأكد من أنك تريد حذف هذا المقال : ${title}`)
        if(confirmDelete){
            try {
                await axios.delete(Api.DELETE(id).DELETEArticles)
                window.location.reload();
            } catch (error) {
                console.log(error)
            }
        }
    } 

    return (
        <div className="flex flex-col justify-center items-center  bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          {/* صورة المقال */}
          <img src={image} alt={title} className="w-72 h-72 object-cover " />
          <div className='flex m-8'>
                    <button onClick={()=>{deleteArt(id,title)}}>
                        <MdDeleteForever className="cursor-pointer text-2xl text-red-500 hover:text-red-700 mx-8" />
                    </button>
                    <Link to={`/dashboard/articles/edit/${id}`}>
                        <MdModeEditOutline className="cursor-pointer text-2xl text-yellow-400 hover:text-yellow-600 mx-8" />
                    </Link>
                </div>
          {/* محتوى المقال */}
          <div className=" w-11/12 max-w-xl mx-auto text-center border-l-4 border-[#00FF88] rounded-md ">
                {/* العنوان */}
                <h2 className="text-xl text-black font-bold mb-4">{title}</h2>
                {/* النص */}
                <p className=" w-11/12 pb-4 max-w-xl mx-auto text-gray-700 p-0 ">
                    {content}    
                </p>    

          </div>
        </div>
      );
}

export default ArticleCardDashboard