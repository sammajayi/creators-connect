import photo from "/src/assets/images/photography.png";
import { Link } from "react-router-dom";
import Logo from "/logo.svg";

const Register = () => {
  return (
    <div className="min-h-screen grid lg:grid-cols-2 mx-auto">
      <div className="relative hidden lg:block">
        <img src={photo} alt="two photographers" className="object-cover" />
      </div>

      <div className="p-6 lg:p-12 flex flex-col">
        <div className="object-right">
          <img src={Logo} alt="creators connect logo" className="float-right" />
        </div>

        <div className="max-w-[600px] ">
          <h1 className="text-5xl font-bold tracking-tight pt-16">
            Join by your role
          </h1>
          <p className="text-[gray] font-sans text-base pt-5">
            Welcome to the ultimate space where creators, marketers, and brands
            unite to collaborate, innovate, and bring visions to life.
            Let&apos;s get you started!
          </p>

        
          <div className="grid gap-4 sm:grid-cols-2 mt-36">
            <button className="h-[120px] text-xl border-2 font-semibold rounded-lg hover:bg-purple hover:text-white transition-colors">
              I am a Client
            </button>
            <button className="h-[120px] text-xl border-2 font-semibold rounded-lg hover:bg-purple hover:text-white transition-colors">
              I am a Creator
            </button>
          </div>
        </div>

        <div className="space-y-4 mt-56">
          <Link to="/Signup">
            <button className="w-full bg-purple text-white hover:bg-purple-700 py-6 text-lg rounded-lg transition-colors hover:bg-opacity-80">
              Continue as a business
            </button>
          </Link>
          <p className="text-center text-gray-600 font-medium">
            Already have an account?
            <Link
              to="/login"
              className="text-purple-600 hover:underline font-bold"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
