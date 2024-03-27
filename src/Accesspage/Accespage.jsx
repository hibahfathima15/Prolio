import { useState } from "react";
import { Link } from "react-router-dom";
// import Soon from "../../assets/Soon.png";
import Loader from "../Re-use/Loader";
import "./Accesspage.css";
import image from "./../assets/product-image.png";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import ShareIcon from "@mui/icons-material/Share";
import DeleteIcon from "@mui/icons-material/Delete";
import AddBoxIcon from "@mui/icons-material/AddBox";

function Accesspage() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  const DropDownList = ["Control Access", "Admin", "Requests"];

  const [selectedButton, setSelectedButton] = useState(DropDownList[0]);

  const DropDownList1 = ["Approved", "Pending Requests"];

  const [selectedButton1, setSelectedButton1] = useState(DropDownList[0]);

  const data = [
    {
      name: "Mahesh Reddy",
      email: "reddymr@gtechs.com",
      accessLevel: "Admin",
      position: "Administrator",
    },
    {
      name: "Mahesh Reddy",
      email: "reddymr@gtechs.com",
      accessLevel: "Admin",
      position: "Administrator",
    },
    {
      name: "Mahesh Reddy",
      email: "reddymr@gtechs.com",
      accessLevel: "Admin",
      position: "Administrator",
    },
    {
      name: "Mahesh Reddy",
      email: "reddymr@gtechs.com",
      accessLevel: "Admin",
      position: "Administrator",
    },
  ];

  const data1 = [
    {
      requestedby: "reddymr@gtechs.com",
      department: "Admin",
      role: "Administrator",
      email: "nitinjain@vlabs",
      functions: "Functions",
    },
    {
      requestedby: "reddymr@gtechs.com",
      department: "Admin",
      role: "Administrator",
      email: "nitinjain@vlabs",
      functions: "Functions",
    },
    {
      requestedby: "reddymr@gtechs.com",
      department: "Admin",
      role: "Administrator",
      email: "nitinjain@vlabs",
      functions: "Functions",
    },
    {
      requestedby: "reddymr@gtechs.com",
      department: "Admin",
      role: "Administrator",
      email: "nitinjain@vlabs",
      functions: "Functions",
    },
    {
      requestedby: "reddymr@gtechs.com",
      department: "Admin",
      role: "Administrator",
      email: "nitinjain@vlabs",
      functions: "Functions",
    },
    {
      requestedby: "reddymr@gtechs.com",
      department: "Admin",
      role: "Administrator",
      email: "nitinjain@vlabs",
      functions: "Functions",
    },
  ];

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="access-page-main-container">
          <div className="text-1xl">
            {DropDownList.map((value, key) => (
              <div key={key} className="relative inline-block bg-transparent">
                <button
                  type="button"
                  className={`py-3 font-semibold px-6 ${
                    selectedButton === value
                      ? "text-blue-800 border-blue-900"
                      : "bg-transparent text-gray-500"
                  }`}
                  onClick={() => setSelectedButton(value)}
                >
                  {value}
                </button>
                {selectedButton === value && (
                  <hr
                    className="absolute mx-6 border-t-2 border-blue-900"
                    style={{ width: `${value.length}ch`, bottom: "-2px" }}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="line-access"></div>
          {selectedButton === "Control Access" && (
            <div className="control-access-component">
              <div className="control-access-input-container">
                <p className="control-access-label">Created By</p>
                <p className="transparent">:</p>
                <input className="control-access-input"></input>
              </div>
              <div className="control-access-input-container">
                <p className="control-access-label">Department</p>
                <p className="transparent">:</p>
                <select className="control-access-input">
                  <option value="electrical">Electrical</option>
                  <option value="finance">Finance</option>
                </select>
              </div>
              <div className="control-access-input-container">
                <p className="control-access-label">Role</p>
                <p className="transparent">:</p>
                <select className="control-access-input">
                  <option value="Admin">Admin</option>
                  <option value="Owner">Owner</option>
                </select>
              </div>
              <div className="line-access"></div>
              <p className="access-select-product-heading transparent">
                Select Products -
              </p>
              <p className="access-select-product-heading transparent">
                Category
              </p>
              <select className="control-access-category-input">
                <option value="Fashion Accessories & Footwear">
                  Fashion Accessories & Footwear
                </option>
                <option value="Shirts">Shirts</option>
              </select>
              <div className="control-access-products-container">
                <div className="control-access-products">
                  <div
                    className="control-access-product-image"
                    style={{ backgroundImage: `url(${image})` }}
                  ></div>
                  <p className="control-access-product-name">
                    Stainless Steel Box
                  </p>
                  <p className="control-access-product-company">
                    By Anish Industries
                  </p>
                  <p className="control-access-product-price">
                    Price : Rs 72 / Piece
                  </p>
                </div>
                <div className="control-access-products">
                  <div
                    className="control-access-product-image"
                    style={{ backgroundImage: `url(${image})` }}
                  ></div>
                  <p className="control-access-product-name">
                    Stainless Steel Box
                  </p>
                  <p className="control-access-product-company">
                    By Anish Industries
                  </p>
                  <p className="control-access-product-price">
                    Price : Rs 72 / Piece
                  </p>
                </div>
                <div className="control-access-products">
                  <div
                    className="control-access-product-image"
                    style={{ backgroundImage: `url(${image})` }}
                  ></div>
                  <p className="control-access-product-name">
                    Stainless Steel Box
                  </p>
                  <p className="control-access-product-company">
                    By Anish Industries
                  </p>
                  <p className="control-access-product-price">
                    Price : Rs 72 / Piece
                  </p>
                </div>
                <div className="control-access-products">
                  <div
                    className="control-access-product-image"
                    style={{ backgroundImage: `url(${image})` }}
                  ></div>
                  <p className="control-access-product-name">
                    Stainless Steel Box
                  </p>
                  <p className="control-access-product-company">
                    By Anish Industries
                  </p>
                  <p className="control-access-product-price">
                    Price : Rs 72 / Piece
                  </p>
                </div>
              </div>
              <p
                className="access-select-product-heading transparent"
                style={{ marginTop: "30px" }}
              >
                Features -
              </p>
              <div className="control-access-feature-container">
                <div
                  className="control-access-select-all-container"
                  style={{ marginBottom: "10px" }}
                >
                  <div className="control-access-select-all-container-name">
                    Name
                  </div>
                  <div>
                    <div className="control-access-select-all-container-name">
                      Select All
                      <input type="checkbox" />
                    </div>
                  </div>
                </div>
                <div className="control-access-select-all-container">
                  <div className="control-access-select-all-container-name">
                    Enquiries
                  </div>
                  <div>
                    <input type="checkbox" />
                  </div>
                </div>
                <hr style={{ marginBottom: "10px" }} />
                <div className="control-access-select-all-container">
                  <div className="control-access-select-all-container-name">
                    -----
                  </div>
                  <div>
                    <input type="checkbox" />
                  </div>
                </div>
                <hr style={{ marginBottom: "10px" }} />
              </div>
            </div>
          )}
          {selectedButton === "Admin" && (
            <div className="control-admin-component">
              <div className="control-admin-subcomponent">
                <div className="access">Access Accounts</div>
                <div className="create-user">
                  Create New User <AddBoxIcon />
                </div>
                <div className="prolio-access">Prolio access accounts</div>
                <div className="admin">Admin 03</div>
                <div className="admin-line" />
              </div>
              <div className="table-content">
                <table className="headings">
                  <tr className="sub-headings">
                    <th>User Name</th>
                    <th>Email Address</th>
                    <th>Access Level</th>
                    <th>Position</th>
                    <th>Actions</th>
                  </tr>
                  {data.map((user, index) => (
                    <tr className="data" key={index}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.accessLevel}</td>
                      <td>{user.position}</td>
                      <td>
                        {user.actions}
                        <DriveFileRenameOutlineIcon />
                        <ShareIcon />
                        <DeleteIcon />
                      </td>
                    </tr>
                  ))}
                </table>
              </div>
            </div>
          )}
          {selectedButton === "Requests" && (
            <div className="text-1xl">
              {DropDownList1.map((value, key) => (
                <div key={key} className="relative inline-block bg-transparent">
                  <button
                    type="button"
                    className={`py-3 font-semibold px-6 ${
                      selectedButton1 === value
                        ? "text-blue-800 border-blue-900"
                        : "bg-transparent text-gray-500"
                    }`}
                    onClick={() => setSelectedButton1(value)}
                  >
                    {value}
                  </button>
                  {selectedButton1 === value && (
                    <hr
                      className="absolute mx-6 border-t-2 border-blue-900"
                      style={{ width: `${value.length}ch`, bottom: "-2px" }}
                    />
                  )}
                </div>
              ))}
              <div className="line-access"></div>
              {selectedButton1 === "Approved" && (
                <div>
                  <div className="recent">Recent Users</div>
                  <div className="send-req">Send Request</div>
                  <div className="control-approved-subcomponent">
                    <table className="headings1">
                      <tr className="sub-headings1">
                        <th>All</th>
                        <th>Requested by</th>
                        <th>Department</th>
                        <th>Role</th>
                        <th>Email</th>
                        <th>Functions</th>
                        <th>Action</th>
                      </tr>
                      {data1.map((user, index) => (
                        <tr className="data1" key={index}>
                          <td>
                            {user.all}
                            <input type="checkbox" />
                          </td>
                          <td>{user.requestedby}</td>
                          <td>{user.department}</td>
                          <td>{user.role}</td>
                          <td>{user.email}</td>
                          <td>{user.functions}</td>
                          <td>
                            {user.actions}
                            <DriveFileRenameOutlineIcon />
                            <DeleteIcon />
                          </td>
                        </tr>
                      ))}
                    </table>
                  </div>
                </div>
              )}
              {selectedButton1 === "Pending Requests" && <h1>Hello</h1>}
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Accesspage;
