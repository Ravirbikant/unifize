import React, { useState } from "react";
import "./transactionTable.css";

const TransactionsTable = ({ transactions, lastDateFromPreviousPage }) => {
  const [hoveredRow, setHoveredRow] = useState(null);

  return (
    <div>
      <table className="container">
        <thead>
          <tr className="header-row">
            <th style={{ width: "100px" }}>Date</th>
            <th style={{ width: "300px" }}>To/From</th>
            <th style={{ width: "100px" }}>Amount</th>
            <th style={{ width: "100px" }}>Currency</th>
            <th style={{ width: "100px" }}>Type</th>
            <th style={{ width: "100px", textAlign: "center" }}>Attachment</th>
          </tr>
        </thead>

        <tbody>
          {transactions?.map((item) => (
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
                  <div
                    className="avatar"
                    style={{ background: "#cfe5fd", fontSize: "10px" }}
                  >
                    {item?.to.slice(0, 1).toUpperCase()}
                  </div>
                  {item?.to}
                </div>
              </td>
              <td>
                {item?.amount && (
                  <div
                    className={`amount-data ${
                      item?.type === "CREDIT" && "credit"
                    }`}
                  >
                    {item.currency === "USD" ? "$" : "€"}{" "}
                    {item.amount.toString().split(".")[0]}
                    {item.amount.toString().includes(".") && (
                      <span className="decimal-values">
                        .{item.amount.toString().split(".")[1]}
                      </span>
                    )}
                  </div>
                )}
              </td>
              <td>{item?.currency}</td>
              <td>{item?.type}</td>
              <td>
                <div className="attachment-row">
                  <div className="avatar"> +</div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;
