import React, { useState, useEffect } from 'react'
import SideBar from './SideBar'
import { useNavigate } from 'react-router-dom';
import { Api } from '../../constant/api';
import axios from 'axios';

const DashboardSitesAdd = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  // site states
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [bonus, setBonus] = useState("");
  const [link, setLink] = useState("");
  const [logoUrl, setLogoUrl] = useState(""); // رابط الصورة بعد الرفع
  const [rate, setRate] = useState("");
  const [order, setOrder] = useState("");
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const respone = await axios.get(Api.GET().CATEGORIES);
      setCategories(respone.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("text", text);
      formData.append("bonus", bonus);
      formData.append("link", link);
      formData.append("logo_url", logoUrl); // نرسل رابط الصورة الجاهز
      formData.append("category_id", selectedCategory);
      formData.append("rate", rate);
      formData.append("order", order);

      const response = await axios.post(
        "https://www.betbonus24.com/api/admin/sites/",
        formData,
        {
          headers: {
            "Authorization": `Bearer <access_token>`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // console.log("✅ Site created:", response.data);
      navigate(`/dashboard/sites/`);
    } catch (err) {
      console.error("❌ Error creating site:", err.response?.data || err.message);
      setError(err.response?.data || "Something went wrong");
    }
  };

  return (
    <div className='md:flex gap-14 mb-8'>
      <SideBar />
      <div>
        <h1 className='items-center justify-center text-center text-3xl'>Welcome to Dashboard</h1>
        <div className='items-center justify-center text-center'>
          <h1 className='text-xl mb-4'>Here you add Sites</h1>
          <form className='mb-8' onSubmit={handleSubmit}>
            {/* Logo Upload */}
            <div className="flex flex-col mb-1 mr-4 px-4">
              <label className="font-extrabold text-xl">Site Logo</label>
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
                  <span className="text-gray-500">Upload</span>
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
              <label className="font-extrabold text-xl">Site Name</label>
              <textarea
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Site Name"
                className="mr-3 w-full pl-3 border border-[#E9EAEC] rounded-lg"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col mb-1 mr-4 px-4 ">
              <label className="font-extrabold text-xl">Site Description</label>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Site Description"
                className="mr-3 w-full pl-3 border border-[#E9EAEC] rounded-lg"
              />
            </div>

            {/* Link */}
            <div className="flex flex-col mb-1 mr-4 px-4 ">
              <label className="font-extrabold text-xl">Site Link</label>
              <textarea
                value={link}
                onChange={(e) => setLink(e.target.value)}
                placeholder="Site Link"
                className="mr-3 w-full pl-3 border border-[#E9EAEC] rounded-lg"
              />
            </div>

            {/* Rate */}
            <div className="flex flex-col mb-1 mr-4 px-4 ">
              <label className="font-extrabold text-xl">Site Rate</label>
              <input
                type="number"
                min="1"
                max="5"
                step="0.1"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                placeholder="Site Rate"
                className="mr-3 w-full pl-3 border border-[#E9EAEC] rounded-lg"
              />
            </div>

            {/* Order */}
            <div className="flex flex-col mb-1 mr-4 px-4 ">
              <label className="font-extrabold text-xl">Site Order</label>
              <input
                type="number"
                step="1"
                value={order}
                onChange={(e) => setOrder(e.target.value)}
                placeholder="Site Order"
                className="mr-3 w-full pl-3 border border-[#E9EAEC] rounded-lg"
              />
            </div>

            {/* Bonus */}
            <div className="flex flex-col mb-1 mr-4 px-4 ">
              <label className="font-extrabold text-xl">Site Bonus</label>
              <input
                type="number"
                value={bonus}
                onChange={(e) => setBonus(e.target.value)}
                placeholder="Site Bonus"
                className="mr-3 w-full pl-3 border border-[#E9EAEC] rounded-lg"
              />
            </div>

    

            {/* Categories */}
            <div className="flex flex-col  mb-1 mr-4 px-4 ">
              <label className="font-extrabold mb-2 text-xl">Site Categories</label>
              <div className='flex flex-row flex-wrap gap-2'>
                {categories.map((item, index) => (
                  <button
                    type="button"
                    key={index}
                    onClick={() => setSelectedCategory(item.id)}
                    className={`px-4 py-1 font-semibold text-base rounded-md cursor-pointer transition-colors duration-300 ease-in-out
                      ${selectedCategory === item.id ? 'bg-[#00cc66] text-white' : 'bg-[#009788] text-[#101B2D] hover:bg-[#00cc66] hover:text-white'}
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
              Save Site
            </button>
          </form>

          {error && <p className="text-red-500">{JSON.stringify(error)}</p>}
        </div>
      </div>
    </div>
  )
}

export default DashboardSitesAdd;
