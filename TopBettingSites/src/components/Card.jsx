// Card.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Card = ({ img, title, desc, bouns, url }) => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center justify-center p-4 m-4 w-60 border rounded-lg shadow-md">
            <img src={img} alt={title} className="w-32 h-32 object-contain" />
            <h1 className="text-lg text-black font-bold">{title}</h1>
            <p>{desc}</p>
            <p className="font-semibold text-[#ffd700] animate-pulse-scale">
                Bonus: {bouns}
            </p>


            
            {/* If you want external links, use <a> instead of <Link> */}
            {url.startsWith('http') ? (
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#009788] text-[#101B2D] border-0 px-6 py-1 font-semibold text-base rounded-md cursor-pointer my-5 mx-auto block transition-colors duration-300 ease-in-out
                            hover:bg-[#00cc66] hover:text-white"
                >
                    Visit Site
                </a>
                ) : (
                <Link
                    to={url}
                    className="bg-[#00FF88] text-[#101B2D] border-0 px-6 py-1 font-semibold text-base rounded-md cursor-pointer my-5 mx-auto block transition-colors duration-300 ease-in-out
                            hover:bg-[#00cc66] hover:text-white"
                >
                    Visit Site
                </Link>
            )}

        </div>

  );
};

export default Card;
