import Navbar from '../Navbar'
import Footer from '../Footer'
import { ChevronsRight } from 'lucide-react';

import aWriter from '../../assets/images/a-writer.jpg'

const Home = () => {
  return (
    <div>
        <Navbar />
        <section className='bg-[#FFF6F4] w-full'>
            <div className='flex flex-row  space-x-10 py-10 mx-auto w-[80%] justify-center items-center'>

            <div className='W-[100%] space-y-3 text-left'>
                <p className='text-lg font-bold'>FOR CREATORS</p>
                <h2 className='text-2xl font-bold'>Create Your First Project Today</h2>    
                <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur elit. Praesent quis tincidunt metus.</p>
                
                <div className='flex gap-2 text-base font-semibold'>
                <span><ChevronsRight /></span>
                <p>Save your time and money</p>
                </div>

                <div className='flex gap-2 text-base font-semibold'>
                <span><ChevronsRight /></span>
                <p>Completed work quickly</p>
                </div>

                <div className='flex gap-2 text-base font-semibold'>
                <span><ChevronsRight /></span>
                <p>Safe and Secure</p>
                </div>

                <div className='flex gap-2 text-base font-semibold'>
                <span><ChevronsRight /></span>
                <p>24/7 Support</p>
                </div>

                <button className='bg-green-500 text-white px-4 py-2 rounded-md hover:text-black'>Become a Creator</button>
            </div>
            <div>
                <div className='w-[450px] h-[450px] border rounded-3xl overflow-hidden'>
                    <img src={aWriter} alt="someone jotting" />
                </div>
            </div>
            </div>
        </section>

        <section className='bg-white w-full'>
            <div className='flex flex-col space-x-10 py-10 mx-auto w-[80%]'>
                <div>
                    <h2 className='text-4xl font-bold'>Top Creators</h2>
                    <p className='text-lg mt-2'>Browse talent for your projects</p>
                </div>

                <div className='flex flex-row space-x-10 py-10 '>
                    <div className='flex flex-col space-y-3 justify-center items-center'>
                        <div className='w-[200px] h-[200px] border rounded-3xl hover:scale-105 transition-all duration-300'>
                            <img src="../src/assets/images/freelnce-1.jpg" alt="" />
                        </div>
                        <p className='text-lg font-bold'>Lucy Haley</p>
                       <p>Food Content Creator</p>
                        <p>From <strong>$50</strong>/per project</p>
                    </div>

                    <div className='flex flex-col space-y-3 justify-center items-center hover:scale-105 transition-all duration-300'>
                        <div className='w-[200px] h-[200px] border rounded-3xl'>
                            <img src="../src/assets/images/freelnce-7.jpg" alt="" />
                        </div>
                        <p className='text-lg font-bold'>Thiago Henry</p>
                        <p>Food Content Creator</p>
                        <p>From <strong>$50</strong>/per project</p>
                    </div>

                    <div className='flex flex-col space-y-3 justify-center items-center hover:scale-105 transition-all duration-300'>
                        <div className='w-[200px] h-[200px] border rounded-3xl'>
                            <img src="../src/assets/images/freelnce-6.jpg" alt="" />
                        </div>
                        <p className='text-lg font-bold'>Marcus Ross</p>
                        <p>Fashion Model</p>
                        <p>From <strong>$50</strong>/per project</p>
                    </div>

                    <div className='flex flex-col space-y-3 justify-center items-center hover:scale-105 transition-all duration-300'>
                        <div className='w-[200px] h-[200px] border rounded-3xl'>
                            <img src="../src/assets/images/freelnce-8.jpg" alt="" />
                        </div>
                        <p className='text-lg font-bold'>Kianna Ble</p>
                        <p>Food Content Creator</p>
                        <p>From <strong>$50</strong>/per project</p>
                    </div>

                </div>
                <a href="">Explore Other Creators</a>
            </div>

        </section>
        <Footer />
    </div>
  )
}

export default Home