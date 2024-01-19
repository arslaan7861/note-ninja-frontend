import React from "react";

function Spinner() {
  return (
    <div className="h-screen absolute top-0 w-full flex flex-col justify-center items-center ">
      <span className=" relative w-32 sm:w-1/5 aspect-square rounded-full flex flex-col items-center justify-center uppercase animate-bounce">
        <span className="h-full w-full absolute rounded-full border-t-transparent border-b-transparent animate-spin border-4 border-primary"></span>
        loading...
      </span>
    </div>
  );
}

export default Spinner;
