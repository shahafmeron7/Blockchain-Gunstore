import React, { useContext,useEffect } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { TransactionCard } from '../components/TransactionCard'

const Transactions = () => {
  const { currentAccount, accountTransactions } = useContext(TransactionContext);

  // Filter transactions related to the current account
  const filteredTransactions = accountTransactions.filter(transaction =>
    transaction.addressFrom.toLowerCase() === currentAccount.toLowerCase() ||
    transaction.addressTo.toLowerCase() === currentAccount.toLowerCase()
  );
  return (
    <div className="flex w-full justify-center items-center 2xl:px-20">
      <div className="flex flex-col md:p-12 py-12 px-4">
        <h3 className="text-white text-3xl text-center my-2">Transactions List</h3>
        {currentAccount ? (
          filteredTransactions.length > 0 ? (
            <div className="flex flex-wrap justify-center items-center mt-10">
              {filteredTransactions.map((transaction, i) => (
                <TransactionCard
                  key={i}
                  weapon={transaction.weapon}
                  amount={transaction.amount}
                  addressFrom={transaction.addressFrom}
                  timestamp={transaction.timestamp}
                  type={transaction.weaponType}
                  url={transaction.weaponUrl}
                  addressTo={transaction.addressTo}
                />
              ))}
            </div>
          ) : (
            <div className="text-center text-white">
              <h2 className="text-xl font-semibold py-8">No transactions found.</h2>
            </div>
          )
        ) : (
          <div className="flex justify-center items-center flex-col text-white">
            <h1 className="py-12 px-8 font-semibold">
              Login to Metamask to view your transactions.
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Transactions;