import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify-icon/react";
import { useNavigate } from "react-router-dom";
import { BsFilePostFill } from "react-icons/bs";
import { LiaClipboardCheckSolid } from "react-icons/lia";
import { FaPeopleGroup } from "react-icons/fa6";
import sidBarImage from "../../assets/sidebar.png";
import './Nav.css'

const Nav = () => {
    const navigate = useNavigate();
  const location = useLocation();
  const Menus = [
    {
      name: "Home",
      icon: "iconamoon:notification-light",
    },
    { name: "notification", icon: "jam:message-alt" },
    { name: "profile", icon: "bx:user" },
  ];

  // Get the current location
  const [navLinks, setNavLinks] = useState([
    {
      title: "Home",
      icon: <Icon icon="mingcute:grid-2-fill" className="bg-transparent" />,
      path: "/",
    },
    {
      title: "Opportunities",
      icon: <BsFilePostFill className="bg-transparent" />,
      path: "/opportunities",
    },
    {
      title: "Wishlist",
      icon: <LiaClipboardCheckSolid className="bg-transparent" />,
      path: "/wishlist",
    },
    {
      title: "Enquiries",
      icon: <FaPeopleGroup className="bg-transparent" />,
      path: "/enquiries",
    },
    {
      title: "Forum Management",
      icon: <FaPeopleGroup className="bg-transparent" />,
      path: "/forum",
    },
  ]);

  return (
    <>
      <nav className="w-full h-16 z-50 fixed flex justify-between bg-blue-900   top-0 left-0">
        <div className="text-white px-10 bg-blue-900 cursor-pointer flex  py-4 font-serif">
          <Link to="/">
            <h1 className="text-white  bg-blue-900 cursor-pointer  font-semibold text-3xl  font-serif">
              Prolio
            </h1>
          </Link>
          <span className="text-white text-lg bg-blue-900 px-6 py-1">
            {" "}
            Categories
          </span>
        </div>

        <div className="flex  w-full  bg-blue-900 items-center relative">
          <input
            type="text"
            className="bg-blue-900 px-9 rounded-lg text-lg text-white  border-gray-500 border w-4/5  h-10 focus:outline-none"
            placeholder="Search"
          />
          <svg
            className="h-4 w-6 bg-blue-900 absolute mx-3 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M20 20l-4.579-4.579M8 15a7 7 0 100-14 7 7 0 000 14z"></path>
          </svg>
          <div className="ml-12 w-32 h-10 rounded-lg pt-2">
            <Link to="/joinprolio">
              <button className="w-full text-blue-900 font-semibold ">
                Join Prolio
              </button>
            </Link>
          </div>
        </div>
        <div className="bg-blue-900 mx-14   flex justify-center items-center">
          {Menus.map((menu, i) => (
            <div
              key={i}
              className="w-9 h-9 rounded-full items-center mt-2 ml-4 pr-2 flex justify-center cursor-pointer"
            >
              <Link to={menu.path}>
                <Icon
                  className="text-blue-900 text-2xl  w-4 h-4  "
                  icon={menu.icon}
                />
              </Link>
            </div>
          ))}
        </div>
      </nav>

      <div className="md:w-[230px] left-0 overflow-hidden w-[60px] bg-white flex flex-col fixed h-full ">
        <div className="w-full h-[calc(100vh-70px)] flex flex-col items-start gap-2 border-slate-300 bg-[#fff] py-5 relative">
          {navLinks.map((link, index) => (
            <Link
              key={link.title}
              to={link.path}
              className={`flex items-center gap-2 w-full hover:bg-blue-50 px-6 py-3 cursor-pointer ${
                location.pathname === link.path
                  ? "bg-blue-200 text-blue-900"
                  : "bg-transparent text-gray-500"
              }`}
            >
              {link.icon}
              <span className="font-semibold bg-transparent text-[15px]">
                {link.title}
              </span>
              {location.pathname === link.path && (
                <div className="absolute right-0 h-7 rounded bg-blue-900 w-1" />
              )}
            </Link>
          ))}
        </div>
        <div className="bg-transparent w-full h-64">
          <img
            className="bg-transparent object-center bg-fixed"
            src={sidBarImage}
            alt="sidebarImage"
          />
        </div>
      </div>
    </>
  );
};



export default Nav
