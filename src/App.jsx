import { useState } from "react";
import "./App.css";

import HEADER from "./components/HEADER";
import BALANCE from "./components/BALANCE";
import INCOMEEXPENSES from "./components/INCOMEEXPENSES";
import TRANSACTIONLIST from "./components/TRANSACTIONLIST";
import ADDTRANSACTION from "./components/ADDTRANSACTION";

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([transaction, ...transactions]);
  };

  return (
    <div className="container">
      <HEADER />
      <BALANCE />
      <INCOMEEXPENSES />
      <TRANSACTIONLIST transactions={transactions} />
      <ADDTRANSACTION onAdd={addTransaction} />
    </div>
  );
}

export default App;



