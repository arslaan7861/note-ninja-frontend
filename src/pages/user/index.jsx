import React from "react";
import Login from "./login";
import { Outlet, Route, Routes } from "react-router-dom";
import Register from "./register";

function User() {
  return (
    <div className="h-screen relative w-screen bg-bgSecondary flex items-center justify-center">
      <Outlet />
    </div>
  );
}

export default User;
