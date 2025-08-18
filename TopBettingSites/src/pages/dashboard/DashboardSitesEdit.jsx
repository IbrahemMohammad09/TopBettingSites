import React, { useState, useEffect } from 'react'
import SideBar from './SideBar'
import { useParams, useNavigate } from 'react-router-dom';
import { Api } from '../../constant/api';
import axios from 'axios';


const DashboardSitesEdit = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();

    // site states
    const [name, setName] = useState("");
    const [text, setText] = useState("");
    const [bonus, setBonus] = useState("");
    const [link, setLink] = useState("");
    const [logoUrl, setLogoUrl] = useState(""); // رابط الصورة بعد الرفع
    const [rate, setRate] = useState("");
    const [order, setOrder] = useState("");
    const [error, setError] = useState(null);

    const fetchDataCat = async () => {
        try {
          const respone = await axios.get(Api.GET().CATEGORIES);
          setCategories(respone.data);
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        fetchDataCat();
        fetchDataSite();
      }, []);
    
    const fetchDataSite = async () =>{
        try {
            const respone = await axios.get(Api.GET().Sites)

            const selectSite = respone.data.find(sit => String(sit.id) === id);

            if (selectSite === undefined || selectSite === "") {
                setError('Site not found');
                setLoading(false);
                
                // إعادة التوجيه بعد ثانيتين إلى صفحة الكاتيجوريز
                setTimeout(() => navigate('/dashboard/home'), 2000);
              }
            setName(selectSite.name)
            setText(selectSite.text)
            setLink(selectSite.link)
            setRate(selectSite.rate)
            setOrder(selectSite.order)
            setBonus(selectSite.bonus)
            setLogoUrl(selectSite.logo_url)
            setSelectedCategory(selectSite.category)

        } catch (error) {
            console.log(error)
        }
    }

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
        "https://www.betbonus24.com/api/admin/upload/site-logo/", // رابط رفع الصور
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
      console.log("✅ Image uploaded:", response.data.url);
    } catch (err) {
      console.error("❌ Error uploading logo:", err.response?.data || err.message);
      alert("فشل رفع الصورة");
    }
  };


  const handleUpdateSite = async (e) => {
    e.preventDefault();
  
    try {
      const payload = {
        name,
        text,
        bonus: Number(bonus),
        link,
        logo_url: logoUrl,
        rate: Number(rate),
        order: Number(order),
        category_id: selectedCategory?.id   // ✅ الباك يطلب category_id
      };
  
  
      await axios.put(Api.PUT(id).UPDATESites, payload);
  
      alert("✅ تم تعديل الموقع بنجاح");
      navigate("/dashboard/sites");
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
    <div className='md:flex gap-14 mb-8'>
        <SideBar />
        <div>
          <h1 className='items-center justify-center text-center text-3xl'>اهلا بك في لوحة التحكم</h1>
          <div className='items-center justify-center text-center'>
            <h1 className='text-xl mb-4'>هنا تقوم بتعديل موقع</h1>
            <form className='mb-8' onSubmit={handleUpdateSite}>
              {/* Logo Upload */}
              <div className="flex flex-col mb-1 mr-4 px-4">
                <label className="font-extrabold text-xl">صورة الموقع</label>
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
                <label className="font-extrabold text-xl">اسم الموقع</label>
                <textarea
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="اسم الموقع"
                  className="mr-3 w-full pl-3 border border-[#E9EAEC] rounded-lg"
                />
              </div>
  
              {/* Text */}
              <div className="flex flex-col mb-1 mr-4 px-4 ">
                <label className="font-extrabold text-xl">وصف عن الموقع</label>
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="وصف عن الموقع"
                  className="mr-3 w-full pl-3 border border-[#E9EAEC] rounded-lg"
                />
              </div>
  
              {/* Link */}
              <div className="flex flex-col mb-1 mr-4 px-4 ">
                <label className="font-extrabold text-xl">رابط الموقع</label>
                <textarea
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  placeholder="رابط الموقع"
                  className="mr-3 w-full pl-3 border border-[#E9EAEC] rounded-lg"
                />
              </div>
  
              {/* Rate */}
              <div className="flex flex-col mb-1 mr-4 px-4 ">
                <label className="font-extrabold text-xl">تقييم الموقع</label>
                <input
                  type="number"
                  min="1"
                  max="5"
                  step="1"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                  placeholder="تقييم الموقع"
                  className="mr-3 w-full pl-3 border border-[#E9EAEC] rounded-lg"
                />
              </div>
  
              {/* Order */}
              <div className="flex flex-col mb-1 mr-4 px-4 ">
                <label className="font-extrabold text-xl">ترتيب عرض الموقع</label>
                <input
                  type="number"
                  step="1"
                  value={order}
                  onChange={(e) => setOrder(e.target.value)}
                  placeholder="ترتيب عرض الموقع"
                  className="mr-3 w-full pl-3 border border-[#E9EAEC] rounded-lg"
                />
              </div>
  
              {/* Bonus */}
              <div className="flex flex-col mb-1 mr-4 px-4 ">
                <label className="font-extrabold text-xl">الخصم على الموقع</label>
                <input
                  type="number"
                  value={bonus}
                  onChange={(e) => setBonus(e.target.value)}
                  placeholder="الخصم على الموقع"
                  className="mr-3 w-full pl-3 border border-[#E9EAEC] rounded-lg"
                />
              </div>
  
      
  
              {/* Categories */}
              <div className="flex flex-col  mb-1 mr-4 px-4 ">
                <label className="font-extrabold mb-2 text-xl">فئة الموقع</label>
                <div className='flex flex-row flex-wrap gap-2'>
                  {categories.map((item, index) => (
                    <button
                      type="button"
                      key={index}
                      onClick={() => setSelectedCategory(item)}
                      className={`px-4 py-1 font-semibold text-base rounded-md cursor-pointer transition-colors duration-300 ease-in-out
                        ${selectedCategory.id === item.id ? 'bg-[#00cc66] text-white' : 'bg-[#009788] text-[#101B2D] hover:bg-[#00cc66] hover:text-white'}
                      `}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
  
              <button
                type="submit"
                className='mt-4 bg-[#009788] text-[#101B2D] border-0 px-6 py-1 font-semibold text-base rounded-md cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#00cc66] hover:text-white'
              >
                حفظ الموقع
              </button>
            </form>
  
            {error && <p className="text-red-500">{JSON.stringify(error)}</p>}
          </div>
        </div>
      </div>
  )
}

export default DashboardSitesEdit