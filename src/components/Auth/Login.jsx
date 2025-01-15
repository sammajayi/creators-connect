import React from 'react'
import {Link} from 'react-router-dom'
import fbIcon from "/src/assets/images/icons/facebook-icon.svg";
import or from "/src/assets/images/icons/or.svg";

const Login = () => {
  return (
    <div>

        <div>
            <img src="" alt="" />
        </div>

        <div>
            <h1>Welcome Back!</h1>
        </div>
        <p>New to Creators Connect? <Link to="/Signup">Create an account</Link></p>

        <form className="space-y-6 pt-10">
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
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="flex justify-end">
            <Link to="/reset-password" className="text-purple hover:underline text-sm">
              Forgot Password?
            </Link>
          </div>
          
          <div className="pt-5">
            <button
              type="submit"
              className="w-[296px] h-[30px] font-bold flex justify-center items-center mx-auto bg-purple text-white rounded-lg hover:bg-opacity-80 transition-colors cursor-pointer"
            >
              Login
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
  )
}

export default Login