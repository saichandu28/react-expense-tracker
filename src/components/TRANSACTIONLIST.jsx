function TRANSACTIONLIST({ transactions }) {
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((t) => (
          <li key={t.id} className={t.amount < 0 ? "minus" : "plus"}>
            {t.text} <span>{t.amount < 0 ? "-" : "+"}₹{Math.abs(t.amount)}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TRANSACTIONLIST;