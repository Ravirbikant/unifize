import React, { useEffect, useState, useRef } from "react";
import TransactionsTable from "../transactionTable/TransactionsTable";
import "./transactionComponent.css";
import tableData from "../../data/tableData";
import { formatDate } from "../../utils/util";

const TransactionComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [transactions, setTransactions] = useState([]);
  const lastSeenDateRef = useRef(null);

  useEffect(() => {
    let pageTransactions = tableData?.[currentPage]?.data?.transactions;
    pageTransactions = pageTransactions.map((transaction) => {
      return {
        ...transaction,
        date: formatDate(transaction.date),
      };
    });

    const lastTransactionDate =
      pageTransactions?.[pageTransactions.length - 1]?.date;

    if (
      lastTransactionDate &&
      (!lastSeenDateRef.current ||
        lastTransactionDate > lastSeenDateRef.current)
    ) {
      console.log("Updating last date");
      lastSeenDateRef.current = lastTransactionDate;
    }
    setTransactions(pageTransactions);
  }, [currentPage]);

  return (
    <div className="table-container">
      <div className="header">
        <span>Transactions</span>
        <div className="pagination-buttons">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            <i class="bx bx-chevron-left"></i>
          </button>
          <button
            disabled={currentPage === 5}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            <i class="bx bx-chevron-right"></i>
          </button>
        </div>
      </div>
      <TransactionsTable
        transactions={transactions}
        lastDateFromPreviousPage={lastSeenDateRef.current}
      />
    </div>
  );
};

export default TransactionComponent;
