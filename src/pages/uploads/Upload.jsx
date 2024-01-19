import React, { useRef, useState } from "react";
import upload from "../../axios/upload";
import { useDispatch } from "react-redux";
import { uploadNote } from "../../store/functions/uploads";

export default function Upload() {
  const dispatch = useDispatch();
  const file = useRef();
  const form = useRef();
  const [note, setNote] = useState({
    subject: "",
    course: "",
    year: "",
    unit: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const File = file.current.files[0];
    if (!File) return console.log("select a file");
    const formData = new FormData();
    formData.append("subject", note.subject);
    formData.append("course", note.course);
    formData.append("year", note.year);
    formData.append("unit", note.unit);
    formData.append("file", File);

    console.log("uploading");
    // const { data } = await upload.post("/", formData);
    dispatch(uploadNote(formData));
  };
  return (
    <form
      className=" h-screen w-screen px-8  bg-bgSecondary flex flex-col items-center justify-center gap-4"
      onSubmit={handleSubmit}
      ref={form}
    >
      <div className=" p-6 text-txtclr bg-bgPrimary flex flex-col justify-center overflow-hidden items-center relative gap-4 shadow-lg shadow-gray-500">
        <h1 className="uppercase text-xl font-bold">upload note</h1>
        <input
          className=" w-11/12 border border-primary rounded-2xl file:hidden outline-none text-sm p-2"
          id="file_input"
          type="file"
          name="file"
          ref={file}
          accept="application/pdf"
        />
        {/* course  */}
        <input
          type="text"
          placeholder="Enter course name"
          onChange={(e) => setNote({ ...note, course: e.target.value })}
          value={note.course}
          required
          className=" text-sm w-11/12 text-txtclr min-w-[160px] max-w-[300px] rounded-full py-2 px-4 outline-none border border-primary bg-transparent focus:bg-primary placeholder:text-txtclr placeholder:focus:text-txtbtn focus:text-txtbtn"
        />
        {/* unit  */}
        <input
          type="number"
          placeholder="Enter unit"
          onChange={(e) => setNote({ ...note, unit: e.target.value })}
          value={note.unit}
          required
          className=" text-sm w-11/12 text-txtclr min-w-[160px] max-w-[300px] rounded-full py-2 px-4 outline-none border border-primary bg-transparent focus:bg-primary placeholder:text-txtclr placeholder:focus:text-txtbtn focus:text-txtbtn"
        />
        <input
          type="text"
          placeholder="Enter subject name"
          onChange={(e) => setNote({ ...note, subject: e.target.value })}
          value={note.subject}
          required
          className=" text-sm w-11/12 text-txtclr min-w-[160px] max-w-[300px] rounded-full py-2 px-4 outline-none border border-primary bg-transparent focus:bg-primary placeholder:text-txtclr placeholder:focus:text-txtbtn focus:text-txtbtn"
        />
        <input
          type="number"
          placeholder="Enter year .."
          onChange={(e) => setNote({ ...note, year: e.target.value })}
          value={note.year}
          required
          className=" text-sm w-11/12 text-txtclr min-w-[160px] max-w-[300px] rounded-full py-2 px-4 outline-none border border-primary bg-transparent focus:bg-primary placeholder:text-txtclr placeholder:focus:text-txtbtn focus:text-txtbtn"
        />
      </div>
      <button
        type="submit"
        className="bg-primary px-4 py-2 rounded-full shadow-3dbtn text-txtbtn uppercase"
      >
        upload
      </button>
    </form>
  );
}
