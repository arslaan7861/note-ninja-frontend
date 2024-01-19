import React from "react";
import { NavLink } from "react-router-dom";
import { Home } from "./icons/nav";
import { useSelector } from "react-redux";
import { defaultProfile } from "../assets/profile";
import Upload from "./icons/home";

function Navbar() {
  const { isLoggedin } = useSelector((state) => state.user);

  return (
    <nav
      className={`w-screen z-40 top-0 text-txtclr shrink-0 h-16 flex items-center justify-between px-4 fixed backdrop-blur-xl`}
    >
      <h1 className="md:text-3xl sm:text-xl text-lg text-primary uppercase font-bold">
        note ninja
      </h1>
      <section className="flex md:gap-7 gap-5 items-center ">
        <NavLink
          to={"/about"}
          className={({ isActive }) => {
            return isActive
              ? "hidden"
              : "text-sm hidden md:block md:text-md hover:scale-110 font-semibold uppercase";
          }}
        >
          About us
        </NavLink>
        <NavLink
          to={"/"}
          className={({ isActive }) => {
            return isActive ? "hidden" : "h-7 aspect-square text-primary  ";
          }}
        >
          <Home />
        </NavLink>
        {/* upload button  */}
        <NavLink
          to="/uploads"
          className={({ isActive, isPending }) => {
            return isActive ? "hidden" : "h-9 p-1 aspect-square text-primary";
          }}
        >
          <Upload />
        </NavLink>

        {!isLoggedin ? (
          <NavLink
            to={"/user"}
            className={({ isActive }) => {
              return isActive
                ? "hidden"
                : "text-xs sm:text-sm md:text-md tracking-wider shadow-3dbtn hover:scale-110 bg-primary p-2 px-4 rounded-full text-txtbtn font-semibold uppercase transition-all";
            }}
          >
            Login
          </NavLink>
        ) : (
          <NavLink
            to={"/user/profile"}
            className={({ isActive, isPending }) => {
              return isActive ? "hidden" : "h-12 w-12";
            }}
          >
            <img
              src={defaultProfile}
              alt=""
              className="h-full w-full rounded-full"
            />
          </NavLink>
        )}
      </section>
    </nav>
  );
}

export default Navbar;
