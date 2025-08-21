import React, { useEffect } from 'react'
import SideBar from './SideBar'
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Api } from '../../constant/api';

const DashboardArticlesEdit = () => {
    const {id} = useParams();
    const [logoUrl, setLogoUrl] = useState("");
    const [header , setHeader] = useState("");
    const [text , setText] = useState("");
    const [order , setOrder] = useState("");
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    
    const fetchData = async () =>{
        try {
            const response = await axios.get(Api.GET().Articles);
            
            const selectArt = response.data.find(art => String(art.id) === id);
            if (selectArt === undefined || selectArt === "") {
                setError('Site not found');
                // إعادة التوجيه بعد ثانيتين إلى صفحة الكاتيجوريز
                setTimeout(() => navigate('/dashboard/home'), 2000);
            }

            setHeader(selectArt.header);
            setText(selectArt.text)
            setOrder(selectArt.order)
            setLogoUrl(selectArt.image_url)


        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() =>{
        fetchData()
    },[])


    // رفع الصورة
  const handleLogoUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // تحقق من الحجم (50KB)
    if (file.size > 50 * 1024) {
      alert("❌ حجم الصورة يجب أن لا يزيد عن 50 كيلوبايت");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await axios.post(
        "https://www.betbonus24.com/api/admin/upload/article-image/", // رابط رفع الصور
        formData,
        {
          headers: {
            "Authorization": `Bearer <access_token>`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // السيرفر لازم يرجع رابط الصورة
      setLogoUrl(response.data.url);
    } catch (err) {
      console.error("❌ Error uploading logo:", err.response?.data || err.message);
      alert("فشل رفع الصورة");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const payload = {
          header,
          text,
          image_url: logoUrl,
          order: Number(order),
        };
    
    
        await axios.put(Api.PUT(id).UPDATEArticles, payload);
    
        alert("✅ تم تعديل المقال بنجاح");
        navigate("/dashboard/articles");
      } catch (error) {
        if (error.response) {
          console.error("❌ Backend error:", error.response.data);
          alert("خطأ: " + JSON.stringify(error.response.data));
        } else {
          console.error(error);
          alert("خطأ غير متوقع");
        }
      }
  };



  return (
    <div className=' md:flex  gap-14 '>
        <SideBar />
        <div>
            <h1 className='items-center justify-center text-center text-3xl '>اهلا بك في لوحة التحكم</h1>
            <div className='items-center justify-center text-center'>
                <h1 className='text-xl mb-4 px-2'>هنا يمكنك تعديل المقال</h1>
                <form className='mb-8'>
                    {/* Logo Upload */}
                    <div className="flex flex-col mb-1 mr-4 px-4">
                        <label className="font-extrabold text-xl">صورة المقال</label>
                        <label className="relative cursor-pointer border-dashed border-2 border-gray-300 p-4 flex items-center justify-center">
                            {logoUrl ? (
                            <>
                                <img
                                src={logoUrl}
                                alt="Logo Preview"
                                className="w-24 h-24 object-contain border rounded"
                                />
                                {/* زر حذف */}
                                <button
                                type="button"
                                onClick={(e) => { e.stopPropagation(); setLogoUrl(""); }}
                                className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-700"
                                >
                                &times;
                                </button>
                            </>
                            ) : (
                            <span className="text-gray-500">ارفع الصورة</span>
                            )}
                            <input
                            type="file"
                            accept="image/*"
                            onChange={handleLogoUpload}
                            className="hidden"
                            />
                        </label>
                    </div>
                    {/* Name */}
                    <div className="flex flex-col mb-1 mr-4 px-4 ">
                        <label className="font-extrabold text-xl">عنوان المقال</label>
                        <textarea
                            value={header}
                            onChange={(e) => setHeader(e.target.value)}
                            placeholder="عنوان المقال"
                            className="mr-3 w-full pl-3 border border-[#E9EAEC] rounded-lg"
                        />
                    </div>

                    
                    {/* Text */}
                    <div className="flex flex-col mb-1 mr-4 px-4 ">
                        <label className="font-extrabold text-xl">محتوى المقال</label>
                        <textarea
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder="وصف عن الموقع"
                            className="mr-3 w-full min-h-[100px] max-h-[500px] p-3 border border-[#E9EAEC] rounded-lg resize overflow-auto"
                        />
                    </div>

                    {/* Order */}
                    <div className="flex flex-col mb-1 mr-4 px-4 ">
                        <label className="font-extrabold text-xl">ترتيب عرض المقال</label>
                        <input
                            type="number"
                            step="1"
                            value={order}
                            onChange={(e) => setOrder(e.target.value)}
                            placeholder="ترتيب عرض الموقع"
                            className="mr-3 w-full pl-3 border border-[#E9EAEC] rounded-lg"
                        />
                    </div>
                    
                    <div className="flex flex-col m-4 justify-center">
                      <Link
                          to={`/dashboard/articles/edit/editor/${id}`}
                          className=' mt-4 bg-[#009788] text-[#101B2D] border-0 px-6 py-1 font-semibold text-base rounded-md cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#00cc66] hover:text-white'
                          >
                         المتابعة لتعديل بقية المقال
                      </Link>

                      <button
                          type="submit"
                          onClick={handleSubmit}
                          className=' mt-4 bg-[#009788] text-[#101B2D] border-0 px-6 py-1 font-semibold text-base rounded-md cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#00cc66] hover:text-white'
                          >
                          حفظ المقال
                      </button>

                    </div>

                </form>
            </div>
            
        </div>
    </div>
  )
}

export default DashboardArticlesEdit