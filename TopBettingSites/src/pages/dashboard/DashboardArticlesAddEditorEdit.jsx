import React, { useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import SideBar from "./SideBar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Api } from "../../constant/api";

const DashboardArticlesAddEditorEdit = () => {
    const [content, setContent] = useState("");
    const [idCode , setIdCode] = useState(null)

    const {id} = useParams();
    const navigate = useNavigate();

    const fetchData = async () => {
        const response = await axios.get(Api.GET().Articles);
    
        // البحث عن المقال بالـ id
        const selectArt = response.data.find(art => String(art.id) === id);
    
        if (!selectArt) {
            setError('Site not found');
            setTimeout(() => navigate('/dashboard/home'), 2000);
            return;
        }
    
        // التأكد أن هناك عناصر داخل codes
        if (selectArt.codes && selectArt.codes.length > 0) {
            setContent(selectArt.codes[0].text_html); // نأخذ أول عنصر من codes
            setIdCode(selectArt.codes[0].id)
        } else {
            setContent(""); // لا يوجد محتوى HTML
        }
    
    };
    

    useEffect (() => {
        fetchData()
    },[])
  
    const handleSave = async (e) => {
        e.preventDefault();
      
        try {
          const formData = new FormData();
          formData.append("article", id);
          formData.append("text_html", content);

          const response = await axios.put(
            `https://www.betbonus24.com/api/admin/codes/${idCode}/`, // URL مع المعرف
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
      

  return (
    <div className="md:flex  gap-14 ">
        <SideBar />
        <div className="flex flex-col">
            <h1 className='items-center justify-center text-center pt-4 text-3xl'>اهلا بك في لوحة التحكم</h1>
            <h1 className='items-center justify-center text-center m-4 p-4 text-xl'>هنا تقوم بتعديل بقية المقال</h1>
        
            <Editor
                apiKey="lfa4suk0msgy0iea3b6pla5z85qflmoetofmrer80dhwsmmw"
                value={content}
                onEditorChange={(newContent) => setContent(newContent)}
                init={{
                height: 500,
                menubar: true,
                plugins: [
                    "advlist", "autolink", "lists", "link", "image", "charmap",
                    "preview", "anchor", "searchreplace", "visualblocks", "code",
                    "fullscreen", "insertdatetime", "media", "table", "help",
                    "wordcount", "emoticons"
                ],
                toolbar: `
                    undo redo | formatselect fontselect fontsizeselect |
                    bold italic underline strikethrough forecolor backcolor |
                    alignleft aligncenter alignright alignjustify |
                    bullist numlist outdent indent blockquote |
                    h1 h2 h3 h4 h5 h6 |
                    link image media table |
                    emoticons |
                    removeformat code
                `,
                font_size_formats: "10px 12px 14px 16px 18px 20px 24px 28px 32px 36px 48px 56px 72px",
                style_formats: [
                    { title: "العنوان الرئيسي", block: "h1" },
                    { title: "عنوان فرعي", block: "h2" },
                    { title: "عنوان صغير", block: "h3" },
                    { title: "فقرة", block: "p" }
                ],
                image_title: true,
                automatic_uploads: false,
                images_file_types: "jpg,svg,webp",
                }}
            />

        <div className="flex m-4 justify-center">
            <button 
                onClick={handleSave} 
                className="bg-[#009788] text-[#101B2D] border-0 px-6 py-2 font-semibold text-base rounded-md cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#00cc66] hover:text-white"
            >
                حفظ المقال
            </button>
        </div>

        </div>

    </div>
  )
}

export default DashboardArticlesAddEditorEdit