import "./Transaction.css";

export default function Trancaction({
  transaction: { type, amount, currency },
}) {
  return (
    <>
      <td className="first-letter-pseudo">{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </>
  );
}
