import { useEffect, useState } from "react";
import HomePage from "./pages/homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./pages/user";
import Navbar from "./components/navbar";
import Login from "./pages/user/login";
import Register from "./pages/user/register";
import Profile from "./pages/user/profile";
import Upload from "./pages/uploads/Upload";
import UploadsPage from "./pages/uploads";
import { useDispatch, useSelector } from "react-redux";
import { verifyUser } from "./store/functions/register";
import NoteView from "./pages/NoteView";
import { addGlobalUploads, setUploads } from "./store/features/uploads";
import { getNotes } from "./store/functions/uploads";
import GlobalLoader from "./components/loaders/global";
import Log from "./components/loaders/Log";
//aded comment
function App() {
  const dispatch = useDispatch();
  const { globalLoader, log } = useSelector((state) => state.loaders);
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   const user = localStorage.getItem("user");
  //   const notes = localStorage.getItem("notes");

  //   if (notes) dispatch(addGlobalUploads(JSON.parse(notes)));
  //   dispatch(getNotes());

  //   if (!token || !user || !token.startsWith("Bearer")) console.log("no user");
  //   dispatch(verifyUser());
  //   const uploads = JSON.parse(localStorage.getItem("uploads"));
  //   if (uploads) {
  //     dispatch(setUploads(uploads));
  //   }
  // }, []);
  useEffect(() => {
    const notes = localStorage.getItem("notes");
    if (notes) dispatch(addGlobalUploads(JSON.parse(notes)));
    dispatch(getNotes());
    dispatch(verifyUser());
    const uploads = JSON.parse(localStorage.getItem("uploads"));
    if (uploads) {
      dispatch(setUploads(uploads));
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="h-screen w-screen overflow-y-auto font-para bg-bgPrimary scrollbar-none">
        <Navbar></Navbar>
        {globalLoader.show && <GlobalLoader />}
        {log.show && <Log />}
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/user" element={<User />}>
            <Route index element={<Login />}></Route>
            <Route path="register" element={<Register />}></Route>
            <Route path="profile" element={<Profile />}></Route>
          </Route>
          <Route path="uploads/upload" element={<Upload />}></Route>
          <Route path="note" element={<NoteView />}></Route>
          <Route path="uploads" element={<UploadsPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
