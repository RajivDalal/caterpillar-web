// components/Sidebar.tsx

"use client";

import { Menu } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

const Sidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => setIsExpanded(!isExpanded);

  return (
    <>
    <div className='flex flex-col justify-start items-start h-full'>

      <div className="flex items-center justify-center py-1">

        <div className='px-5 py-1'>
        <Menu onClick={toggleSidebar} className="w-6 h-6"/>
        </div>

        <div className="flex items-center justify-start">
          <Image src={'/logo.svg'} alt={'CATLogo'} width={104} height={104}/>
        </div>

      </div>

      <div
        className={` flex flex-col h-full ${isExpanded ? 'w-64' : 'w-16'} bg-transparent text-gray-800 transition-all duration-300 ease-in-out`}
      >
        {/* Logo */}
        <div className="flex items-center justify-center py-4 cursor-pointer">
          <img src="/bull.png" alt="bull" className="w-8 h-8" />
        </div>

        {/* Expanded Navigation Links */}
        {isExpanded && (
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
        )}

        {/* Always Visible Icons */}
        {!isExpanded && (
          <div className="flex flex-col items-center justify-center space-y-4 py-4">
            <img src="/Calendra.png" alt="Icon 1" className="w-8 h-8" />
            <img src="/Chat.png" alt="Icon 2" className="w-8 h-8" />
          </div>
        )}

        {/* Shifted Icons when Expanded */}
        {isExpanded && (
          <div className="flex flex-col items-center justify-center space-y-4 mt-auto py-4">
            <img src="/Calendra.png" alt="Icon 1" className="w-8 h-8" />
            <img src="/Chat.png" alt="Icon 2" className="w-8 h-8" />
          </div>
        )}

        {/* Settings Icon */}
        <div className="mt-auto">
          <div className="flex items-center justify-center py-4">
            <div className="flex items-center cursor-pointer">
              <img src="/Setting.png" alt="Settings" className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>

    </div>
    </>
  );
};

export default Sidebar;
