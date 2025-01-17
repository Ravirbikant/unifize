import React, { useState } from "react";
import "./transactionTable.css";
import { formattedAmount } from "../../utils/util";

const TransactionsTable = ({ transactions }) => {
  const [hoveredRow, setHoveredRow] = useState(null);

  const headerColumns = [
    {
      content: (
        <>
          Date <span>(GMT+5.30)</span>
        </>
      ),
      width: "12%",
    },
    { content: "To", width: "30%" },
    {
      content: "Amount",
      width: "30%",
      textAlign: "right",
      padding: "10px 55px",
    },
    { content: "Currency", width: "10%" },
    { content: "Type", width: "12%" },
    { content: "Attachment", width: "12%", textAlign: "center" },
  ];

  return (
    <div>
      <table>
        <thead>
          <tr>
            {headerColumns?.map((column, index) => (
              <th
                key={index}
                style={{
                  width: column?.width,
                  textAlign: column?.textAlign || "left",
                  padding: column?.padding,
                }}
              >
                {column?.content}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {transactions?.map((item) => (
            <tr
              key={item?.id}
              onMouseEnter={() => {
                setHoveredRow(item?.id);
              }}
              onMouseLeave={() => {
                setHoveredRow(null);
              }}
            >
              <td className="date-cell">
                {(item?.showDate || hoveredRow === item?.id) && item?.date}
              </td>
              <td>
                <div className="name-cell">
                  <div
                    className="avatar"
                    style={{
                      background: "#cfe5fd",
                      fontSize: "10px",
                      fontWeight: "600",
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
                    {formattedAmount(item.amount, item.currency)}
                  </div>
                )}
              </td>
              <td>{item?.currency}</td>
              <td>{item?.type}</td>
              <td>
                <div className="attachment-data">
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
