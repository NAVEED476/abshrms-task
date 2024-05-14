import React from "react";
import "./AddCustomer.css";

const AddCustomer = () => {
  return (
    <div className="customer-creation">
      <h2 className="company-details-title">Customer Creation</h2>
      <div className="container">
        <h3>Company Details</h3>
        <div className="company-details">
          <div className="form-group">
            <input
              type="text"
              className="input-box"
              placeholder="Company Name*"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="input-box"
              id="gstin-number"
              placeholder="GSTIN Number*"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="input-box"
              id="import-export-code"
              placeholder="Import Export Code*"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="input-box"
              id="phone-number"
              placeholder="Phone Number*"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="input-box"
              id="email"
              placeholder="E-mail ID*"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="input-box"
              id="website"
              placeholder="Website*"
            />
          </div>
        </div>
        <h3>Address Details</h3>
        <div className="address-details">
          <div className="form-group">
            <input
              type="text"
              id="address-line-1"
              placeholder="Address Line 1*"
              className="address-line"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="address-line-2"
              placeholder="Address Line 2*"
              className="address-line"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="city"
              placeholder="City*"
              className="input-box"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="state"
              placeholder="State*"
              className="input-box"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="pincode"
              placeholder="Pincode*"
              className="input-box"
            />
          </div>
        </div>

        <h3>Contact Person</h3>
        <div className="company-details">
          <div className="form-group">
            <input
              type="text"
              className="input-box"
              placeholder="POC Name*"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="input-box"
              id="gstin-number"
              placeholder="Job Title*"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="input-box"
              id="import-export-code"
              placeholder="Contact Number 1*"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="input-box"
              id="phone-number"
              placeholder="Contact Number 2*"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="input-box"
              id="email"
              placeholder="Contact E-mail ID*"
            />
          </div>
        </div>

        <h3>Address Details</h3>
        <div className="company-details">
          <div className="form-group">
            <input
              type="text"
              className="input-box"
              placeholder="Authorised Person Name*"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="input-box"
              id="gstin-number"
              placeholder="Authorised Person Designation*"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="input-box"
              id="import-export-code"
              placeholder="Authorised Person Contact Number*"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="input-box"
              id="phone-number"
              placeholder="Authorised Person Contact Number*"
            />
          </div>
        </div>
      </div>

      <div class="btn-container">
        <div className="add-button cancel">Cancel</div>
        <div className="add-button save">Save &amp; Continue</div>
      </div>
    </div>
  );
};

export default AddCustomer;
