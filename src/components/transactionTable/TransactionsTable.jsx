import React, { useState } from "react";
import "./transactionTable.css";

const TransactionsTable = ({ transactions, lastDateFromPreviousPage }) => {
  const [hoveredRow, setHoveredRow] = useState(null);
  console.log(lastDateFromPreviousPage);

  const parsedTransactions = transactions?.map((transaction, index) => {
    return {
      ...transaction,
      showDate:
        (index === 0 && transaction?.date !== lastDateFromPreviousPage) ||
        (index > 0 && transaction?.date !== transactions[index - 1]?.date),
    };
  });

  return (
    <div>
      <table className="container">
        <thead>
          <tr>
            <th>Date</th>
            <th>To/From</th>
            <th>Amount</th>
            <th>Currency</th>
            <th>Type</th>
            <th>Attachment</th>
          </tr>
        </thead>

        <tbody>
          {parsedTransactions?.map((item) => (
            <tr
              key={item?.id}
              onMouseEnter={() => {
                setHoveredRow(item.id);
              }}
              onMouseLeave={() => {
                setHoveredRow(null);
              }}
            >
              <td>{(item.showDate || hoveredRow === item.id) && item?.date}</td>
              <td>{item?.to}</td>
              <td>{item?.amount}</td>
              <td>{item?.currency}</td>
              <td>{item?.type}</td>
              <td>+</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;
