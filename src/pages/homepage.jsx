import React from "react";
import Download from "../components/icons/card";
import { useSelector } from "react-redux";
import UploadedFile from "../components/cards/uploadedFile";
import Spinner from "../components/loaders/spinner";
import { Link } from "react-router-dom";

function HomePage() {
  const { uploads } = useSelector((state) => state.uploads);
  return (
    <section
      id="parallax-cont"
      className="h-screen w-screen overflow-y-auto overflow-x-hidden scrollbar-none snap-y snap-mandatory"
    >
      {/* Global Loader  */}

      {/* *  HERO SECTION  */}
      <div
        id="hero-sec"
        className="snap-center -z-20 hero-sec h-screen w-full items-center bg-bgm md:bg-bg8 bg-bottom sm:bg-left-top bg-cover"
      >
        {/* text  */}
        <article
          id="hero-txt"
          className="h-full w-full flex  flex-col justify-center items-center md:w-1/2"
        >
          <section>
            <h1 className="sm:text-3xl text-2xl md:items-start capitalize w-full gap-3 items-center flex flex-col">
              share your class notes with
              <span className="sm:text-6xl  text-4xl font-bold uppercase text-primary">
                note ninja
              </span>
              <Link
                to={"/uploads"}
                className="uppercase  text-sm sm:text-xl bg-primary px-4 py-2 text-txtbtn font-semibold"
              >
                tap to Upload
              </Link>
            </h1>
          </section>
        </article>
      </div>
      {/* notes  */}
      <div className=" snap-center h-screen relative z-10 w-screen grid grid-cols-1 sm:grid-cols-2 auto-rows-min md:grid-cols-3 lg:grid-cols-4 p-4 gap-4 pb-4 bg-bgPrimary pt-16 overflow-y-auto scrollbar-none">
        {/* serch bar  */}
        <section className="col-span-1 w-full z-30 sm:col-span-2 md:col-span-3 lg:col-span-4 flex sm:flex-row flex-col bg-bgSecondary gap-4 justify-between items-center sticky top-0  max-h-10">
          <input
            type="text"
            className="shadow-md outline-none w-full h-10 p-4 text-primary  placeholder:text-primary font-semibold"
            placeholder="Search....."
          />
        </section>
        {uploads.length <= 0 ? (
          <Spinner />
        ) : (
          <>
            {uploads.map((up) => (
              <UploadedFile key={up._id} {...up} />
            ))}
          </>
        )}
      </div>
    </section>
  );
}

export const Card = () => {
  return (
    <article className="h-24 shrink-0 sm:h-28 px-4 text-txtclr relative shadow-2xl overflow-hidden z-10 flex items-center gap-2 bg-bgSecondary">
      <button className="sm:h-7 h-6 aspect-square absolute text-primary top-2 right-2">
        <Download />
      </button>
      <img src="vite.svg" className="w-12 sm:w-14 " alt="" />
      <section className="h-5/6 flex flex-col p-2">
        <h3 className="md:text-lg text-lg capitalize">data structure</h3>
        <p className="sm:text-sm text-xs">second year</p>
        <strong className="text-xs sm:text-sm">uploaded by : Arslaan</strong>
      </section>
    </article>
  );
};

export default HomePage;
