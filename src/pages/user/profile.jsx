import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { defaultProfile } from "../../assets/profile";
import UploadedFile from "../../components/cards/uploadedFile";
import { Link, useNavigate } from "react-router-dom";
import { hideLog, showLog } from "../../store/features/loaders";
import { logoutUser } from "../../store/functions/register";
function Profile() {
  const { user, isLoggedin } = useSelector((state) => state.user);
  const { myUploads } = useSelector((state) => state.uploads);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedin) navigate("/");
  });
  return (
    <div className="h-screen pt-20 p-4 gap-5 w-screen bg-bgPrimary rounded-2xl shadow-3dbtn flex flex-col items-center py-5">
      <section className="w-full h-min p-4 bg-white flex items-center gap-8 rounded-2xl shadow-3dbtn">
        <article className="w-20 flex flex-col items-center justify-center gap-4">
          <img src={defaultProfile} className="w-full" />
          <button
            onClick={() => {
              dispatch(logoutUser());
              dispatch(showLog("logged out"));
              setTimeout(() => dispatch(hideLog()), 3000);
            }}
            className="bg-primary text-txtbtn text-xs capitalize px-4 py-2 rounded-xl shadow-3dbtn "
          >
            logout
          </button>
        </article>
        <article className="flex-grow h-full bg-white flex flex-col items-start justify-center">
          <h3 className="text-sm font-bold capitalize">
            fullname - {user.fullname}
          </h3>
          <h3 className="text-sm font-bold capitalize">
            username - {user.username}
          </h3>
          <h4 className="text-sm font-bold break-all">Email- {user.email}</h4>
        </article>
      </section>
      {myUploads.length !== 0 && (
        <section className="flex-grow w-full overflow-hidden bg-bgPrimary shadow-3dbtn rounded-2xl flex flex-col items-center p-2 ">
          <h3 className="uppercase text-lg w-full flex items-center font-semibold py-2 relative">
            my uploads
            <Link
              preventScrollReset={true}
              className="text-sm text-primary absolute right-2 font-normal "
              to={"/uploads"}
            >
              {"View all >>"}
            </Link>
          </h3>
          <article className="w-full overflow-scroll p-2 scrollbar-none grid grid-cols-1 auto-rows-min gap-7 sm:grid-cols-2 md:grid-cols-3 flex-grow">
            {myUploads.slice(6).map((up) => (
              <UploadedFile key={up._id} {...up} />
            ))}
          </article>
        </section>
      )}
    </div>
  );
}

export default Profile;
