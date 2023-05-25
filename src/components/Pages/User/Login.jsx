import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { LoadCanvasTemplate, loadCaptchaEnginge } from "react-simple-captcha";
import { toast } from "react-toastify";
import bg from "../../../assets/others/authentication.png";
import login from "../../../assets/others/authentication2.png";
import { AuthContext } from "../../../provider/AuthProvider";
import SocialSignin from "./SocialSignin";

const Login = () => {
  const { logInWithEmailAndPassword } = useContext(AuthContext);
  const handleLogin = () => {
    logInWithEmailAndPassword().then((result) => {
      const user = result.user;
      toast.success(`Welcome ${user.displayName}`);
    });
  };
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-contain min-h-screen py-16 "
    >
      <div className="w-4/5  border-2 mx-auto  shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] flex py-10 ">
        <img src={login} alt="" className="w-1/2" />
        <div className="login w-1/2 mx-auto">
          <h1 className="text-center font-cinzel font-semibold text-4xl mb-5">
            Login
          </h1>
          <form onSubmit={handleLogin} className="w-3/5 mx-auto space-y-4">
            <div>
              <label htmlFor="name">Name</label> <br />
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Email"
              />
            </div>
            <div>
              <label htmlFor="password">Password</label> <br />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="" className="text-xs">
                <LoadCanvasTemplate />
              </label>
              <input type="text" className="text-lg p-0" />
            </div>
            <button className="bg-yell rounded-sm font-cinzel py-2 font-semibold w-full text-white mt-20">
              log in
            </button>
            <p className="text-yell text-xs text-center font-semibold">
              New here?{" "}
              <Link to={"/register"} className="text-blue-600">
                Create a New Account
              </Link>
            </p>
          </form>
          <div className="flex justify-center items-center">
            <SocialSignin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
