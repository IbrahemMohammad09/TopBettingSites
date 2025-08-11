import React, { useState } from 'react'

const home = () => {
    const buttons = [
        { id: 1, name: "Bouns" },
        { id: 2, name: "PayPal" },
        { id: 3, name: "PaySafe" },
        { id: 4, name: "New sites" },
    ]

    const [activeIndex, setActiveIndex] = useState(0)  // هنا

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="p-10 text-[#00FF88] text-xl font-bold">Top Betting Sites</h1>
            <div className='flex items-center justify-center shadow-bottom w-full'>
                {buttons.map((item, index) => (
                    <button
                        key={item.id}
                        onClick={() => setActiveIndex(index === activeIndex ? null : index)}
                        className={`
                            cursor-pointer px-[25px] py-[12px] font-semibold text-base border-0 bg-transparent
                            border-b-3 transition-all duration-300 ease-linear mx-[10px] whitespace-nowrap
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
        </div>
    )
}

export default home
