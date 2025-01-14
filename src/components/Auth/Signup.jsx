import React from 'react'
import Logo from '/logo.svg'
import expert from '/src/assets/images/expert.png'

const Signup = () => {
  return (
    <div className="flex w-[100%] max-h-screen mx-auto p-5 min-h-screen space-x-10">


        <div className='relative hidden lg:block'>
            <img src={expert} alt=""
            className='object-cover'
            />
        </div>

        <div className='p-6 w-[50%]'>
            <div className=''>
                <img src={Logo} alt="creators connect logo" 
                className='float-right'
                />
            </div>

            <div>
                <h1 className='font-bold text-[2rem]n text-center'>Welcome to Creators Connect</h1>
                <p>Welcome to the ultimate space where creators, marketers, and brands unite to collaborate, 
                innovate, and bring visions to life. Let&apos;s get you started!</p>
            </div>
            
            <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-600 font-medium mb-2">
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
                <label htmlFor="email" className="block text-gray-600 font-medium mb-2">
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
                <label htmlFor="password" className="block text-gray-600 font-medium mb-2">
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
                <label htmlFor="confirmPassword" className="block text-gray-600 font-medium mb-2">
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

              <button
                type="submit"
                className="w-full bg-purple text-white py-3 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Sign Up
              </button>
            </form>
            </div>

            <div>
                <img src="" alt="" />
            </div>

            <div>
                <div>Sign up with Google</div>
                <div>Sign up with Facebook</div>
            </div>

        </div>



    </div>
  )
}

export default Signup