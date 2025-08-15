import React, { useState, useEffect } from 'react';
import image from '../../public/logo.PNG';
import Card from '../components/Card';
import GoogleAd from '../components/GoogleAd';
import ArticleCard from '../components/ArticleCard';

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
        title : "bet bouns ",
        text : "Choosing between bet365 and bwin depends largely on what you value most in a betting platform.bet365 is renowned for its extensive live betting options and competitive odds, providing an immersive experiencefor sports enthusiasts. On the other hand, bwin offers a wide range of markets and a user-friendly interfacethat caters well to beginners. Both platforms provide generous bonuses and solid mobile apps. Ultimately, your choice should align with your betting preferences and priorities.Choosing between bet365 and bwin depends largely on what you value most in a betting platform.bet365 is renowned for its extensive live betting options and competitive odds, providing an immersive experiencefor sports enthusiasts. On the other hand, bwin offers a wide range of markets and a user-friendly interfacethat caters well to beginners. Both platforms provide generous bonuses and solid mobile apps. Ultimately, your choice should align with your betting preferences and priorities.Choosing between bet365 and bwin depends largely on what you value most in a betting platform.bet365 is renowned for its extensive live betting options and competitive odds, providing an immersive experiencefor sports enthusiasts. On the other hand, bwin offers a wide range of markets and a user-friendly interfacethat caters well to beginners. Both platforms provide generous bonuses and solid mobile apps. Ultimately, your choice should align with your betting preferences and priorities.Choosing between bet365 and bwin depends largely on what you value most in a betting platform.bet365 is renowned for its extensive live betting options and competitive odds, providing an immersive experiencefor sports enthusiasts. On the other hand, bwin offers a wide range of markets and a user-friendly interfacethat caters well to beginners. Both platforms provide generous bonuses and solid mobile apps. Ultimately, your choice should align with your betting preferences and priorities.Choosing between bet365 and bwin depends largely on what you value most in a betting platform.bet365 is renowned for its extensive live betting options and competitive odds, providing an immersive experiencefor sports enthusiasts. On the other hand, bwin offers a wide range of markets and a user-friendly interfacethat caters well to beginners. Both platforms provide generous bonuses and solid mobile apps. Ultimately, your choice should align with your betting preferences and priorities.Choosing between bet365 and bwin depends largely on what you value most in a betting platform.bet365 is renowned for its extensive live betting options and competitive odds, providing an immersive experiencefor sports enthusiasts. On the other hand, bwin offers a wide range of markets and a user-friendly interfacethat caters well to beginners. Both platforms provide generous bonuses and solid mobile apps. Ultimately, your choice should align with your betting preferences and priorities.Choosing between bet365 and bwin depends largely on what you value most in a betting platform.bet365 is renowned for its extensive live betting options and competitive odds, providing an immersive experiencefor sports enthusiasts. On the other hand, bwin offers a wide range of markets and a user-friendly interfacethat caters well to beginners. Both platforms provide generous bonuses and solid mobile apps. Ultimately, your choice should align with your betting preferences and priorities.Choosing between bet365 and bwin depends largely on what you value most in a betting platform.bet365 is renowned for its extensive live betting options and competitive odds, providing an immersive experiencefor sports enthusiasts. On the other hand, bwin offers a wide range of markets and a user-friendly interfacethat caters well to beginners. Both platforms provide generous bonuses and solid mobile apps. Ultimately, your choice should align with your betting preferences and priorities."
    },
    {
        id : 2,
        img : image,
        title : "bet bouns ",
        text : "Choosing between bet365 and bwin depends largely on what you value most in a betting platform.bet365 is renowned for its extensive live betting options and competitive odds, providing an immersive experiencefor sports enthusiasts. On the other hand, bwin offers a wide range of markets and a user-friendly interfacethat caters well to beginners. Both platforms provide generous bonuses and solid mobile apps. Ultimately, your choice should align with your betting preferences and priorities.Choosing between bet365 and bwin depends largely on what you value most in a betting platform.bet365 is renowned for its extensive live betting options and competitive odds, providing an immersive experiencefor sports enthusiasts. On the other hand, bwin offers a wide range of markets and a user-friendly interfacethat caters well to beginners. Both platforms provide generous bonuses and solid mobile apps. Ultimately, your choice should align with your betting preferences and priorities.Choosing between bet365 and bwin depends largely on what you value most in a betting platform.bet365 is renowned for its extensive live betting options and competitive odds, providing an immersive experiencefor sports enthusiasts. On the other hand, bwin offers a wide range of markets and a user-friendly interfacethat caters well to beginners. Both platforms provide generous bonuses and solid mobile apps. Ultimately, your choice should align with your betting preferences and priorities.Choosing between bet365 and bwin depends largely on what you value most in a betting platform.bet365 is renowned for its extensive live betting options and competitive odds, providing an immersive experiencefor sports enthusiasts. On the other hand, bwin offers a wide range of markets and a user-friendly interfacethat caters well to beginners. Both platforms provide generous bonuses and solid mobile apps. Ultimately, your choice should align with your betting preferences and priorities.Choosing between bet365 and bwin depends largely on what you value most in a betting platform.bet365 is renowned for its extensive live betting options and competitive odds, providing an immersive experiencefor sports enthusiasts. On the other hand, bwin offers a wide range of markets and a user-friendly interfacethat caters well to beginners. Both platforms provide generous bonuses and solid mobile apps. Ultimately, your choice should align with your betting preferences and priorities.Choosing between bet365 and bwin depends largely on what you value most in a betting platform.bet365 is renowned for its extensive live betting options and competitive odds, providing an immersive experiencefor sports enthusiasts. On the other hand, bwin offers a wide range of markets and a user-friendly interfacethat caters well to beginners. Both platforms provide generous bonuses and solid mobile apps. Ultimately, your choice should align with your betting preferences and priorities.Choosing between bet365 and bwin depends largely on what you value most in a betting platform.bet365 is renowned for its extensive live betting options and competitive odds, providing an immersive experiencefor sports enthusiasts. On the other hand, bwin offers a wide range of markets and a user-friendly interfacethat caters well to beginners. Both platforms provide generous bonuses and solid mobile apps. Ultimately, your choice should align with your betting preferences and priorities."
    },
    {
        id : 3,
        img : image,
        title : "bet bouns ",
        text : "Choosing between bet365 and bwin depends largely on what you value most in a betting platform.bet365 is renowned for its extensive live betting options and competitive odds, providing an immersive experiencefor sports enthusiasts. On the other hand, bwin offers a wide range of markets and a user-friendly interfacethat caters well to beginners. Both platforms provide generous bonuses and solid mobile apps. Ultimately, your choice should align with your betting preferences and priorities."
    },
    {
        id : 4,
        img : image,
        title : "bet bouns ",
        text : "Choosing between bet365 and bwin depends largely on what you value most in a betting platform.bet365 is renowned for its extensive live betting options and competitive odds, providing an immersive experiencefor sports enthusiasts. On the other hand, bwin offers a wide range of markets and a user-friendly interfacethat caters well to beginners. Both platforms provide generous bonuses and solid mobile apps. Ultimately, your choice should align with your betting preferences and priorities."
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCate, setActiveCate] = useState("All");
  const [activeCards, setActiveCards] = useState([]);
  const [showArticle, setShowArticle] = useState([]);
  const [isHiddenArt, setIsHiddenArt] = useState(true);

  const [activePopup, setActivePopup] = useState(null);
  const [activePopupContatc, setActivePopupContatc] = useState(false);
  const [activePopupTerms, setActivePopupTerms] = useState(false);
  const [activePopupPrivacy, setActivePopupPrivacy] = useState(false);
  const [activePopupGambling, setActivePopupGambling] = useState(false);



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
      <h1 className="p-10 text-[#009788] text-4xl font-bold">Bet Bouns 24</h1>
      <p className="text-wrap mx-4 sm:mx-8 lg:mx-60 text-black text-center mx-auto">
        You will receive a bonus when registering on sports betting and casino sites,
        but what makes us special is that we give you the chance to get additional bonuses
        when registering on many of those sites through our platform. Try it yourself and see.
        We wish you good luck in your experience with us!
      </p>
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
                    : "text-[#000000] border-b-transparent hover:text-[#00FF88]"
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

      <div className='flex items-center justify-center shadow-bottom w-full'>
        <h1 className="
            text-[#009788] bg-gray-300 
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
        
        rounded-lg 
        leading-relaxed
        "
        >
        {showArticle.map((item) => (
        // <div key={item.id} className="flex flex-row items-center m-4 bg-gray-700 rounded-lg ">
        //   <img className="w-[80px] h-[80px] mx-4" src={item.img} alt="logo" />
        //   <div className='bg-[rgba(16,27,45,0.2)] border-l-4 border-[#00FF88] rounded-md '>
        //     <h1 className='text-3xl px-4 py-3'>{item.title}</h1>
        //     <p className="px-4 py-3 text-gray-300">
        //     {item.text}
        //     </p>
        //   </div> 
        // </div>

        <ArticleCard 
          title={item.title}
          image={item.img}
          content={item.text}
          />
        ))}

        {isHiddenArt ? (
        <button 
            onClick={() => showArt()}
            className="bg-[#00FF88] text-[#101B2D] border-0 px-6 py-1 font-semibold text-base rounded-md cursor-pointer my-5 mx-auto block transition-colors duration-300 ease-in-out
            hover:bg-[#00cc66] hover:text-white">
            Show More Articles
        </button>
        ) : (
        <div></div>
        )}

      </div>



        <div className='flex flex-col w-full'>
            <div className="flex flex-row justify-center overflow-x-auto flex-nowrap bg-gray-300 w-full text-gray-300 px-4 py-7 text-center text-sm leading-relaxed">
              <button
                onClick={() => setActivePopupContatc(true)}
                className="text-[#009788] no-underline mx-2 font-semibold hover:text-white transition-colors duration-300"
              >
                Contact Us
              </button>
              {/* <div className="mx-4">|</div> */}
              <button
                onClick={() => setActivePopupTerms("terms")}
                className="text-[#009788] no-underline mx-2 font-semibold hover:text-white transition-colors duration-300"
              >
                Terms and Conditions
              </button>
              {/* <div className="mx-4">|</div> */}
              <button
                onClick={() => setActivePopupPrivacy("privacy")}
                className="text-[#009788] no-underline mx-2 font-semibold hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </button>
              {/* <div className="mx-4">|</div> */}
              <button
                onClick={() => setActivePopupGambling("gambling")}
                className="text-[#009788] no-underline mx-2 font-semibold hover:text-white transition-colors duration-300"
              >
                Responsible Gambling Policy
              </button>
            </div>

            {/* Popup */}
            {activePopupContatc && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-white p-6 rounded-lg w-96 relative">
                  <button
                    className="absolute top-2 right-3 text-gray-500 hover:text-black"
                    onClick={() => setActivePopupContatc(null)}
                  >
                    ✖
                  </button>
                  <p className="text-gray-800">Contact</p>
                </div>
              </div>
            )}

            {activePopupGambling && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-white p-6 rounded-lg w-96 relative">
                  <button
                    className="absolute top-2 right-3 text-gray-500 hover:text-black"
                    onClick={() => setActivePopupGambling(null)}
                  >
                    ✖
                  </button>
                  <p className="text-gray-800">activePopupGambling</p>
                </div>
              </div>
            )}

            {activePopupPrivacy && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-white p-6 rounded-lg w-96 relative">
                  <button
                    className="absolute top-2 right-3 text-gray-500 hover:text-black"
                    onClick={() => setActivePopupPrivacy(null)}
                  >
                    ✖
                  </button>
                  <p className="text-gray-800">activePopupPrivacy</p>
                </div>
              </div>
            )}  

            {activePopupTerms && (
              <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center">
                <div className="bg-white p-6 rounded-lg w-96 relative">
                  <button
                    className="absolute top-2 right-3 text-gray-500 hover:text-black"
                    onClick={() => setActivePopupTerms(null)}
                  >
                    ✖
                  </button>
                  <p className="text-gray-800">activePopupTerms</p>
                </div>
              </div>
            )}   


            <div className="py-4 mt-4 font-nunito">
                <p className="text-black font-normal text-base text-center">
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

            <div className='max-h-[10px]'>
              {/* <GoogleAd slot="1234567890" /> */}
            </div>

        </div>
    </div>
  );
};

export default Home;
