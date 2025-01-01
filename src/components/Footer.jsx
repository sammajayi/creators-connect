

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 w-full">
     <div className="py-10">
        <div className="flex flex-row space-x-20 justify-center">
               <div >
                   <h4 className="text-xl font-bold mb-4">Categories</h4>
                   <ul className="flex flex-col gap-2 text-sm">
                       <li><a href="#">Fashion</a></li>
                       <li><a href="#">Skincare</a></li>
                       <li><a href="#">Gadgets</a></li>
                       <li><a href="#">Food</a></li>
                       <li><a href="#">Education</a></li>
                   </ul>
               </div>
                <div>
                   <h4 className="text-xl font-bold mb-4">About</h4>
                   <ul className="flex flex-col gap-2 text-sm">
                       <li><a href="#">About us</a></li>
                       <li><a href="#">Career</a></li>
                       <li><a href="#">Blogs</a></li>
                       <li><a href="#">FAQ&apos;s</a></li>
                       <li><a href="#">Contact us</a></li>
                   </ul>
               </div>
               <div>
                   <h4 className="text-xl font-bold mb-4">Services</h4>
                   <ul className="flex flex-col gap-2 text-sm">
                       <li><a href="#">Sevices</a></li>
                       <li><a href="#">Projects</a></li>
                       <li><a href="#">Jobs</a></li>
                       <li><a href="#">Creators</a></li>
                       <li><a href="#">Employers</a></li>
                   </ul>
               </div>

               <div>
                   <h4 className="text-xl font-bold mb-4">Support</h4>
                   <ul className="flex flex-col gap-2 text-sm">
                       <li><a href="#">Privacy Policy</a></li>
                       <li><a href="#">Terms of USe</a></li>
                       <li><a href="#">Help Center</a></li>
                   </ul>
               </div>
               <div>
                   <h4 className="text-xl font-bold mb-4">Connect</h4>
                   <ul className="flex flex-col gap-2 text-sm">
                       <li><a href="#">Linkedin</a></li>
                       <li><a href="#">Twitter</a></li>
                       <li><a href="#">Facebook</a></li>
                       <li><a href="#">Instagram</a></li>
                       <li><a href="#">Youtube</a></li>
                   </ul>
               </div>
               </div>

                <div className="flex flex-row gap-4 justify-center mt-10 border-t-2 border-white">
                   <p>&#169; 2024 Creators Connect. All Right Reserved.</p>
               </div>
           </div>
    </footer>
  )
}

export default Footer