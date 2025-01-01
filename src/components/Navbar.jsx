import React from 'react'

const Navbar = () => {
  return (
    <header className='bg-white w-[50%] mx-auto'>
        <div className='flex flex-row justify-start items-center'>
            <div>
                <img src="" alt="" />
            </div>
            <nav className='h-16 flex flex-row justify-evenly items-center mx-auto'>
            <div>
                <ul className='flex flex-row gap-4'>
                    <li><a href="#">Find Talents</a></li>
                    <li><a href="#">Find Work</a></li>
                    {/* <li><a href="#">Why Creator&apos;s Connect</a></li> */}
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Learn More</a></li>
                </ul>
            </div>
            </nav>
            {/* search bat should be imported here */}

            <div className="flex flex-row gap-4">
                <button className='bg-green-500 text-white px-4 py-2 rounded-md hover:text-black'>Sign Up</button>
                <button className=' text-black px-4 py-2 rounded-md border border-black hover:bg-black hover:text-white transition-all duration-300'>Login</button>
            </div>
        
        </div>
    </header>
  )
}

export default Navbar