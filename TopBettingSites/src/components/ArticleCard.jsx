import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ArticleCard({ id, title, image, content }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate()

  // const previewText = content.length > 150 ? content.slice(0, 150) + "..." : content;
  const showAllArticle = () =>{
    navigate(`/article/${id}`)
  }

  return (
    <div 
      onClick={showAllArticle}  
      className="flex flex-col justify-center items-center max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-6">
      {/* صورة المقال */}
      <img src={image} alt={title} className="w-72 h-72 object-cover " />

      {/* محتوى المقال */}
      <div className="p-6 text-start border-l-4 border-[#00FF88] rounded-md ">
        {/* العنوان */}
        <h2 className="text-xl text-black font-bold mb-4">{title}</h2>

        {/* النص */}
        <p className="text-gray-700 leading-relaxed">
          {/* {isExpanded ? content : previewText} */}
          {content}
        </p>

        {/* زر عرض المزيد */}
        {/* {content.length > 150 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="bg-[#009788] text-[#101B2D] border-0 px-6 py-1 font-semibold text-base rounded-md cursor-pointer my-5 mx-auto block transition-colors duration-300 ease-in-out
            hover:bg-[#00cc66] hover:text-white"
          >
            {isExpanded ? "Show Lese" : "Show More"}
          </button>
        )} */}
      </div>
    </div>
  );
}
