import React from 'react';
import logo from '/images/logo.png'
const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-welcome mt-20">
    <div className="w-full flex sm:flex-row flex-col justify-center items-center my-4">
        <img src={logo} alt="logo" className="w-32" />
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center">Our Blockchain Project using the Web3.js library<br/> the main JavaScript library for interacting with The Ethereum Blockchain</p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs">@ Shahaf Meron & Dor Skoler</p>
      <p className="text-white text-right text-xs">All rights reserved</p>
    </div>
  </div>
);

export default Footer;