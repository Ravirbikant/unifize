import React, { useState } from "react";
import "./transactionTable.css";

const TransactionsTable = ({ transactions }) => {
  const [hoveredRow, setHoveredRow] = useState(null);

  return (
    <div>
      <table className="table-container">
        <thead>
          <tr className="header-row">
            <th style={{ width: "12%" }}>
              Date <span>(GMT+5.30)</span>
            </th>
            <th style={{ width: "30%" }}>To/From</th>
            <th style={{ width: "20%" }}>Amount</th>
            <th style={{ width: "18%" }}>Currency</th>
            <th style={{ width: "12%" }}>Type</th>
            <th
              style={{
                textAlign: "center",
              }}
            >
              Attachment
            </th>
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
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div
                    className="avatar"
                    style={{
                      background: "#cfe5fd",
                      fontSize: "10px",
                      margin: "0",
                    }}
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
                  <div className="avatar">+</div>
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
