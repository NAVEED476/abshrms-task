import React from "react";
import "./CustomerList.css";
import download from "../assets/download.svg";

import plus from "../assets/plus.svg";
import printer from "../assets/printer.svg";
import search from "../assets/search.svg";
import sort from "../assets/sort.svg";
import yellowTag from "../assets/yellowTag.svg";
import upload from "../assets/upload.svg";

const CustomerList = () => {
  const customers = [
    {
      customerId: "ABSCUST01",
      customerCompany: "ABShrms",
      phoneNumber: "987654321",
      emailId: "info@abshrms.com",
      address: "ABS, North phase Industrial Estate, 42, 5th C...",
      authorisedPerson: "Augustin Ro",
    },
    {
      customerId: "ABSCUST02",
      customerCompany: "ABSerp",
      phoneNumber: "987654321",
      emailId: "info@abserp.com",
      address: "ABS, North phase Industrial Estate, 42, 5th C...",
      authorisedPerson: "Augustin Ro",
    },
    {
      customerId: "ABSCUST03",
      customerCompany: "ABSokr",
      phoneNumber: "987654321",
      emailId: "info@absokr.com",
      address: "ABS, North phase Industrial Estate, 42, 5th C...",
      authorisedPerson: "Augustin Ro",
    },
  ];

  return (
    <div className="customer-list-container">
      <div className="header">
        <div>
          <input type="text" placeholder="Search" className="search-input" />
          <button className="add-customer-btn">
            <img className="svg-img" src={plus} alt="" /> Add New Customer
          </button>
          <button className="import-customers-btn">
            <img className="svg-img" src={upload} alt="" />
            Import Customers
          </button>
        </div>
        <div>
          <button className="print-btn">
            <img className="svg-img" src={printer} alt="" />
            Print
          </button>
          <button className="download-btn">
            <img className="svg-img" src={download} alt="" />
            Download
          </button>
        </div>
      </div>
      <div className="table-header">
        <div className="header-cell">
          <img className="svg-img yellow-tag-size" src={yellowTag} alt="" />
          Customer ID <img className="svg-img" src={sort} alt="" />
        </div>
        <div className="header-cell">Customer Company <img className="svg-img" src={sort} alt="" /></div>
        <div className="header-cell">Phone Number</div>
        <div className="header-cell">E-mail ID</div>
        <div className="header-cell">Address <img className="svg-img" src={sort} alt="" /></div>
        <div className="header-cell">Authorised Person</div>
      </div>
      <div className="table-body">
        {customers.map((customer, index) => (
          <div key={index} className="table-row">
            <div className="cell">
              <img className="svg-img yellow-tag-size" src={yellowTag} alt="" />
              {customer.customerId}
            </div>
            <div className="cell">{customer.customerCompany}</div>
            <div className="cell">{customer.phoneNumber}</div>
            <div className="cell">{customer.emailId}</div>
            <div className="cell">{customer.address}</div>
            <div className="cell">{customer.authorisedPerson}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerList;
