import React from "react";
import { Link } from "react-router-dom";

const UploadedFile = ({
  course,
  fileId,
  subject,
  unit,
  uploader,
  webContentLink,
  webViewLink,
  year,
  _id,
}) => {
  return (
    <Link
      to={`/note`}
      state={{
        course,
        fileId,
        subject,
        unit,
        uploader,
        webContentLink,
        webViewLink,
        year,
        _id,
      }}
      className="h-max shrink-0 sm:h-28 px-4 text-txtclr relative shadow-2xl overflow-hidden z-10 flex items-center gap-2 bg-bgSecondary col-span-1"
    >
      <img
        src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/intriguing-thriller-book-cover-design-template-3d1c88f0ad32678f487a32f8c778c3b1.jpg?ts=1698537791"
        className="w-12 sm:w-14 "
        alt=""
      />
      <section className="h-5/6 w-max pr-0 flex flex-col p-2">
        <h3 className="line-clamp-1 capitalize font-bold">{subject}</h3>
        <p className="sm:text-sm text-xs font-semibold capitalize">
          unit : {unit}
        </p>
        <p className="sm:text-sm text-xs font-semibold capitalize">{`${course} : ${year} year`}</p>
        <strong className="text-xs sm:text-sm">uploaded by : {uploader}</strong>
      </section>
    </Link>
  );
};

export default UploadedFile;
