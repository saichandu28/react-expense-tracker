import { useState, useEffect } from "react";
import "./App.css";

import HEADER from "./components/HEADER";
import BALANCE from "./components/BALANCE";
import INCOMEEXPENSES from "./components/INCOMEEXPENSES";
import TRANSACTIONLIST from "./components/TRANSACTIONLIST";
import ADDTRANSACTION from "./components/ADDTRANSACTION";

function App() {

  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : [];
  });

  const addTransaction = (transaction) => {
    setTransactions([transaction, ...transactions]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };

   const editTransaction = (id, text, amount) => {
    setTransactions(
      transactions.map((t) =>
        t.id === id ? { ...t, text, amount } : t
      )
    );
  };

  // save to localStorage
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  return (
    <div className="container">
      <HEADER />
      <BALANCE transactions={transactions} />
      <INCOMEEXPENSES transactions={transactions} />
     <TRANSACTIONLIST
  transactions={transactions}
  onDelete={deleteTransaction}
  onEdit={editTransaction}
/>
      <ADDTRANSACTION onAdd={addTransaction} />
    </div>
    
  );
}

export default App;