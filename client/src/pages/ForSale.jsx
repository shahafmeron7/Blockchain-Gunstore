import React, { useState, useContext, useEffect } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { WeaponCardForSale } from "../components/WeaponCardForSale";
import SideBar from "../components/SideBar";
import { motion,AnimatePresence } from "framer-motion";

function ForSale() {
  const [toggle, setToggle] = useState(Date.now());
  const [selectedWeaponType, setSelectedWeaponType] = useState("All");
  const [filtered, setFiltered] = useState([]);
  const {
    currentAccount,
    weaponsForSale,
    handleWeaponIdleTime,
    getWeaponsForSale,
  } = useContext(TransactionContext);

  useEffect(() => {
    getWeaponsForSale();
  }, [weaponsForSale]);

  useEffect(() => {
    let handle = setTimeout(() => setToggle((prevToggle) => !prevToggle), 5000);
    return () => {
      weaponsForSale.map((weapon) => {
        handleWeaponIdleTime({
          _id: weapon._id,
          last_modified: weapon.last_modified,
          weapon_training: weapon.weapon_training,
          weapon_price: weapon.weapon_price,
          weapon_type: weapon.weapon_type,
        });
        clearTimeout(handle);
      });
    };
  }, [toggle]);

  return (
    <motion.div className="flex md:flex-row flex-col justify-center gradient-bg-welcome">
      <div className="text-white py-12 px-8">
        <SideBar
          selected={selectedWeaponType}
          setSelectedWeaponType={setSelectedWeaponType}
          weapons={weaponsForSale}
          setFiltered={setFiltered}
          forSale={true}
        />
      </div>
      {currentAccount ? (
        <div className="flex flex-wrap justify-center items-center mt-10">
          <AnimatePresence>
            {filtered.map((weapon) => (
              <WeaponCardForSale
                timestamp={weapon.timestamp}
                key={weapon._id}
                id={weapon._id}
                owner={weapon.account_metamask_address}
                weapon={weapon.weapon_name}
                price={weapon.weapon_price}
                url={weapon.weapon_url}
                type={weapon.weapon_type}
                training={weapon.weapon_training}
              />
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <div className="flex justify-center items-center flex-col text-white">
          <h1 className="py-12 px-8 font-semibold">
            Login to Metamask to view our weapons.
          </h1>
        </div>
      )}
    </motion.div>
  );
}

export default ForSale;
