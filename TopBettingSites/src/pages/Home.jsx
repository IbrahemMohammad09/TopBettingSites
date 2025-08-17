import React, { useState, useEffect } from 'react';
import image from '../../public/logo.PNG';
import Card from '../components/Card';
import GoogleAd from '../components/GoogleAd';
import ArticleCard from '../components/ArticleCard';


const Home = () => {
  const Categories = [
    { id: 1, name: "Sites" },
    { id: 2, name: "Bouns" },
    { id: 3, name: "PayPal" },
    { id: 4, name: "PaySafe" },
    { id: 5, name: "New sites" },
  ];

  const sites = [
    {
      id: 1,
      img: image,
      categorie: "Sites",
      title: "Sites",
      desc: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
      bouns: "50",
      rate: 3,
      url: "https://www.sparkengdev.com"
    },
    {
      id: 2,
      img: image,
      categorie: "Bouns",
      title: "Bouns",
      desc: "lorem",
      bouns: "50",
      rate: 4.5,
      url: "https://www.sparkengdev.com"
    },
    {
      id: 3,
      img: image,
      categorie: "PayPal",
      title: "PayPal",
      desc: "lorem",
      bouns: "50",
      rate: 4.5,
      url: "https://www.sparkengdev.com"
    },
    {
        id: 4,
        img: image,
        categorie: "PaySafe",
        title: "PaySafe",
        desc: "lorem",
        bouns: "50",
        rate: 4.5,
        url: "https://www.sparkengdev.com"
      },
      {
        id: 5,
        img: image,
        categorie: "PaySafe",
        title: "PaySafe",
        desc: "lorem",
        bouns: "50",
        rate: 4.5,
        url: "https://www.sparkengdev.com"
      },
      {
        id: 6,
        img: image,
        categorie: "PaySafe",
        title: "PaySafe",
        desc: "lorem",
        bouns: "50",
        rate: 4.5,
        url: "https://www.sparkengdev.com"
      },
      {
        id: 7,
        img: image,
        categorie: "PaySafe",
        title: "PaySafe",
        desc: "lorem",
        bouns: "50",
        rate: 4.5,
        url: "https://www.sparkengdev.com"
      },
      {
        id: 8,
        img: image,
        categorie: "PaySafe",
        title: "PaySafe",
        desc: "lorem",
        bouns: "50",
        rate: 4.5,
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


  // بدل الدالة showArt السابقة
const toggleArticles = () => {
  if (isHiddenArt) {
    // عرض جميع المقالات
    setShowArticle(article);
    setIsHiddenArt(false);
  } else {
    // عرض أول 3 مقالات
    setShowArticle(article.slice(0, 3));
    setIsHiddenArt(true);
  }
};

  useEffect(() => {
    setShowArticle(article.slice(0, 3));
  }, []);

  useEffect(() => {
    const firstCategoryName = Categories[0].name;
    const filtered = sites.filter(item => item.categorie === firstCategoryName);
    setActiveCards(filtered);
  }, []);


  const handleFilter = (category, index) => {
    setActiveIndex(index);
    setActiveCate(category);

    const filtered = sites.filter(item => item.categorie === category);
    setActiveCards(filtered);

  };

  const showArt =()=> {
    setIsHiddenArt(false);
    setShowArticle(article)
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="p-10 text-[#009788] text-4xl font-bold">Bet Bouns 24</h1>
      <p className="text-wrap  mx-4 sm:mx-8 lg:mx-60 text-black text-center mx-auto  p-px">
        You will receive a bonus when registering on sports betting and casino sites,
        but what makes us special is that we give you the chance to get additional bonuses
        when registering on many of those sites through our platform. Try it yourself and see.
        We wish you good luck in your experience with us!
      </p>
        {/* أزرار الفلترة */}
        <div className="flex items-center justify-start shadow-bottom w-full overflow-x-auto flex-nowrap sm:justify-center scrollbar-hide">
            {Categories.map((item, index) => (
                <button
                key={item.id}
                onClick={() => handleFilter(item.name, index)}
                className={`
                    cursor-pointer px-[2px] py-[12px] font-semibold text-base border-0 bg-transparent
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
            rate={item.rate}
          />
        ))}
      </div>

      <div className='flex items-center justify-center shadow-bottom mx-auto w-full px-4'>
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
            {/* Which is Better: bet365 or bwin? */}
            Articles Sections
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
        <ArticleCard 
          key={item.id} 
          title={item.title}
          image={item.img}
          content={item.text}
          />
        ))}
        <button
          onClick={toggleArticles}
          className="bg-[#00FF88] text-[#101B2D] border-0 px-6 py-1 font-semibold text-base rounded-md cursor-pointer my-5 mx-auto block transition-colors duration-300 ease-in-out hover:bg-[#00cc66] hover:text-white"
        >
          {isHiddenArt ? "Show More Articles" : "Show Less Articles"}
        </button>
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
                  <p className="text-gray-800">If you have any questions about these Terms and Conditions, you can reach us at:
                    <a style={{ color: "#2fb0cd" }} href='contact@betbonus24.com' target='_blank'>contact@betbonus24.com</a>
                  </p>
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
                  <p className="mx-4 text-gray-800 max-h-[70vh] overflow-y-auto flex-nowrap">
                    <h1 className='font-bold'>
                    1. Introduction</h1>
                      At BetBonus24.com, we are committed to promoting responsible gambling and ensuring our users are aware of the risks associated with betting. We do not operate betting services directly, but we provide information and affiliate links to third-party betting sites.
                    <h1 className='font-bold'>
                    2. Our Responsibility</h1>
                      We encourage our visitors to gamble responsibly, set personal limits, and never wager more than they can afford to lose. Gambling should always be seen as a form of entertainment, not a way to make money.
                    <h1 className='font-bold'>
                    3. Recognizing Problem Gambling</h1>
                      Signs of problem gambling may include:
                      <p>
                    * Difficulty stopping or controlling betting habits</p>
                    <p>
                    * Gambling with money intended for essential expenses</p>
                    <p>
                    * Chasing losses to recover previous bets</p>
                    <p>
                    * Neglecting work, relationships, or personal responsibilities due to gambling</p>
                    <h1 className='font-bold'>
                    4. Self-Exclusion and Support</h1>
                      If you feel you may have a gambling problem, we recommend contacting the betting site directly to request self-exclusion. You can also seek professional help from organizations such as:

                    <div className='flex flex-col'>
                      <a className='text-[#2fb0cd]' href='http://www.gamcare.org.uk' target='_blank'>  GamCare  </a>
                      <a className='text-[#2fb0cd]' href='http://www.begambleaware.org' target='_blank'>  GambleAware  </a>
                      <a className='text-[#2fb0cd]' href='http://www.gamblersanonymous.org' target='_blank'>  Gamblers Anonymous </a>
                    </div>
                    
                    <h1 className='font-bold'>
                    5. Age Restrictions</h1>
                      BetBonus24.com does not target individuals under the legal gambling age in their jurisdiction. All betting operators we feature require users to be at least 18 years old (or the legal gambling age where they live).
                      <h1 className='font-bold'>
                    6. Final Note</h1>
                      We believe in promoting a safe and enjoyable betting environment. If you or someone you know is struggling with gambling, seek help immediately.
                  </p>
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
                  <p className="mx-4 text-gray-800 max-h-[70vh] overflow-y-auto flex-nowrap">
                      <h1 className='font-bold'>  
                      1. Introduction
                      </h1> 
                      This Privacy Policy explains how BetBonus24.com collects, uses, and protects your personal information when you visit our website. By using our site, you agree to the practices described in this policy.
                      <h1 className='font-bold'>
                      2. Information We Collect
                      </h1>
                      We may collect non-personal information such as your browser type, device, and IP address for analytical purposes. If you contact us via email, we may store your name, email address, and the content of your message.
                      <h1 className='font-bold'>
                      3. Use of Information
                      </h1>
                      We use collected data to improve our website, provide relevant content, and respond to inquiries. We may also use anonymized data for analytics to enhance user experience.
                      <h1 className='font-bold'>
                      4. Cookies
                      </h1>
                      BetBonus24.com uses cookies to enhance website performance and personalize your experience. You can disable cookies in your browser settings, but some features of the site may not function properly.

                      <h1 className='font-bold'>
                      5. Affiliate Links and Third Parties
                      </h1>
                      Our website contains affiliate links to third-party betting sites. Clicking these links may lead to the collection of information by those third parties, which is subject to their own privacy policies. We are not responsible for their practices.

                      <h1 className='font-bold'>
                      6. Data Security
                      </h1>
                      We implement reasonable security measures to protect your personal information. However, no method of transmission or storage is 100% secure, and we cannot guarantee absolute security.

                      <h1 className='font-bold'> 7. Legal Compliance</h1>
                        We may disclose personal information if required by law or to protect our legal rights.

                      <h1 className='font-bold'>8. Children’s Privacy</h1>
                        Our services are not intended for individuals under the age of 18 (or the legal gambling age in their jurisdiction). We do not knowingly collect personal information from minors.

                      <h1 className='font-bold'>9. Changes to This Policy</h1>
                        We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated date.
                  </p>
                </div>
              </div>
            )}  

            {activePopupTerms && (
              <div className="fixed inset-0 bg-black  bg-opacity-50 flex items-center justify-center">
                <div className="bg-white p-6 rounded-lg w-96 relative">
                  <button
                    className="absolute top-2 right-3 text-gray-500 hover:text-black"
                    onClick={() => setActivePopupTerms(null)}
                  >
                    ✖
                  </button>
                  <p className="mx-4 text-gray-800 max-h-[70vh] overflow-y-auto flex-nowrap">
                    <h1 className='font-bold'>  
                    1. Introduction
                    </h1> 
                    Welcome to BetBonus24.com. By accessing or using our website, you agree to comply with these Terms and Conditions. If you do not agree with any part of these terms, please refrain from using our site.
                    
                    <h1 className='font-bold'>  
                    2. Nature of Our Services
                    </h1>
                    BetBonus24.com is an affiliate website that provides information about online betting platforms, including promotional offers and bonuses. We do not offer betting services directly; instead, we connect users with licensed betting operators.
                    
                    <h1 className='font-bold'>  
                    3. Gambling Disclaimer
                    </h1>
                    We are not responsible for any financial losses, damages, or consequences resulting from your betting activities. Gambling involves risk, and you should only participate if you understand the risks and can afford potential losses. Always gamble responsibly.
                    
                    <h1 className='font-bold'>  
                    4. Age Restrictions
                    </h1>
                    You must be at least 18 years old (or the legal gambling age in your jurisdiction) to use our services. By using BetBonus24.com, you confirm that you meet this requirement.
                    
                    <h1 className='font-bold'>                     
                    5. Affiliate Disclosure 
                    </h1>
                    Some links on our website are affiliate links, meaning we may earn a commission if you register or deposit through them, at no additional cost to you.
                    <h1 className='font-bold'>                      
                    6. Accuracy of Information
                    </h1>
                    We strive to provide accurate and up-to-date information about bonuses, offers, and betting platforms. However, we cannot guarantee that all information is always correct, as offers may change without prior notice. We recommend verifying details directly with the betting sites.
                    
                    <h1 className='font-bold'>  
                    7. Legal Jurisdiction
                    </h1>
                    It is your responsibility to ensure that online gambling is legal in your country or region before engaging with any betting site mentioned on BetBonus24.com.
                    
                    <h1 className='font-bold'>  
                    8. Changes to the Terms
                    </h1>
                    We may update or modify these Terms and Conditions at any time. Your continued use of the site after such changes means you accept the updated terms.

                  </p>
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
