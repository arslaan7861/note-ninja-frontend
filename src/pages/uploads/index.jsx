import React, { useEffect } from "react";
import Upload from "../../components/icons/home";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import UploadedFile from "../../components/cards/uploadedFile";

const Uploads = () => {
  const { isLoggedin } = useSelector((state) => state.user);
  const { myUploads } = useSelector((state) => state.uploads);

  return (
    <>
      {!isLoggedin ? (
        <>
          <h1 className="w-full h-full text-center flex flex-col items-center justify-center p-7 text-txtclr text-2xl uppercase gap-2">
            please login to see your uploads
            <NavLink
              to="/user"
              className="text-xs sm:text-sm md:text-md tracking-wider shadow-3dbtn hover:scale-110 bg-primary p-2 px-4 rounded-full text-txtbtn font-semibold uppercase transition-all block w-fit"
            >
              tap to login
            </NavLink>
          </h1>
        </>
      ) : (
        <div className="h-screen w-screen overflow-y-scroll scrollbar-none grid grid-cols-1 auto-rows-min gap-7 sm:grid-cols-2 md:grid-cols-4 p-4 pt-20">
          <UploadBtn />
          {myUploads.length === 0 ? (
            <NavLink
              to={"/uploads/upload"}
              className="h-full w-full text-xl font-extrabold text-gray-600 uppercase text-center flex justify-center items-center"
            >
              you don't have any uploads <br /> tap to upload
            </NavLink>
          ) : (
            <>
              {" "}
              {myUploads.map((up) => (
                <UploadedFile key={up._id} {...up} />
              ))}
            </>
          )}
        </div>
      )}
    </>
  );
};

const UploadBtn = () => {
  return (
    <NavLink
      to={"/uploads/upload"}
      className=" fixed bottom-10 right-10 z-50 bg-primary w-14 aspect-square rounded-full p-4 shadow-3dbtn text-txtbtn"
    >
      <Upload></Upload>
    </NavLink>
  );
};

export default Uploads;
