import Trancaction from "./Transaction/Transaction";
import "../TransactionHistory/TransactionHistory.css";

export default function Transactions({ items }) {
  console.log(items);

  return (
    <table>
      <thead className="transactions-header">
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((transaction) => (
          <tr className="transactions-table" key={items.id}>
            <Trancaction transaction={transaction} />
          </tr>
        ))}
      </tbody>
    </table>
  );
}
