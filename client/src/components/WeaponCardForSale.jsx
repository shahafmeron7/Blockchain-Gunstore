import React, { useContext, useEffect, useState } from "react";
import {StyledButton} from './StyledButton'
import { TransactionContext } from "../context/TransactionContext";
import Loading from "./Loading";
import { motion } from "framer-motion";

export const WeaponCardForSale = ({
  id,
  price,
  weapon,
  url,
  type,
  training,
  owner,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const { handleNewTransactionFromSale } =
    useContext(TransactionContext);


  const shortAddress = `${owner.slice(0, 5)}…${owner.slice(owner.length - 4)}`;

  const handlePurchase = async () => {
    try {
      const weaponTransaction = {
        _id: id,
        weapon_price: price,
        account_metamask_address: owner,
        weapon_url: url,
        weapon_type: type,
        weapon_name: weapon,
        weapon_training:training
      };
      setIsLoading(true);
      await handleNewTransactionFromSale(weaponTransaction);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const viewPrice=()=>{
    var price_str = String(price.toFixed(6))
    while(price_str[price_str.length-1] === '0'){
      price_str = price_str.slice(0,price_str.length-1)
    }
    return Number(price_str)
  }

  useEffect(() => {}, [isLoading]);
  return (
    <motion.div animate={{opacity: 1,scale:1}} initial={{opacity: 0,scale:0}} exit={{opacity:0,scale:0}} layout className="max-w-sm rounded blue-glassmorphism overflow-hidden shadow-lg m-7 text-white">
      <img
        className="w-full h-48 rounded blue-glassmorphism"
        src={url}
        alt="Sunset in the mountains"
      />

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{weapon}</div>
        <span className="flex">
          <p className="font-semibold text-pink-500 px-2">From:</p>
          {shortAddress}
        </span>
        <span className="flex">
          <p className="font-semibold text-pink-500 px-2">Shooting Range:</p>
          {training.shooting_range}
        </span>
        <span className="flex">
          <p className="font-semibold text-pink-500 px-2">Basic Training:</p>
          {training.basic_training}
        </span>
        <span className="flex">
          <p className="font-semibold text-pink-500 px-2">Advanced Training:</p>
          {training.advanced_training}
        </span>
        <span className="flex">
          <p className="font-semibold text-pink-500 px-2">Last Modified:</p>
          {training.idle_time} Hours
        </span>
      </div>
      {
        //if we are on for sale page we render the page diffrently, from sale page we only show the buy option
        isLoading ? (
          <Loading />
        ) : (
          <StyledButton text={viewPrice()} onClick={handlePurchase} />
        )
      }
    </motion.div>
  );
};
