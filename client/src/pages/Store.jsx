import React, { useContext, useState } from "react";
import weaponsData from "../weapons/weaponsHardCoded";
import { WeaponCardStore } from "../components/WeaponCardStore";
import SideBar from "../components/SideBar";
import { TransactionContext } from "../context/TransactionContext";
import { motion, AnimatePresence } from "framer-motion";

function Store() {
  const { currentAccount } = useContext(TransactionContext);
  const [selectedWeaponType, setSelectedWeaponType] = useState("All");
  const [filtered, setFiltered] = useState([]);

  return (
    <motion.div
      className="flex md:flex-row flex-col w-full justify-center gradient-bg-welcome"
    >
      <div className="text-white py-12 px-8">
        <SideBar
          selected={selectedWeaponType}
          setSelectedWeaponType={setSelectedWeaponType}
          weapons={weaponsData}
          setFiltered={setFiltered}
        />
      </div>
      {currentAccount ? (
        <div className="flex flex-wrap justify-center items-center mt-10">
          <AnimatePresence>
            {filtered.map((weapon) => (
              <WeaponCardStore
                key={weapon.id}
                weapon={weapon.name}
                price={weapon.price}
                url={weapon.img}
                type={weapon.weapon_type}
                desc={weapon.desc}
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

export default Store;
