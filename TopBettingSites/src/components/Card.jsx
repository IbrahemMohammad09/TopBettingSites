// Card.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {FaStar} from "react-icons/fa";

const Card = ({ img, title, desc, bouns, url,rate }) => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-start  w-[350px] border rounded-lg shadow-md">

            <div className='flex flex-row p-4 items-center justify-center w-full'>
                <img src={img} alt={title} className="w-20 h-20 object-contain " />
                <div className='flex flex-col flex-1 items-center'>
                    <h1 className="text-lg text-black font-bold">{title}</h1>
                    <p className="font-semibold text-[#ffd700] animate-pulse-scale">
                        Bonus: {bouns} %
                    </p>
                    <div className="flex justify-center text-xl p-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <FaStar
                            key={i}
                            className={
                              i < rate
                                ? "text-[#F6973F]"
                                : "text-[#F6973F] opacity-30"
                            }
                          />
                        ))}
                      </div>
                </div>

                {/* If you want external links, use <a> instead of <Link> */}
                {url.startsWith('http') ? (
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#009788] text-[#101B2D] border-0 px-6 py-1 font-semibold text-base rounded-md cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#00cc66] hover:text-white"
                    >
                        Visit Site
                    </a>
                    ) : (
                    <Link
                        to={url}
                        className="bg-[#009788] text-[#101B2D] border-0 px-6 py-1 font-semibold text-base rounded-md cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#00cc66] hover:text-white"
                    >
                        Visit Site
                    </Link>
                )}
            </div>
            <p className='p-4 pt-0 w-full'>{desc}</p>
        </div>

  );
};

export default Card;
