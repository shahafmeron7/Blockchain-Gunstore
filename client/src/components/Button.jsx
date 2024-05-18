import React from 'react'

export const Button = ({index,number,text,onClick}) => {
  return (
    <div
    className="cursor-pointer bg-black mb-1 p-3 px-5 md:w-4/5 w-full mt-1 rounded-3xl shadow-2xl hover:bg-opacity-60 transition-all duration-50"
    onClick={() => onClick(index)}
  >
    <p className="text-pink-500 font-bold">{number} x {text}</p>
  </div>
  )
}

export default Button