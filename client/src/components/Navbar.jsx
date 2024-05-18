import React, { useContext, useState } from "react";
import logo from "/images/logo.png";
import { TransactionContext } from "../context/TransactionContext";
import { Link } from "react-router-dom";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { FaEthereum } from "react-icons/fa";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const { currentAccount, connectWallet } = useContext(TransactionContext);
  const shortAddress = `${currentAccount.slice(0, 5)}…${currentAccount.slice(
    currentAccount.length - 4
  )}`;

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <Link to="/">
          <img src={logo} alt="logo" className="w-32 cursor-pointer" />
        </Link>
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Transactions", "Weapons", "For Sale", "Store"].map((item, index) => (
          <Link style={{marginLeft:"10px"}} onClick={()=>setSelectedItem(item)} to={`/${item.split(" ").join("")}`} key={index}>
            <li
              className={
                selectedItem === item
                  ? `border-4 border-transparent border-b-[#ad5389] cursor-pointer mx-4`
                  : `mx-4 cursor-pointer hvr-underline-from-left`
              }
            >
              {item}
            </li>
          </Link>
        ))}

        <div className="grid gap-8 items-start justify-center px-4">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <button
              className="relative px-7 py-4 bg-black rounded-full leading-none flex items-center divide-x divide-gray-600"
              onClick={connectWallet}
            >
              <span className="flex items-center space-x-5">
                <FaEthereum className="text-pink-500" fontSize={20} />

                <span className="pr-6 text-gray-100">
                  {currentAccount ? shortAddress : "Login"}
                </span>
              </span>
            </button>
          </div>
        </div>
      </ul>

      <div className="flex relative transition-all duration-150">
        {/* for mobile use, toggle menu will show the menu of mobile view */}
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
          flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in
          "
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose
                className="cursor-pointer"
                onClick={() => setToggleMenu(false)}
              />
            </li>
            {["Home","Transactions", "Weapons", "For Sale", "Store"].map(
              (item, index) => (
                <Link onClick={()=>{setToggleMenu(false); setSelectedItem(item)}} to={item ==="Home" ? '/' : `/${item.split(" ").join("")}`} key={index}>
                  <li
                    className={
                      selectedItem === item
                        ? `border-4 border-transparent border-b-[#ad5389] cursor-pointer mx-4`
                        : `mx-4 cursor-pointer hvr-underline-from-left`
                    }
                  >
                    {item}
                  </li>
                </Link>
              )
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
