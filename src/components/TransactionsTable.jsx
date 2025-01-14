import React from "react";
import tableData from "../data/tableData";

const TransactionsTable = () => {
  let pageTransactions = tableData?.[1]?.data?.transactions;

  return (
    <div>
      <h2>Transactions</h2>
      <table>
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
          {pageTransactions?.map((item) => (
            <tr key={item?.id}>
              <td>{item?.date}</td>
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
