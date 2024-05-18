import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle, BsWallet2 } from "react-icons/bs";
import { Services } from "../components";

const style =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Home = () => {
  const { connectWallet, currentAccount } = useContext(TransactionContext);
  const shortAddress = `${currentAccount.slice(0, 5)}…${currentAccount.slice(
    currentAccount.length - 4
  )}`;

  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className="flex md:flex-row w-2/3  flex-col items-start justify-around md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start flex-col md:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Buy Weapons <br /> across the world
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Explore the Crypto world.
            <br /> Buy and sell weapons easily with our Gun Shop.
          </p>
          {!currentAccount && (
            <div className="grid gap-8 items-center justify-center px-4 py-7">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <button className="relative px-7 py-4 bg-black rounded-full leading-none flex items-center divide-x divide-gray-600" onClick={connectWallet}>
                <span className="flex items-center space-x-5">
                  <BsWallet2 className="text-pink-500" fontSize={20}/>

                  <span className="pr-6 text-gray-100">Connect Wallet</span>
                </span>
              </button>
            </div>
          </div>
          )}
          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${style}`}>Blockchain</div>
            <div className={style}>Security</div>
            <div className={`sm:rounded-tr-2xl ${style}`}>Ethereum</div>
            <div className={`sm:rounded-bl-2xl ${style}`}>Web 3.0</div>
            <div className={style}>Low Fees</div>
            <div className={`rounded-br-2xl ${style}`}>Reliability
            </div>
          </div>

        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full md:mt-0 mt-10">
          {/* Eth Credit Card Div */}
          
          <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card transition-all duration-500 hover:shadow-xl ">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff"/>

                </div>
                  <BsInfoCircle fontSize={17} color="#fff"/>
              </div>
              <div className="">
                  <p className="text-white font-light text-sm">
                    {currentAccount ? shortAddress :"Address"}
                  </p>
                  <p className="text-white font-semibold text-lg mt-1">
                    Etheruem Card
                  </p>
              </div>
            </div>
          </div>
        </div>


      </div>
      <div className="w-2/3">

        <Services/>
      </div>
    </div>

   
  );
};

export default Home;
