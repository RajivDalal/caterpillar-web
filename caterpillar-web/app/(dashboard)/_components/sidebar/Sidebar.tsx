// components/Sidebar.tsx

"use client";

import { Menu, Settings } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

const Sidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => setIsExpanded(!isExpanded);

  return (
    <>
    <div className='flex flex-col justify-start items-start h-full select-none'>

      <div className="flex items-center justify-center py-2">

        <div className='pr-2 pl-2 w-[45%] h-full'>
          <button onClick={toggleSidebar} className='h-full w-full flex justify-center items-center bg-transparent hover:bg-slate-500/50 opacity-50 rounded-full'>
            <Menu className="w-7 h-7 cursor-pointer"/>
          </button>
        </div>

        <div className="flex items-center justify-start">
          <Image src={'/logo.svg'} alt={'CATLogo'} width={128} height={128}/>
        </div>

      </div>

      <div
        className={` flex flex-col h-full ${isExpanded ? 'w-64' : 'w-16'} bg-transparent text-gray-800 transition-all duration-300 ease-in-out mx-1`}
      >
        <div className="flex items-center justify-center py-2 px-1 cursor-pointer">
          <img src="/Bulldozer.svg" alt="bull" className="w-8 h-8" />
        </div>

        {/* {isExpanded && (
          <div className="flex-1 flex flex-col space-y-4 mt-4">
            {[{
              src: '/Excavator.png',
              name: 'Excavator'
            }, {
              src: '/Dozaer.png',
              name: 'Dozer'
            }, {
              src: '/Backhoe loader.png',
              name: 'Backhoe Loader'
            }, {
              src: '/Asphalt.png',
              name: 'Asphalt Paver'
            }, {
              src: '/Articulated.png',
              name: 'Articulated Truck'
            }].map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center pl-4 py-2 cursor-pointer`}
              >
                <img src={item.src} alt={item.name} className="w-8 h-8" />
                <div className="ml-4 text-gray-800">{item.name}</div>
              </div>
            ))}
          </div>
        )} */}

        {/* Always Visible Icons */}
        {!isExpanded && (
          <div className="flex flex-col items-center justify-center space-y-4 py-4">
            <img src="/Calendra.png" alt="Icon 1" className="w-8 h-8" />
            <img src="/Chat.png" alt="Icon 2" className="w-8 h-8" />
          </div>
        )}

        {/* Shifted Icons when Expanded */}
        {isExpanded && (
          <div className="flex flex-col items-center justify-center mt-auto space-y-4 py-4">
            <img src="/Calendra.png" alt="Icon 1" className="w-8 h-8" />
            <img src="/Chat.png" alt="Icon 2" className="w-8 h-8" />
          </div>
        )}

        {/* Settings Icon */}
        <div className="mt-auto">
          <div className="flex items-center justify-center py-4">
            <button className="flex items-center cursor-pointer">
              <Settings className="w-8 h-8"/>
            </button>
          </div>
        </div>
      </div>

    </div>
    </>
  );
};

export default Sidebar;
