import React from 'react';
import './CustomerCreation.css';

const CustomerCreation = () => {
  return (
    <div className="container">
      <div className="card">
        <i className="fas fa-users icon"></i>
        <h3 className="title">Total Customers</h3>
        <p className="value">0</p>
      </div>
      <div className="card">
        <i className="fas fa-user-check icon"></i>
        <h3 className="title">Active Customers</h3>
        <p className="value">0</p>
      </div>
      <div className="card">
        <i className="fas fa-user-times icon"></i>
        <h3 className="title">InActive Customers</h3>
        <p className="value">0</p>
      </div>
      <div className="card">
        <i className="fas fa-rupee-sign icon"></i>
        <h3 className="title">Credit Customers</h3>
        <p className="value">0</p>
      </div>
      <div className="card">
        <i className="fas fa-money-bill-wave icon"></i>
        <h3 className="title">Cash In Advance</h3>
        <p className="value">0</p>
      </div>
    </div>
  );
};

export default CustomerCreation;