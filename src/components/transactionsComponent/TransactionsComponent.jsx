import React, { useEffect, useState, useRef } from "react";
import TransactionsTable from "../transactionTable/TransactionsTable";
import "./transactionComponent.css";
import tableData from "../../data/tableData";
import { formatDate } from "../../utils/util";

const TransactionsComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [transactions, setTransactions] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState(0);

  const visitedDatesRef = useRef(new Set());

  useEffect(() => {
    const pageTransactions = tableData?.[currentPage]?.data?.transactions || [];
    setNumberOfPages(tableData?.[currentPage]?.data?.pagination?.total_pages);

    const formattedTransactions = pageTransactions?.map((transaction) => ({
      ...transaction,
      date: formatDate(transaction.date),
    }));

    const transactionsWithShowDate = formattedTransactions?.map(
      (transaction, index) => {
        let showDate;

        if (index === 0) {
          showDate = !visitedDatesRef.current.has(transaction.date);
        } else {
          showDate =
            transaction.date !== formattedTransactions?.[index - 1]?.date;
        }

        return { ...transaction, showDate };
      }
    );

    visitedDatesRef.current.add(
      transactionsWithShowDate?.[transactionsWithShowDate.length - 1]?.date
    );

    setTransactions(transactionsWithShowDate);
  }, [currentPage]);

  return (
    <div className="main-container">
      <div className="header">
        <span>Transactions</span>
        {transactions.length > 0 && (
          <div className="pagination-buttons">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
            >
              <i className="bx bx-chevron-left"></i>
            </button>
            <button
              disabled={currentPage === numberOfPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
            >
              <i className="bx bx-chevron-right"></i>
            </button>
          </div>
        )}
      </div>
      {transactions.length > 0 ? (
        <TransactionsTable transactions={transactions} />
      ) : (
        <div className="loading">
          <h2>Loading...</h2>
        </div>
      )}
    </div>
  );
};

export default TransactionsComponent;
