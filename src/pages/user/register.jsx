import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registeruser } from "../../store/functions/register";

function Register() {
  const navigate = useNavigate();
  const { isLoggedin } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [user, setuser] = useState({
    username: "",
    fullname: "",
    confirmpas: "",
    email: "",
    password: "",
  });
  useEffect(() => {
    if (isLoggedin) {
      navigate("/");
    }
  }, [isLoggedin]);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registeruser(user));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[70%] py-8  rounded-lg bg-bgPrimary relative flex items-center justify-center gap-4 flex-col shadow-lg max-w-xl"
    >
      <h1 className=" text-lg sm:text-3xl text-primary  font-bold uppercase tracking-widest">
        register
      </h1>
      <input
        type="text"
        placeholder="Fullname..."
        onChange={(e) => setuser({ ...user, fullname: e.target.value })}
        value={user.fullname}
        className="text-txtclr text-xs sm:text-sm md:text-md w-4/5 min-w-[160px] max-w-[300px] rounded-full py-2 px-4 placeholder:text-txtclr outline-none border border-primary bg-transparent focus:bg-primary placeholder:focus:text-txtbtn focus:text-txtbtn"
      />
      <input
        type="text"
        placeholder="Username..."
        onChange={(e) => setuser({ ...user, username: e.target.value })}
        value={user.username}
        className="text-txtclr text-xs sm:text-sm md:text-md w-4/5 min-w-[160px] max-w-[300px] rounded-full py-2 px-4 placeholder:text-txtclr outline-none border border-primary bg-transparent focus:bg-primary placeholder:focus:text-txtbtn focus:text-txtbtn"
      />
      <input
        type="email"
        placeholder="email..."
        onChange={(e) => setuser({ ...user, email: e.target.value })}
        value={user.email}
        className="text-txtclr text-xs sm:text-sm md:text-md w-4/5 min-w-[160px] max-w-[300px] rounded-full py-2 px-4 placeholder:text-txtclr outline-none border border-primary bg-transparent focus:bg-primary placeholder:focus:text-txtbtn focus:text-txtbtn"
      />
      <input
        type="password"
        value={user.password}
        onChange={(e) => setuser({ ...user, password: e.target.value })}
        placeholder="Password...."
        className="text-txtclr text-xs sm:text-sm md:text-md w-4/5 min-w-[160px] max-w-[300px] rounded-full py-2 px-4 placeholder:text-txtclr outline-none border border-primary bg-transparent focus:bg-primary placeholder:focus:text-txtbtn focus:text-txtbtn"
      />
      <input
        type="password"
        value={user.confirmpas}
        onChange={(e) => setuser({ ...user, confirmpas: e.target.value })}
        placeholder="Confirm Password...."
        className="text-txtclr text-xs sm:text-sm md:text-md w-4/5 min-w-[160px] max-w-[300px] rounded-full py-2 px-4 placeholder:text-txtclr outline-none border border-primary bg-transparent focus:bg-primary placeholder:focus:text-txtbtn focus:text-txtbtn"
      />
      <button
        type="submit"
        className="px-6 text-sm sm:text-md py-2 text-txtbtn bg-primary rounded-full shadow-3dbtn"
      >
        {" "}
        Sign up
      </button>

      <p className="flex flex-col items-center text-txtclr text-xs sm:text-sm">
        <span>Already have an account ?</span>
        <Link
          to={"/user"}
          className="font-semibold text-sm sm:text-md text-primary"
        >
          Login
        </Link>
      </p>
    </form>
  );
}

export default Register;
