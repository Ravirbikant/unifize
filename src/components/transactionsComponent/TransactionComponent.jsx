import React, { useEffect, useState, useRef } from "react";
import TransactionsTable from "../transactionTable/TransactionsTable";
import "./transactionComponent.css";
import tableData from "../../data/tableData";
import { formatDate } from "../../utils/util";

const TransactionComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [transactions, setTransactions] = useState([]);
  const lastSeenDateRef = useRef(null);
  const [lastDate, setLastDate] = useState(null);

  useEffect(() => {
    const pageTransactions = tableData?.[currentPage]?.data?.transactions || [];
    const formattedTransactions = pageTransactions.map((transaction) => ({
      ...transaction,
      date: formatDate(transaction.date),
    }));

    console.log(lastDate);
    const transactionsWithShowDate = formattedTransactions.map(
      (transaction, index) => {
        const showDate =
          index === 0
            ? transaction.date !== lastDate
            : transaction.date !== formattedTransactions[index - 1]?.date;

        return {
          ...transaction,
          showDate,
        };
      }
    );

    setTransactions(transactionsWithShowDate);

    setLastDate(
      formattedTransactions[formattedTransactions.length - 1]?.date || null
    );
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
      <TransactionsTable
        transactions={transactions}
        lastDateFromPreviousPage={lastSeenDateRef.current}
      />
    </div>
  );
};

export default TransactionComponent;
