function BALANCE({ transactions }) {
  const amounts = transactions.map(t => t.amount);
  const total = amounts.reduce((acc, item) => acc + item, 0);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>₹{total}</h1>
    </>
  );
}

export default BALANCE;