import React, { useState, useEffect } from 'react';
import image from '../../public/logo.PNG';
import Card from '../components/Card';

const Home = () => {
  const buttons = [
    { id: 1, name: "All" },
    { id: 2, name: "Bouns" },
    { id: 3, name: "PayPal" },
    { id: 4, name: "PaySafe" },
    { id: 5, name: "New sites" },
  ];

  const sites = [
    {
      id: 1,
      img: image,
      categorie: "Bouns",
      title: "seo",
      desc: "lorem",
      bouns: "50",
      url: "https://www.sparkengdev.com"
    },
    {
      id: 2,
      img: image,
      categorie: "PayPal",
      title: "seo",
      desc: "lorem",
      bouns: "50",
      url: "https://www.sparkengdev.com"
    },
    {
      id: 3,
      img: image,
      categorie: "PaySafe",
      title: "seo",
      desc: "lorem",
      bouns: "50",
      url: "https://www.sparkengdev.com"
    },
    {
        id: 4,
        img: image,
        categorie: "PaySafe",
        title: "seo",
        desc: "lorem",
        bouns: "50",
        url: "https://www.sparkengdev.com"
      },
  ];

  const article = [
    {
        id : 1,
        img : image,
        text : "Choosing between bet365 and bwin depends largely on what you value most in a betting platform.bet365 is renowned for its extensive live betting options and competitive odds, providing an immersive experiencefor sports enthusiasts. On the other hand, bwin offers a wide range of markets and a user-friendly interfacethat caters well to beginners. Both platforms provide generous bonuses and solid mobile apps. Ultimately, your choice should align with your betting preferences and priorities."
    },
    {
        id : 2,
        img : image,
        text : "Choosing between bet365 and bwin depends largely on what you value most in a betting platform.bet365 is renowned for its extensive live betting options and competitive odds, providing an immersive experiencefor sports enthusiasts. On the other hand, bwin offers a wide range of markets and a user-friendly interfacethat caters well to beginners. Both platforms provide generous bonuses and solid mobile apps. Ultimately, your choice should align with your betting preferences and priorities."
    },
    {
        id : 3,
        img : image,
        text : "Choosing between bet365 and bwin depends largely on what you value most in a betting platform.bet365 is renowned for its extensive live betting options and competitive odds, providing an immersive experiencefor sports enthusiasts. On the other hand, bwin offers a wide range of markets and a user-friendly interfacethat caters well to beginners. Both platforms provide generous bonuses and solid mobile apps. Ultimately, your choice should align with your betting preferences and priorities."
    },
    {
        id : 4,
        img : image,
        text : "Choosing between bet365 and bwin depends largely on what you value most in a betting platform.bet365 is renowned for its extensive live betting options and competitive odds, providing an immersive experiencefor sports enthusiasts. On the other hand, bwin offers a wide range of markets and a user-friendly interfacethat caters well to beginners. Both platforms provide generous bonuses and solid mobile apps. Ultimately, your choice should align with your betting preferences and priorities."
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCate, setActiveCate] = useState("All");
  const [activeCards, setActiveCards] = useState([]);
  const [showArticle, setShowArticle] = useState([]);
  const [isHiddenArt, setIsHiddenArt] = useState(true)


  useEffect(() => {
    setShowArticle(article.slice(0, 3));
  }, []);

  useEffect(() => {
    setActiveCards(sites);
  }, []);

  const handleFilter = (category, index) => {
    setActiveIndex(index);
    setActiveCate(category);

    if (category === "All") {
      setActiveCards(sites);
    } else {
      const filtered = sites.filter(item => item.categorie === category);
      setActiveCards(filtered);
    }
  };

  const showArt =()=> {
    setIsHiddenArt(false);
    setShowArticle(article)
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="p-10 text-[#00FF88] text-xl font-bold">Bet Bouns 24</h1>

        {/* أزرار الفلترة */}
        <div className="flex items-center justify-start shadow-bottom w-full overflow-x-auto flex-nowrap sm:justify-center scrollbar-hide">
            {buttons.map((item, index) => (
                <button
                key={item.id}
                onClick={() => handleFilter(item.name, index)}
                className={`
                    cursor-pointer px-[25px] py-[12px] font-semibold text-base border-0 bg-transparent
                    transition-all duration-300 ease-linear mx-[10px] whitespace-nowrap border-b-2
                    ${activeIndex === index
                    ? "text-[#00FF88] border-b-[#00FF88]"
                    : "text-[#bbb] border-b-transparent hover:text-[#00FF88]"
                    }
                `}
                >
                {item.name}
                </button>
            ))}
        </div>


      {/* عرض الكروت */}
      <div className='flex p-4 gap-4 flex-wrap justify-center'>
        {activeCards.map((item) => (
          <Card
            key={item.id}
            img={item.img}
            title={item.title}
            desc={item.desc}
            bouns={item.bouns}
            url={item.url}
          />
        ))}
      </div>

      <div>
        <h1 className="
            text-[#00FF88] bg-[#0D1323] 
            px-4 py-2 
            rounded-md 
            mb-5 
            font-extrabold 
            block 
            text-2xl
            m-0
            unicode-bidi-isolate
        ">
            Which is Better: bet365 or bwin?
        </h1>
      </div>
      <div className="
        max-w-[800px] 
        mx-auto 
        my-[30px] 
        mb-[50px] 
        px-6 
        py-5 
        text-base 
        text-gray-300 
        bg-[#101B2D] 
        rounded-lg 
        leading-relaxed
        "
        >
        {showArticle.map((item) => (
        <div key={item.id} className="flex flex-col items-center">
            <img className="w-[80px] h-[80px] mb-4" src={item.img} alt="logo" />
            <p className="bg-[rgba(16,27,45,0.2)] border-l-4 border-[#00FF88] px-4 py-3 rounded-md text-gray-300">
            {item.text}
            </p>
        </div>
        ))}

        {isHiddenArt ? (
        <button 
            onClick={() => showArt()}
            className="bg-[#00FF88] text-[#101B2D] border-0 px-6 py-1 font-semibold text-base rounded-md cursor-pointer my-5 mx-auto block transition-colors duration-300 ease-in-out
            hover:bg-[#00cc66] hover:text-white">
            Show More
        </button>
        ) : (
        <div></div>
        )}

      </div>



        <div className='flex flex-col w-full'>
            <div className="flex flex-row justify-center bg-[#0D1323] w-full text-gray-300 px-4 py-7 text-center text-sm leading-relaxed">
                <a className="text-[#00FF88] no-underline mx-2 font-semibold hover:text-white transition-colors duration-300">contact us</a> 
                <div className='mx-4'>|</div>
                <a className="text-[#00FF88] no-underline mx-2 font-semibold hover:text-white transition-colors duration-300">contact us</a>
                <div className='mx-4'>|</div>
                <a className="text-[#00FF88] no-underline mx-2 font-semibold hover:text-white transition-colors duration-300">contact us</a>
            </div>

            <div className="py-4 mt-4 font-nunito">
                <p className="text-white font-normal text-base text-center">
                © Copyright by{" "}
                <a
                    style={{ color: "#2fb0cd" }}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://sparkengdev.com/"
                >
                    SPARK
                </a>{" "}
                – All rights reserved.
                </p>
            </div>
        </div>
    </div>
  );
};

export default Home;
