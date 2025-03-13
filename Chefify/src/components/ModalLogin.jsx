import { motion } from "framer-motion";
import imgLogin from "../assets/login.png";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { IoLogoApple } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
const ModalLogin = ({ isOpen, isClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={isClose}
    >
      <motion.div
        className="grid grid-cols-11 bg-white rounded-lg shadow-lg w-[70%] h-[80%] overflow-hidden"
        initial={{ y: -100, opacity: 0 }} // Bắt đầu từ trên và mờ
        animate={{ y: 0, opacity: 1 }} // Trượt xuống & hiện rõ
        exit={{ y: -100, opacity: 0 }} // Trượt lên khi đóng
        transition={{ duration: 0.5, ease: "easeOut" }} // Thời gian mượt
        onClick={(e) => e.stopPropagation()} // Ngăn modal bị đóng khi click bên trong
      >
        <div className="col-span-5 relative">
          <h2 className="absolute top-10 left-[75px] max-w-[300px] text-center text-2xl font-bold text-white">
            "Embrace the art of cooking, where flavors come alive!"
          </h2>
          <img
            src={imgLogin}
            alt="Login"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="col-span-6 p-6">
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold mb-6">Login</h1>
            <IoMdClose
              className="w-8 h-8 mb-6 cursor-pointer"
              onClick={isClose}
            />
          </div>

          <h3 className="text-xl pb-3">Enter your email to log in</h3>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-5 py-2.5 bg-slate-100 rounded-lg mb-8"
          />
          <button className="py-2.5 px-5 mb-2 bg-primary rounded-lg transition hover:bg-pink-700 text-white text-lg w-full">
            Continue
          </button>

          <div className="flex items-center justify-center my-4">
            <div className="w-full border-t border-gray-300"></div>
            <span className="px-3 text-gray-500 text-sm">OR</span>
            <div className="w-full border-t border-gray-300"></div>
          </div>

          <div className="text-gray-500 text-center">
            By continuing you agree to the updated{" "}
            <span className="text-gray-800 ">
              Tern of Sales, Terms of Service
            </span>
            , and <span className="text-gray-800 ">Privacy Policy.</span>
          </div>

          <button className="py-2.5 px-5 my-5 flex items-center justify-center gap-2 w-full bg-slate-100 text-red-600 rounded-lg transition hover:bg-slate-200">
            <FaGoogle />
            Continue with Google
          </button>

          <button className="py-2.5 px-5 my-5 flex items-center justify-center gap-2 w-full bg-slate-100 text-blue-700 rounded-lg transition hover:bg-slate-200">
            <FaFacebookF />
            Continue with Facebook
          </button>

          <button className="py-2.5 px-5 my-5 flex items-center justify-center gap-2 w-full bg-slate-100  rounded-lg transition hover:bg-slate-200">
            <IoLogoApple />
            Continue with Apple
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ModalLogin;
