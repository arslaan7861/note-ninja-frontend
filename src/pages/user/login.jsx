import React, { useEffect, useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/functions/register";
import authFetch, { URL } from "../../axios/register";
import axios from "axios";
import google from "../../assets/images/google.png";
import github from "../../assets/images/github.png";

function Login() {
  const navigate = useNavigate();
  const { isLoggedin } = useSelector((state) => state.user);
  useEffect(() => {
    if (isLoggedin) {
      navigate("/");
    }
  }, [isLoggedin]);
  const [user, setuser] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(login(user));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[70%] h-fit py-8 relative rounded-xl flex items-center justify-center gap-7 flex-col shadow-xl bg-bgPrimary backdrop-blur-md text-txtclr max-w-xl"
    >
      <h1 className=" text-xl sm:text-3xl font-bold uppercase tracking-widest ">
        login
      </h1>
      <button
        onClick={async () => {
          const loginWindow = await window.open(`${URL}/auth/google`, "_self");
        }}
        type="button"
        className="h-min w-32 justify-evenly flex gap-2 items-center bg-white px-1 pr-2 rounded-sm py-1 shadow-lg"
      >
        <img src={google} alt="" className="h-8" />
        <p className="text-xl uppercase">google</p>
      </button>
      <button
        onClick={async () => {
          const loginWindow = await window.open(`${URL}/auth/github`, "_self");
        }}
        type="button"
        className="h-min w-32 justify-evenly flex gap-2 items-center bg-white px-1 pr-2 rounded-sm py-1 shadow-lg"
      >
        <img src={github} alt="" className="h-8 border-black" />
        <p className="text-xl uppercase">github</p>
      </button>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setuser({ ...user, username: e.target.value })}
        value={user.username}
        required
        className=" text-xs sm:text-sm md:text-md w-4/5 min-w-[160px] max-w-[300px] rounded-full py-2 px-4 placeholder:text-txtclr outline-none border border-primary bg-transparent focus:bg-primary placeholder:focus:text-txtbtn focus:text-txtbtn"
      />
      <input
        type="password"
        value={user.password}
        onChange={(e) => setuser({ ...user, password: e.target.value })}
        placeholder="Password...."
        required
        className="text-xs sm:text-sm md:text-md w-4/5 min-w-[160px] max-w-[300px] rounded-full py-2 px-4 placeholder:text-txtclr outline-none border border-primary bg-transparent focus:bg-primary placeholder:focus:text-txtbtn focus:text-txtbtn"
      />
      <section className="flex flex-col gap-2 items-center ">
        <button
          type="submit"
          className="px-6 text-sm sm:text-md py-2 bg-primary text-txtbtn rounded-full shadow-3dbtn"
          onClick={handleSubmit}
        >
          Login
        </button>
        <span className="text-xs sm:text-sm text-primary font-semibold">
          Forgot password?
        </span>
        <p className="flex flex-col items-center text-txtclr text-xs sm:text-sm">
          <span>don't have an account ?</span>
          <Link
            to={"/user/register"}
            className="font-semibold text-sm sm:text-md text-primary"
          >
            Register
          </Link>
        </p>
      </section>
    </form>
  );
}

export default Login;
