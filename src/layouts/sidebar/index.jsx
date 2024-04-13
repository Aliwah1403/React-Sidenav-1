import { motion } from "framer-motion";

import {
  ArrowLeftFromLine,
  Settings,
  CircleUserRound,
  BarChart3,
  Menu,
  LayoutGrid,
  Database,
  Wrench,
  Truck,
  Banknote,
  LineChart
} from "lucide-react";

import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import Icon from "../../assets/logo.svg";
import { NavLink, useLocation } from "react-router-dom";

import SubMenu from "./SubMenu";

const Sidebar = () => {
  let isTablet = useMediaQuery({ query: "(max-width: 768px)" });
  const { pathname } = useLocation();

  console.log(isTablet, "isTablet");

  // Sidebar open state
  const [isOpen, setIsOpen] = useState(isTablet ? false : true);

  const Sidebar_animation = isTablet
    ? // mobile view
      {
        open: {
          x: 0,
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "4rem",
          transition: {
            damping: 40,
          },
        },
      };

  useEffect(() => {
    if (isTablet) {
      // mobile view
      setIsOpen(false);
    } else {
      // laptop view
      setIsOpen(true);
    }
  }, [isTablet]);

  // close sidenav after pathname change (only on mobile)
  useEffect(() => {
    isTablet && setIsOpen(false);
  }, [pathname]);

  const subMenuList = [
    {
      name: "income",
      icon: Wrench,
      menus: ["auth", "app settings", "storage", "hosting"],
    },
    {
      name: "expense",
      icon: BarChart3,
      menus: ["all", "fuel", "others"],
    },
  ];

  return (
    <div>
      <div
        onClick={() => setIsOpen(false)}
        className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${
          isOpen ? "block" : "hidden"
        }`}
      ></div>
      <motion.div
        variants={Sidebar_animation}
        initial={{ x: isTablet ? -250 : 0 }}
        animate={isOpen ? "open" : "closed"}
        className="bg-white text-gray shadow-xl z-[999] w-[16rem] max-w-[16rem] h-screen overflow-hidden md:relative fixed"
      >
        {/* Logo */}
        <div className="flex items-center gap-2.5 font-medium border-b border-slate-300 py-3 mx-3">
          <img src={Icon} alt="icon" width={45} />
          <span className="text-xl whitespace-pre">Owlee</span>
        </div>

        {/* Menus */}
        <div className="flex flex-col h-full">
          <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1 font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-200 h-[70%] md:h[68%]">
            <li>
              <NavLink to="/" className={"link"}>
                <LayoutGrid size={23} className="min-w-max" />
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/authentication" className={"link"}>
                <Banknote size={23} className="min-w-max"/>
                Expenditure
              </NavLink>
            </li>
            <li>
              <NavLink to="/storage" className={"link"}>
                <Truck size={23} className="min-w-max"/>
                Vehicles
              </NavLink>
            </li>
            <li>
              <NavLink to="/trips" className={"link"}>
                <LineChart size={23} className="min-w-max"/>
                PnL Board
              </NavLink>
            </li>

            {/* Links with submen */}
            {(isOpen || isTablet) && (
              <div className="border-y py-5 border-slate-300">
                <small className="pl-3 text-slate-500 inline-block mb-2">
                  Finances
                </small>
                {subMenuList?.map((menu) => (
                  <div key={menu.name} className="flex flex-col gap-1">
                    <SubMenu data={menu} />
                  </div>
                ))}
              </div>
            )}

            <li>
              <NavLink to="/settings" className={"link"}>
                <Settings size={23} className="min-w-max" />
                Settings
              </NavLink>
            </li>
          </ul>

          {isOpen && (
            <div className="flex-1  text-sm z-50 max-h-48 my-auto whitespace-pre w-full font-medium">
              <div className="flex items-center justify-between border-y border-slate-300 p-4">
                <div>
                  <p>Spark</p>
                  <small>No-cost $0/month</small>
                </div>
                <p className="text-teal-500 py-1.5 px-3 text-xs bg-teal-50 rounded-xl">
                  Upgrade
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Expand Button */}
        <motion.div
          animate={
            isOpen
              ? {
                  x: 0,
                  y: 0,
                  rotate: 0,
                }
              : {
                  x: 0,
                  y: 0,
                  rotate: 180,
                }
          }
          transition={{
            duration: 0,
          }}
          onClick={() => setIsOpen(!isOpen)}
          className="absolute w-fit h-fit z-50 right-0 bottom-5 border border-slate-300 rounded p-1 cursor-pointer md:block hidden"
        >
          <ArrowLeftFromLine size={20} />
        </motion.div>
      </motion.div>
      <div className="m-3 md:hidden" onClick={() => setIsOpen(true)}>
        <Menu size={25} />
      </div>
    </div>
  );
};

export default Sidebar;
