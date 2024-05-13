import React from 'react';
import './CustomerList.css';

const CustomerList = () => {
  const customers = [
    {
      customerId: 'ABSCUST01',
      customerCompany: 'ABShrms',
      phoneNumber: '987654321',
      emailId: 'info@abshrms.com',
      address: 'ABS, North phase Industrial Estate, 42, 5th C...',
      authorisedPerson: 'Augustin Ro'
    },
    {
      customerId: 'ABSCUST02',
      customerCompany: 'ABSerp',
      phoneNumber: '987654321',
      emailId: 'info@abserp.com',
      address: 'ABS, North phase Industrial Estate, 42, 5th C...',
      authorisedPerson: 'Augustin Ro'
    },
    {
      customerId: 'ABSCUST03',
      customerCompany: 'ABSokr',
      phoneNumber: '987654321',
      emailId: 'info@absokr.com',
      address: 'ABS, North phase Industrial Estate, 42, 5th C...',
      authorisedPerson: 'Augustin Ro'
    }
  ];

  return (
    <div className="customer-list-container">
      <div className="header">
        <input type="text" placeholder="Search" className="search-input" />
        <button className="add-customer-btn">+ Add New Customer</button>
        <button className="import-customers-btn">Import Customers</button>
        <button className="print-btn">Print</button>
        <button className="download-btn">Download</button>
      </div>
      <div className="table-header">
        <div className="header-cell">Customer ID</div>
        <div className="header-cell">Customer Company</div>
        <div className="header-cell">Phone Number</div>
        <div className="header-cell">E-mail ID</div>
        <div className="header-cell">Address</div>
        <div className="header-cell">Authorised Person</div>
      </div>
      <div className="table-body">
        {customers.map((customer, index) => (
          <div key={index} className="table-row">
            <div className="cell">{customer.customerId}</div>
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