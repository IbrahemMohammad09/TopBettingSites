import React, { useState } from 'react';
import SideBar from './SideBar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Api } from '../../constant/api'; // تأكد من أن Api يحتوي على الرابط الصحيح

const DashboardCategoriesAdd = () => {
  const [name, setName] = useState('');
  const [order, setOrder] = useState('');
  const navigate = useNavigate(); // للتوجيه بعد الإضافة

  const handleAddCategory = async (e) => {
    e.preventDefault(); // منع إعادة تحميل الصفحة

    try {
      const payload = {
        name: name,
        order: parseInt(order),
      };

      await axios.post(Api.POST.CREATECategories, payload);

      alert('تم اضافة الفئة');
      navigate('/dashboard/home'); 
    } catch (error) {
      console.error('Error adding category:', error);
      alert('حدث خطأ اثناء الاضافة');
    }
  };

  return (
    <div className="md:flex gap-14">
      <SideBar />
      <div>
        <h1 className="text-center text-3xl">اهلا بك في لوحة التحكم</h1>
        <div className="text-center">
          <h1 className="text-xl mb-4">هنا يمكنك اضافة فئة</h1>
          <form onSubmit={handleAddCategory}>
            <div className="flex flex-col mb-7 mr-4 px-4">
              <label className="font-extrabold text-xl">اسم الفئة</label>
              <textarea
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="اسم الفئة"
                className="mr-3 w-full pl-3 border border-[#E9EAEC] rounded-lg dm"
              />
            </div>
            <div className="flex flex-col mb-7 mr-4 px-4">
              <label className="font-extrabold text-xl">ترتيب الفئة</label>
              <input
                type="number"
                step="1"
                value={order}
                onChange={(e) => setOrder(e.target.value)}
                placeholder="ترتيب الفئة"
                className="mr-3 w-full pl-3 border border-[#E9EAEC] rounded-lg dm"
              />
            </div>
            <button
              type="submit"
              className="bg-[#009788] text-[#101B2D] border-0 px-6 py-1 font-semibold text-base rounded-md cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#00cc66] hover:text-white"
            >
              اضف الفئة
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DashboardCategoriesAdd;
