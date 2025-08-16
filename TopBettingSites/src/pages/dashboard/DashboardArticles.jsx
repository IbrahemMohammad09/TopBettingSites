import React from 'react'
import SideBar from './SideBar'
import { useState } from 'react'
import ArticleCardDashboard from './ArticleCardDashboard'
import image from '../../../public/logo.PNG'

const DashboardArticles = () => {
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
  return (
    <div className=' md:flex  gap-14 '>
        <SideBar />
        <div>
            <h1 className='items-center justify-center text-center text-3xl m-4 mb-4'>Welcome to Dashboard</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 p-4'>
                {article.map((item,index) => (
                    <ArticleCardDashboard 
                        key={item.id} 
                        title={item.title}
                        image={item.img}
                        content={item.text}
                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default DashboardArticles