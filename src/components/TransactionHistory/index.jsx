import React from 'react';
import '../TransactionHistory/TransactionHistory.css';

export const TransactionHistory = ({ items }) => (
  <table className="transaction-history">
    <thead>
      <tr>
        <th className="col-type">Type</th>
        <th className="col-amount">Amount</th>
        <th className="col currency">Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(item => (
        <tr className={item.id}>
          <td>{item.type}</td>
          <td>{item.amount}</td>
          <td>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
