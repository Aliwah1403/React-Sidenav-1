import { ArrowDown, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

const SubMenu = ({ data }) => {
  const { pathname } = useLocation();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  return (
    <>
      <li
        onClick={() => setSubMenuOpen(!subMenuOpen)}
        className={`link ${pathname.includes(data.name) && "text-green-600"}`}
      >
        <data.icon size={23} className="min-w-max" />
        <p className="capitalize flex-1">{data.name}</p>
        <ChevronDown
          size={15}
          className={`${subMenuOpen && "rotate-180"} duration-200`}
        />
       
      </li>
      <motion.ul
        animate={
          subMenuOpen
            ? {
                height: "fit-content",
              }
            : {
                height: 0,
              }
        }
        className="flex flex-col pl-14 text-[0.8rem] font-normal overflow-hidden h-0"
      >
        {data.menus.map((menu) => (
          <li key={menu}>
            {/* 
            from /build/auth
            to /build/hosting
           */}
            <NavLink
              to={`/${data.name}/${menu}`}
              className="link !bg-transparent capitalize"
            >
              {menu}
            </NavLink>
          </li>
        ))}
      </motion.ul>
    </>
  );
};

export default SubMenu;
