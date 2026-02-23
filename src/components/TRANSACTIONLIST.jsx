import { useState } from "react";

function TRANSACTIONLIST({ transactions, onDelete, onEdit }) {
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");
  const [editAmount, setEditAmount] = useState("");

  const startEdit = (t) => {
    setEditId(t.id);
    setEditText(t.text);
    setEditAmount(t.amount);
  };

  const saveEdit = () => {
    onEdit(editId, editText, +editAmount); // ✅ convert to number
    setEditId(null);
  };

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((t) => (
          <li key={t.id} className={t.amount < 0 ? "minus" : "plus"}>
            
            {editId === t.id ? (
              <>
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />

                <input
                  type="number"
                  value={editAmount}
                  onChange={(e) => setEditAmount(e.target.value)}
                />

                <button onClick={saveEdit}>✔</button>
              </>
            ) : (
              <>
                {t.text}
                <span>
                  {t.amount < 0 ? "-" : "+"}₹{Math.abs(t.amount)}
                </span>

                <button onClick={() => startEdit(t)}>✏️</button>

                <button
                  className="delete-btn"
                  onClick={() => onDelete(t.id)}
                >
                  x
                </button>
              </>
            )}

          </li>
        ))}
      </ul>
    </>
  );
}

export default TRANSACTIONLIST;