import React from "react";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";

const SocialSignin = () => {
  return (
    <div className="mt-5">
      <p className="text-center text-sm font-semibold mb-2">Or sign in with</p>
      <div className="flex justify-center items-center gap-5">
        <FaFacebookF className="social-login-icon" />
        <FaGoogle className="social-login-icon" />
        <FaGithub className="social-login-icon" />
      </div>
    </div>
  );
};

export default SocialSignin;
