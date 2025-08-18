import React, { useState, useEffect } from 'react';
import SideBar from './SideBar';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Api } from '../../constant/api';

const DashboardCategoriesEdit = () => {
  const { id } = useParams(); // id = "6" من الرابط
  const categoryId = Number(id);

  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [order, setOrder] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(Api.GET().CATEGORIES)
        const categories = response.data;

        // ابحث عن الكاتيجوري التي تطابق الـ id
        const category = categories.find(cat => String(cat.id) === id);
        
        if (category === undefined || category === "") {
            setError('Category not found');
            setLoading(false);
            // إعادة التوجيه بعد ثانيتين إلى صفحة الكاتيجوريز
            setTimeout(() => navigate('/dashboard/home'), 2000);
          }

          setName(category.name);
          setOrder(category.order);
          setLoading(false);
      } catch (err) {
        console.error('Error fetching category:', err);

      }
    };
    fetchCategory();
  }, [id, navigate]);

  const handleUpdateCategory = async (e) => {
    e.preventDefault();
    try {
      const payload = { name, order: parseInt(order) };
      await axios.put(Api.PUT(id).UPDATECategories, payload);
      alert('Category updated successfully!');
      navigate('/dashboard/home');
    } catch (err) {
      console.error('Error updating category:', err);
      alert('Failed to update category.');
    }
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}. Redirecting...</p>;

  return (
    <div className="md:flex gap-14">
      <SideBar />
      <div>
        <h1 className="text-center text-3xl">Welcome to Dashboard</h1>
        <div className="text-center">
          <h1 className="text-xl mb-4">Edit Category</h1>
          <form onSubmit={handleUpdateCategory}>
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
              Update Category
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DashboardCategoriesEdit;
