import React from "react";
import { useSelector } from "react-redux";

function GlobalLoader() {
  const { globalLoader, log } = useSelector((state) => state.loaders);
  return (
    <div className="z-50 gap-8 absolute top-0 left-0 bg-semitrans w-screen h-screen flex justify-center flex-col items-center">
      <span className="loader"></span>
      <h4 className="text-lg uppercase text-txtbtn tracking-widest">
        {globalLoader.msg}
      </h4>
    </div>
  );
}

export default GlobalLoader;
