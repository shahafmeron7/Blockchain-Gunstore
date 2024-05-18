import React from 'react'
import { FaEthereum } from "react-icons/fa";
export const StyledButton = ({text,onClick}) => {
    return (
        <div className="px-6 pt-4 pb-2 mb-2" onClick={()=>onClick()}>
          <div className="grid gap-8 items-start justify-center px-4">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <button className="relative px-3 py-4 bg-black rounded-full leading-none flex items-center divide-x divide-gray-600">
                <span className="flex items-center space-x-5">
                  <FaEthereum className="text-pink-500" fontSize={20} />
                  <span className="pr-6 text-gray-100">{text}</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      );
  }
  
  export default StyledButton