import React, { useEffect, useState, useRef } from "react";
import TransactionsTable from "../transactionTable/TransactionsTable";
import "./transactionComponent.css";
import tableData from "../../data/tableData";
import { formatDate } from "../../utils/util";

const TransactionComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [transactions, setTransactions] = useState([]);

  const visitedDatesRef = useRef(new Set());

  useEffect(() => {
    const pageTransactions = tableData?.[currentPage]?.data?.transactions || [];
    const formattedTransactions = pageTransactions.map((transaction) => ({
      ...transaction,
      date: formatDate(transaction.date),
    }));

    const transactionsWithShowDate = formattedTransactions.map(
      (transaction, index) => {
        let showDate;

        if (index === 0) {
          showDate = !visitedDatesRef.current.has(transaction.date);
        } else {
          showDate =
            transaction.date !== formattedTransactions[index - 1]?.date;
        }

        return { ...transaction, showDate };
      }
    );

    visitedDatesRef.current.add(
      transactionsWithShowDate[transactionsWithShowDate.length - 1].date
    );

    setTransactions(transactionsWithShowDate);
  }, [currentPage]);

  return (
    <div className="main-container">
      <div className="header">
        <span>Transactions</span>
        <div className="pagination-buttons">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            <i className="bx bx-chevron-left"></i>
          </button>
          <button
            disabled={currentPage === 5}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            <i className="bx bx-chevron-right"></i>
          </button>
        </div>
      </div>
      <TransactionsTable transactions={transactions} />
    </div>
  );
};

export default TransactionComponent;
