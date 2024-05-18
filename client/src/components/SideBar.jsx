import React, { useContext, useEffect } from "react";
import { weaponsSideBarData } from "../weapons/weaponsNavBarData";
import {GiBullets} from 'react-icons/gi'
import { TransactionContext } from "../context/TransactionContext";

const styleButton = `flex items-center h-12 px-7 mt-5 md:rounded-full transition-all duration-300 hover:bg-gradient-to-r
 from-pink-600 to-purple-600 cursor-pointer`;

const styleButtonMobile = `flex text-[14px] items-center h-[40px] min-w-[100px] px-8 
rounded-full border-2 border-pink-600/100 ml-2 mt-5 transition-all 
duration-300 hover:bg-pink-500 cursor-pointer`;

const SideBar = ({selected,setSelectedWeaponType,weapons,setFiltered,forSale}) => {

  const {currentAccount} = useContext(TransactionContext)

  useEffect(()=>{
      if(forSale){
        let filteredForSale = [];
        if(selected==="All"){
          filteredForSale = weapons.filter((weapon)=>weapon.account_metamask_address!==currentAccount)
        }
        else{
          filteredForSale = weapons.filter((weapon)=>weapon.weapon_type === selected && weapon.account_metamask_address !== currentAccount)
        }
        setFiltered(filteredForSale)
        return
      }
      if(selected==="All"){
        setFiltered(weapons)
        return
      }
      const filtered = weapons.filter((weapon)=>weapon.weapon_type===selected)
      setFiltered(filtered)
  },[selected, weapons])

  return (
    <div className="flex flex-col items-center w-full md:w-60 text-white bg-transparent rounded">
      <div className="flex md:w-full">
        <a className="flex items-center md:w-full text-center px-3 mt-3">
          <span className="ml-2 text-xl font-semibold">Weapon Type</span>
        </a>
      </div>

      <div className="w-4/5 md:w-full md:flex flex-col hidden flex-wrap">
          <a
            onClick={() => setSelectedWeaponType("All")}
            className={`${selected === "All" && "bg-gradient-to-r from-pink-600 to-purple-600"} ${styleButton}`}
          >
            <GiBullets fontSize={28}/>
            <span className="ml-2 text-md font-medium">{"All"}</span>
          </a>
        {weaponsSideBarData.map((item,index)=>(
            <a
            key={index}
            onClick={() => setSelectedWeaponType(item.title)}
            className={`${selected === item.title && "bg-gradient-to-r from-pink-600 to-purple-600"} ${styleButton}`}
          >
            <item.icon fontSize={28} />
            <span className="ml-2 text-md font-medium">{item.title}</span>
          </a>
        ))}
      </div>
        {/* {mobile view menu} */}
      <div className="flex flex-row md:hidden flex-wrap">
      <a
            onClick={() => setSelectedWeaponType("All")}
            className={`${selected === "All" && "border-none bg-pink-500"} ${styleButtonMobile}`}
          >
            <span className="ml-2 text-md font-medium">All</span>
          </a>
       {weaponsSideBarData.map((item,index)=>(
            <a
            key={index}
            onClick={() => setSelectedWeaponType(item.title)}
            className={`${selected === item.title && "border-none bg-pink-500"} ${styleButtonMobile}`}
          >
            <span className="ml-2 text-md font-medium">{item.title}</span>
          </a>
        ))}
      </div>

    </div>
  );
};

export default SideBar;


