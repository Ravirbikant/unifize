import React, { useState } from "react";
import "./transactionTable.css";

const TransactionsTable = ({ transactions, lastDateFromPreviousPage }) => {
  const [hoveredRow, setHoveredRow] = useState(null);

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
          <tr className="header-row">
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
              <td className="date-cell">
                {(item.showDate || hoveredRow === item.id) && item?.date}
              </td>
              <td>
                <div>
                  <div className="avatar" style={{ background: "#cfe5fd" }}>
                    {item?.to.slice(0, 1).toUpperCase()}
                  </div>
                  {item?.to}
                </div>
              </td>
              <td>{item?.amount}</td>
              <td>{item?.currency}</td>
              <td>{item?.type}</td>
              <td>
                <div className="avatar"> +</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;
