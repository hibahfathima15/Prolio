import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify-icon/react";
import { BsFilePostFill } from "react-icons/bs";
import { LiaClipboardCheckSolid } from "react-icons/lia";
import { CiSettings } from "react-icons/ci";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoCubeOutline } from "react-icons/io5";
import { GrAnalytics } from "react-icons/gr";
import { FaRegLightbulb, FaRegQuestionCircle } from "react-icons/fa";
// import sidBarImage from "../../assets/sidebar.png";
import { LuKey } from "react-icons/lu";
// import { useSelector } from "react-redux";

function AdminSidebar() {
  const location = useLocation(); // Get the current location
  // const user = useSelector((state) => state.token.user);

  const [navLinks, setNavLinks] = useState([
    {
      title: "Home",
      icon: <Icon icon="mingcute:grid-2-fill" className="bg-transparent" />,
      path: "/admin",
    },
    {
      title: "Products",
      icon: <IoCubeOutline className="bg-transparent" />,
      path: "/admin/products" ,
    },
    {
      title: "Opportunities",
      icon: <FaRegLightbulb className="bg-transparent" />,
      // path: user ? "/admin/opportunities" : "/login",
    },
    {
      title: "Enquiries",
      icon: <FaPeopleGroup className="bg-transparent" />,
      // path: user ? "/admin/enquiries" : "/login",
    },
    {
      title: "Wishlist",
      icon: <LiaClipboardCheckSolid className="bg-transparent" />,
      // path: user ? "/admin/wishlist" : "/login",
    },
    {
      title: "Analytics",
      icon: <GrAnalytics className="bg-transparent" />,
      // path: user ? "/admin/dashboard" : "/login",
    },
    {
      title: "Access Management",
      icon: <LuKey className="bg-transparent" />,
      path:  "/admin/accesspage" ,
    },
    {
      title: "Faqs",
      icon: <FaRegQuestionCircle className="bg-transparent" />,
      // path: user ? "/admin/faqs" : "/login",
    },
    {
      title: "Setting",
      icon: <CiSettings className="bg-transparent" />,
      // path: user ? "/admin/setting" : "/login",
    },
  ]);

  return (
    <div className="md:w-[230px] left-0 overflow-hidden w-[60px] bg-white flex flex-col fixed h-full hidden md:block ">
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
              <div className="absolute  right-0 h-7 rounded bg-blue-900 w-1" />
            )}
          </Link>
        ))}
      </div>
      <div className="bg-transparent w-full h-64">
        <img
          className="bg-transparent object-center bg-fixed"
          src=""
          alt="sidebarImage"
        />
      </div>
    </div>
  );
}

export default AdminSidebar;