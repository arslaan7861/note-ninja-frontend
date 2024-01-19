import React from "react";
import { useSelector } from "react-redux";

function Log() {
  const { log } = useSelector((state) => state.loaders);

  return (
    <section className="h-screen pointer-events-none w-screen flex flex-col items-center absolute justify-end pb-32 max-h-screen overflow-clip">
      <div className="absolute py-2 px-4 z-[60] text-primary backdrop-blur-sm rounded-full border-[.5px] border-white  capitalize text-sm bg-semitrans animate-pop">
        {log.msg}
      </div>
    </section>
  );
}

export default Log;
