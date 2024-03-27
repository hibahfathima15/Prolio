import { useState } from "react";
import "./Content.css";
import { Checkbox } from "@mui/material";

const Content = () => {
  return (
    <div>
      <div className="req-info">Request Information</div>
      <div className="req-container">
        <p className="req-label">Requested By</p>
        <p className="req-transparent">:</p>
        <input className="req-input" />
      </div>
      <div className="req-container">
        <p className="req-label">Department</p>
        <p className="req-transparent">:</p>
        <input className="req-input" />
      </div>
      <div className="req-container">
        <p className="req-label">Role</p>
        <p className="req-transparent">:</p>
        <select className="req-input">
          <option value="Admin">------</option>
          <option value="Owner">------</option>
        </select>
      </div>
      <div className="req-line-access" />
      <div className="req-features">Required Features-</div>
      <div className="req-access-feature-container">
        <div
          className="req-access-select-all-container"
          style={{ marginBottom: "10px" }}
        >
          <div className="req-container-name">Name</div>
          <div>
            <div className="req-access-select-all-container-name">
              Select All
              <input type="checkbox" />
            </div>
          </div>
        </div>
        <div className="req-access-select-all-container">
          <div className="req-access-select-all-container-name">
            Enquiries
          </div>
          <div>
            <input type="checkbox" />
          </div>
        </div>
        <hr style={{ marginBottom: "10px" }} />
        <div className="req-access-select-all-container">
          <div className="req-access-select-all-container-name">-----</div>
          <div>
            <input type="checkbox" />
          </div>
        </div>
        <hr style={{ marginBottom: "10px" }} />
      </div>
      <div className="req-line-access" />
      <div className="req-description">Description</div>
      <div className="description-box">Add Description</div>
      <button className="cancel-btn">Cancel</button>
      <button className="send-btn">Send</button>
    </div>
  );
};

export default Content;
