import React, { useContext, useState } from "react";
import { FaEthereum } from "react-icons/fa";
import { Button } from "./Button";
import { TransactionContext } from "../context/TransactionContext";
import { StyledButton } from './StyledButton'
import { VscTriangleDown, VscTriangleUp } from 'react-icons/vsc'
import { motion } from "framer-motion";
const dictTraining = {
  shooting_range: "Shooting Range",
  basic_training: "Basic Training",
  advanced_training: "Advanced Training",
};


export const WeaponCard = ({
  id,
  price,
  weapon,
  url,
  type,
  training,
  timestamp,
  sale,
  lastModified,
  countTraining,
  oldPrice,
}) => {
  const [forSale, setForSale] = useState(sale);

  const {
    currentAccount,
    handleTrainingPrice,
    handleWeaponForSale,
  } = useContext(TransactionContext);

  const handleTraining = (index) => {
    const weaponAfterTraining = {
      _id: id,
      timestamp: timestamp,
      weapon_name: weapon,
      weapon_type: type,
      weapon_price: price,
      weapon_url: url,
      weapon_training: training,
      training_index: index,
      last_modified: lastModified,
      count: countTraining,
      account_metamask_address: currentAccount,
    };
    handleTrainingPrice(weaponAfterTraining)

  };

  const handleForSale = async () => {
    try {
      setForSale(!forSale);
      const weaponForSale = {
        _id: id,
        timestamp: timestamp,
        weapon_name: weapon,
        weapon_price: price,
        weapon_type: type,
        weapon_training: training,
        weapon_url: url,
        weapon_for_sale: !forSale,
      };
      await handleWeaponForSale(weaponForSale);
    } catch (error) {
      console.log(error);
    }
  };

  const calcPercentage = () => {
    let percentage = (price - oldPrice) / oldPrice * 100
    if (Number.isInteger(percentage)) {
      return percentage
    }
    percentage = percentage.toFixed(2)
    const numnString = percentage.toString()
    if (numnString.includes(".00")) return Number(percentage)
    return percentage
  }

  const viewPrice=()=>{
    var price_str = String(price.toFixed(6))
    while(price_str[price_str.length-1] === '0'){
      price_str = price_str.slice(0,price_str.length-1)
    }
    return Number(price_str)
  }

  return (
    <motion.div animate={{opacity: 1,scale:1}} initial={{opacity: 0,scale:0}} exit={{opacity:0,scale:0}} layout className="max-w-sm rounded blue-glassmorphism overflow-hidden shadow-lg m-7 text-white">
      <img
        className="w-full h-48 rounded blue-glassmorphism"
        src={url}
        alt="weapon"
      />

      <div className="px-6 py-4">
        <div className="flex justify-between font-bold text-xl mb-2">
          <div className="px-2">
          {weapon}
          </div>
          <div>
          <p className="flex">
            {viewPrice()}
            <FaEthereum className="mt-1 ml-1 text-pink-500" fontSize={20} />
          </p>

          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full text-[13px]">
          <p className="flex text-[18px] mb-1 font-semibold">
            {price > oldPrice && (<span className="flex text-green-500">
                  {`${calcPercentage()}%`}
                  <VscTriangleUp className="mt-1 ml-1 text-green-500" fontSize={22} />
                </span>) }
                {price < oldPrice && (<span className="flex text-red-500">
                  {`${calcPercentage()}%`}
                  <VscTriangleDown className="mt-1 ml-1 text-red-500" fontSize={22} />
                </span>)}
          </p>
          <span className="font-bold flex mb-1">
            Last Modified:  <p className="px-2 font-semibold">{training.idle_time} Hours </p>
          </span>
          {countTraining < 3 ?

            (<span className="font-bold flex mb-1">
              Training Per Day:  <p className="px-2 font-semibold">{3 - countTraining}</p>
            </span>)
            :
            (<span className="font-bold flex mb-1">
              Training Per Day Limit Reached
            </span>)
          }
          {Object.keys(dictTraining).map((item, index) => (
            <Button
              key={index}
              number={training[item]}
              index={item}
              text={dictTraining[item]}
              onClick={handleTraining}
            />
          ))}
        </div>

      </div>
      <StyledButton
        text={forSale ? "Remove From Sale" : "Sell Weapon"}
        onClick={handleForSale}
      />
    </motion.div>
  );
};
