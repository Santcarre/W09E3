import React from 'react';

export const TransactionList = () => {
  return (
    <>
      <h3>Lista De Turnos</h3>
      <ul className="list">
        <li className="minus">
          Cash <span>-400</span>
          <button className="delete-btn"></button>
        </li>
      </ul>
    </>
  );
};
