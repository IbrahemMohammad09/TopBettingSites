import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Api } from '../constant/api';

const Article = () => {
  const { id } = useParams();
  const [content, setContent] = useState('');
  const [article, setArticle] = useState(null); 
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await axios.get(Api.GET().Articles);

      const selectArt = response.data.find(art => String(art.id) === id);

      if (!selectArt) {
        setError('Article not found');
        setTimeout(() => navigate('/'), 2000);
        return;
      }

      setArticle(selectArt);

      // التأكد أن هناك عناصر داخل codes
      if (selectArt.codes && selectArt.codes.length > 0) {
        setContent(selectArt.codes[0].text_html); 
      } else {
        setContent(""); 
      }

    } catch (error) {
      console.error('Error fetching article:', error);
      setError("Something went wrong while fetching article");
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]); // مهم تعتمد على id إذا تغير

  if (error) {
    return <p className="text-center p-4 text-red-500">{error}</p>;
  }

  if (!article) {
    return <p className="text-center p-4">Loading...</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="p-4 m-4 bg-[#009788] text-white border rounded-lg text-4xl font-bold">
        Bet Bonus 24
      </h1>
      <p className="text-wrap px-4 sm:mx-8 lg:mx-60 text-black text-start p-px">
        Welcome to Bet Bonus 24, your ultimate guide to the best sports betting sites! Here you’ll find a complete list of trusted bookmakers along with their top welcome bonuses. But that’s not all, you can also filter and choose the perfect site based on your preferred payment methods, whether it’s PaySafeCard, PayPal, or many others
      </p>

      <div className="shadow-bottom mx-auto w-full px-4 py-2"></div>

      <div className="flex flex-col pt-20 px-4 md:px-20 md:flex-row justify-center items-center p-4">
        {article.image_url && (
          <img
            src={article.image_url}
            alt={article.header}
            className="w-72 h-72 object-cover mb-4 md:mb-0 md:mr-4"
          />
        )}
        <div className="flex flex-col text-start">
          <h2 className="text-xl text-black text-center font-bold mb-4">{article.header}</h2>
          <p className="text-gray-700 m-4 leading-relaxed">
            {article.text}
          </p>
        </div>
      </div>

      <div
        className="prose max-w-3xl pb-20 p-4"
        dangerouslySetInnerHTML={{ __html: content }}
      >
      </div>
    </div>
  );
};

export default Article;
