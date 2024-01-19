import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { postComment } from "../store/functions/uploads";

function NoteView() {
  const { user, isLoggedin } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const { state } = useLocation();
  const [comment, setComment] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!comment) return;
    dispatch(
      postComment({
        comment,
        username: user.username,
        fullname: user.fullname,
      })
    );
  };

  const {
    subject,
    unit,
    uploader,
    webContentLink,
    webViewLink,
    year,
    fileId,
    course,
    _id,
  } = state;

  return (
    <div className="h-full w-full flex pt-16 flex-col gap-4 p-4  items-center">
      <article className="w-full grid  auto-rows-min md:grid-cols-[120px_auto] grid-cols-[96px_auto] gap-4 md:gap-10 item-center h-250">
        <img
          src="https://imgv3.fotor.com/images/gallery/Fiction-Book-Covers.jpg"
          alt=""
          className="w-24 md:w-28"
        />

        <section className="flex justify-between flex-col md:flex-row md:items-center md:pr-7">
          <section>
            <h2 className="text-2xl uppercase font-bold">
              {subject} : {unit}
            </h2>
            <h3 className="font-semibold uppercase">
              {course} - {year} year
            </h3>
            <h4 className="">uploaded by - {uploader}</h4>
          </section>
          <a
            href={webViewLink}
            className="bg-primary shadow-3dbtn text-txtbtn uppercase py-3 text-center rounded-full w-3/4 max-w-[150px]"
          >
            view
          </a>
        </section>
      </article>
      {/* COMMENT SECTION  */}
      <form
        onSubmit={handleSubmit}
        className="w-full h-12 relative overflow-hidden rounded-full"
      >
        <input
          type="text"
          className="w-full h-full pl-4 outline-none caret-primary placeholder:text-txtclr placeholder:uppercase text-sm"
          placeholder="comment......"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          type="submit"
          className="absolute h-full right-0 p-2 text-sm uppercase text-txtbtn tracking-wide bg-primary"
        >
          comment
        </button>
      </form>
      {/* SUGGESTION SECTION */}
      <section></section>
    </div>
  );
}

export default NoteView;
