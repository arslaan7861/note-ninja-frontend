import { useDispatch, useSelector } from "react-redux";
function useRegister(user) {
  const dispatch = useDispatch();

  console.log(user);
  if (user.fullname.length < 4) {
    return console.log("please enter your name");
  }
  if (user.username.length < 4) {
    return console.log("please enter your name");
  }
  if (user.password.length < 4) {
    return console.log("please enter your name");
  }
  if (user.email.length < 4) {
    return console.log("please enter your name");
  }
  if (user.password !== user.confirmpas) {
    return console.log("password do not match");
  }
}

export default useRegister;
