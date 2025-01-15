import React from "react";
import Logo from "/logo.svg";
import expert from "/src/assets/images/expert.png";
import fbIcon from "/src/assets/images/icons/facebook-icon.svg";
import or from "/src/assets/images/icons/or.svg";

const Signup = () => {
  return (
    <div className="flex w-[100%] max-h-screen mx-auto p-5 min-h-screen space-x-10">
      <div className="relative hidden lg:block">
        <img src={expert} alt="" className="object-cover" />
      </div>

      <div className="p-6 w-[50%]">
        <div className="">
          <img src={Logo} alt="creators connect logo" className="float-right" />
        </div>

        <div className="pt-16">
          <h1 className="font-bold font-sans text-4xl tracking-tight text-center">
            Welcome to Creators Connect
          </h1>
          <p className="text-center font-sans text-sm text-[gray]">
            Welcome to the ultimate space where creators, marketers, and brands
            unite to collaborate, innovate, and bring visions to life.
            Let&apos;s get you started!
          </p>
        </div>

        <form className="space-y-6 pt-10">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-600 font-bold mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-purple"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-gray-600 font-bold mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-purple"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-gray-600 font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-purple"
              placeholder="Create a password"
              required
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-gray-600 font-bold mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-purple"
              placeholder="Confirm your password"
              required
            />
          </div>

          <div className="pt-5">
            <button
              type="submit"
              className=" w-[296px] h-[30px] font-bold flex justify-center items-center mx-auto bg-purple text-white rounded-lg hover:bg-opacity-80 transition-colors cursor-pointer"
            >
              Sign Up
            </button>
          </div>
        </form>

        <div className="pt-5 flex items-center justify-center">
          <img src={or} alt="" />
        </div>

        <div className="space-y-3 content-center pt-5">
          <div className="border rounded-lg w-full h-[40px] flex items-center justify-center text-center mx-auto font-normal text-sm cursor-pointer">
            <img
              src="https://img.icons8.com/color/30/000000/google-logo.png"
              alt="google logo"
            />
            Sign up with Google
          </div>
          <div className="border rounded-lg w-full h-[40px] flex items-center justify-center text-center mx-auto font-normal text-sm cursor-pointer">
            <img src={fbIcon} alt="" className="" />
            Sign up with Facebook
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
