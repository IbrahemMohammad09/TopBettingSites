import React, { useState } from "react";
import SideBar from "./SideBar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import './DashboardArticlesAddEditor.css'; // CSS مخصص للمحرر

const DashboardArticlesAddEditor = () => {
  const [content, setContent] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("article", id);
      formData.append("text_html", content);
      await axios.post(
        "https://www.betbonus24.com/api/admin/codes/",
        formData,
        {
          headers: {
            "Authorization": `Bearer <access_token>`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      navigate("/dashboard/articles");
    } catch (error) {
      console.log(error);
    }
  };

  const modules = {
    toolbar: [
      [{ 'font': [] }, { 'size': ['small', false, 'large', 'huge'] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'align': [] }],
      ['link', 'image', 'video'],
      ['blockquote', 'code-block'],
      ['clean']
    ]
  };

  const formats = [
    'font', 'size',
    'bold', 'italic', 'underline', 'strike',
    'color', 'background',
    'align',
    'link', 'image', 'video',
    'blockquote', 'code-block'
  ];

  return (
    <div className="md:flex gap-14">
      <SideBar />
      <div className="flex flex-col w-full">
        <h1 className="text-center pt-4 text-3xl">اهلا بك في لوحة التحكم</h1>
        <h1 className="text-center m-4 p-4 text-xl">هنا تقوم بإضافة بقية المقال</h1>

        <ReactQuill
          theme="snow"
          value={content}
          onChange={setContent}
          modules={modules}
          formats={formats}
        />

        <div className="flex pt-12 m-4 justify-center">
          <button
            onClick={handleSave}
            className="bg-[#009788] text-[#101B2D] border-0 px-6 py-2 font-semibold text-base rounded-md cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#00cc66] hover:text-white"
          >
            حفظ المقال
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardArticlesAddEditor;
