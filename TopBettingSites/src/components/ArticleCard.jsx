import { useState } from "react";

export default function ArticleCard({ title, image, content }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const previewText = content.length > 150 ? content.slice(0, 150) + "..." : content;

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-6">
      {/* صورة المقال */}
      <img src={image} alt={title} className="w-full h-64 object-cover" />

      {/* محتوى المقال */}
      <div className="p-6">
        {/* العنوان */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>

        {/* النص */}
        <p className="text-gray-700 leading-relaxed">
          {isExpanded ? content : previewText}
        </p>

        {/* زر عرض المزيد */}
        {content.length > 150 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            {isExpanded ? "عرض أقل" : "عرض المزيد"}
          </button>
        )}
      </div>
    </div>
  );
}
