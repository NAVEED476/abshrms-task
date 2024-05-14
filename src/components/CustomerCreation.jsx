import React from "react";
import "./CustomerCreation.css";
import activeCustomer from "../assets/activeCustomer.svg";
import CreditCustomer from "../assets/CreditCustomer.svg";
import inActveCustomer from "../assets/inActveCustomer.svg";
import totalCustomers from "../assets/totalCustomers.svg";

const CustomerCreation = () => {
  return (
    <>
      <h3 className="create-cusomter-text">Customer Creation</h3>
      <div className="create-customer-container">
        <div className="card">
          <div>
            <img src={totalCustomers} alt="" />
          </div>
          <div>
            <h3 className="title">Total Customers</h3>
            <p className="value">0</p>
          </div>
        </div>
        <div className="card">
          <div>
            <img src={activeCustomer} alt="" />
          </div>
         <div>
         <h3 className="title">Active Customers</h3>
          <p className="value">0</p>
         </div>
        </div>
        <div className="card">
          <div>
            <img src={inActveCustomer} alt="" />
          </div>
         <div>
         <h3 className="title">InActive Customers</h3>
          <p className="value">0</p>
         </div>
        </div>
        <div className="card">
         <div>
          <img src={CreditCustomer} alt="" />
         </div>
          <div>
          <h3 className="title">Credit Customers</h3>
          <p className="value">0</p>
          </div>
        </div>
        <div className="card">
          <div>
          <img src={CreditCustomer} alt="" />
          </div>
         <div>
         <h3 className="title">Cash In Advance</h3>
          <p className="value">0</p>
         </div>
        </div>
      </div>
    </>
  );
};

export default CustomerCreation;
