import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";

const ArticleCardDashboard = ({ title, image, content }) => {

    const [isExpanded, setIsExpanded] = useState(false);

    const previewText = content.length > 150 ? content.slice(0, 150) + "..." : content;
    return (
        <div className="flex flex-col justify-center items-center max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          {/* صورة المقال */}
          <img src={image} alt={title} className="w-72 h-72 object-cover " />
          <div className='flex m-8'>
                    <div>
                        <MdDeleteForever className="cursor-pointer text-2xl text-red-500 hover:text-red-700 mx-8" />
                    </div>
                    <div>
                        <MdModeEditOutline className="cursor-pointer text-2xl text-yellow-400 hover:text-yellow-600 mx-8" />
                    </div>
                </div>
          {/* محتوى المقال */}
          <div className="p-6 text-center border-l-4 border-[#00FF88] rounded-md ">
                {/* العنوان */}
                <h2 className="text-3xl text-[#009788] font-bold mb-4">{title}</h2>
                {/* النص */}
                <p className="text-gray-700 leading-relaxed">
                {isExpanded ? content : previewText}
                </p>
        
                {/* زر عرض المزيد */}
                {content.length > 150 && (
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="bg-[#009788] text-[#101B2D] border-0 px-6 py-1 font-semibold text-base rounded-md cursor-pointer my-5 mx-auto block transition-colors duration-300 ease-in-out
                    hover:bg-[#00cc66] hover:text-white"
                >
                    {isExpanded ? "Show Lese" : "Show More"}
                </button>
                )}
          </div>
        </div>
      );
}

export default ArticleCardDashboard