import React, { useState, useRef } from "react";
import { Mail, Lock, LogIn, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const users = [
    { email: "thai@gmail.com", password: "12345" },
    { email: "phat@gmail.com", password: "12345" },
    { email: "nghi@gmail.com", password: "12345" },
];

function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await new Promise((resolve) => setTimeout(resolve, 1500));

        const user = users.find(
            (user) => user.email === email && user.password === password
        );

        if (user) {
            console.log("Login successful", { email });
            localStorage.setItem("user", JSON.stringify(user));
            navigate("/");
            window.location.reload();
        } else {
            alert("Sai email hoặc mật khẩu!");
        }

        setIsLoading(false);
    };

    return (
      <div className="min-h-screen bg-primary-linear flex items-center justify-center p-4 animate-gradient relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden mt-5">
          <div className="absolute -inset-[10px] opacity-50">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary_yellow/20 blur-[100px] animate-pulse-slow"></div>
            <div className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full bg-primary_yellow/10 blur-[100px] animate-float"></div>
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-primary_yellow/15 blur-[100px] animate-float-delayed"></div>
          </div>
        </div>
  
        <div className="w-full max-w-md transform transition-all duration-500 ease-in-out hover:scale-[1.02] relative z-10">
          <div className="text-center my-8 mt-16 transform transition-all duration-500 hover:-translate-y-1">
            <div className="relative inline-block group">
              <div className="absolute inset-0 bg-primary_yellow/30 rounded-full blur-2xl animate-pulse-slow group-hover:bg-primary_yellow/40 transition-all duration-500"></div>
              <div className="relative">
                <LogIn className="mx-auto h-16 w-16 text-primary_yellow animate-pulse group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-primary_yellow/20 rounded-full blur-xl animate-pulse"></div>
              </div>
            </div>
            <h2 className="mt-6 text-3xl font-bold text-primary_yellow bg-gradient-to-r from-primary_yellow via-yellow-500 to-primary_yellow bg-clip-text animate-gradient-x">
              Chào mừng bạn đến với Amazing Food
            </h2>

          </div>
  
          <form
            onSubmit={handleSubmit}
            className="bg-primary_brown/40 backdrop-blur-xl rounded-xl p-8 shadow-[0_0_50px_rgba(255,196,4,0.1)] 
              transform transition-all duration-500 hover:shadow-[0_0_50px_rgba(255,196,4,0.15)] 
              border border-primary_yellow/10 hover:border-primary_yellow/20"
          >
            <div className="space-y-6">
              <div className="transform transition-all duration-300 hover:-translate-y-1">
                <label className="block text-sm font-medium text-primary_yellow mb-2 transition-colors">
                  Email
                </label>
                <div className="relative group">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 
                    transition-colors group-hover:text-primary_yellow group-hover:scale-110 duration-300" />
                  <input
                    type="email"
                    ref={emailRef}
                    className="w-full pl-10 pr-4 py-3 bg-primary_brown/60 border border-gray-700 rounded-lg 
                      focus:ring-2 focus:ring-primary_yellow focus:border-transparent text-gray-200 
                      placeholder-gray-500 transition-all duration-300 ease-in-out
                      hover:bg-primary_brown/80 hover:border-primary_yellow/50
                      focus:shadow-[0_0_20px_rgba(255,196,4,0.1)]"
                    placeholder="Nhập email của bạn"
                    required
                  />
                  <div className="absolute inset-0 rounded-lg bg-primary_yellow/5 opacity-0 group-hover:opacity-100 
                    transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>
  
              <div className="transform transition-all duration-300 hover:-translate-y-1">
                <label className="block text-sm font-medium text-primary_yellow mb-2">
                  Mật khẩu
                </label>
                <div className="relative group">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 
                    transition-colors group-hover:text-primary_yellow group-hover:scale-110 duration-300" />
                  <input
                    type="password"
                    ref={passwordRef}
                    className="w-full pl-10 pr-4 py-3 bg-primary_brown/60 border border-gray-700 rounded-lg 
                      focus:ring-2 focus:ring-primary_yellow focus:border-transparent text-gray-200 
                      placeholder-gray-500 transition-all duration-300 ease-in-out
                      hover:bg-primary_brown/80 hover:border-primary_yellow/50
                      focus:shadow-[0_0_20px_rgba(255,196,4,0.1)]"
                    placeholder="Nhập mật khẩu của bạn"
                    required
                  />
                  <div className="absolute inset-0 rounded-lg bg-primary_yellow/5 opacity-0 group-hover:opacity-100 
                    transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>
  
              <div className="flex items-center justify-between">
                <div className="flex items-center group">
                  <input
                    type="checkbox"
                    id="remember-me"
                    className="h-4 w-4 rounded border-gray-700 bg-primary_brown/60 text-primary_yellow 
                      focus:ring-primary_yellow transition-colors duration-200 ease-in-out
                      group-hover:border-primary_yellow cursor-pointer"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-200 cursor-pointer"
                  >
                    Nhớ mật khẩu
                  </label>
                </div>
                <a
                  href="#"
                  className="text-sm text-primary_yellow hover:text-primary_yellow/80 transition-colors duration-200 
                    relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 
                    after:bg-primary_yellow hover:after:w-full after:transition-all after:duration-300
                    hover:shadow-[0_0_20px_rgba(255,196,4,0.1)]"
                >
                  Quên mật khẩu?
                </a>
              </div>
  
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary_yellow text-primary_brown font-semibold py-3 rounded-lg 
                  transition-all duration-300 ease-in-out transform hover:scale-[1.02]
                  hover:bg-primary_yellow/90 hover:shadow-lg hover:shadow-primary_yellow/20
                  disabled:opacity-70 disabled:cursor-not-allowed relative overflow-hidden
                  before:absolute before:inset-0 before:bg-white/20 before:transform before:scale-x-0 
                  before:origin-right before:transition-transform before:duration-300
                  hover:before:scale-x-100 hover:before:origin-left"
              >
                <span className={`inline-flex items-center transition-all duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
                  Đăng nhập
                </span>
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Loader2 className="h-5 w-5 animate-spin" />
                  </div>
                )}
              </button>
  
              <p className="text-center text-sm text-gray-400">
                Chưa có tài khoản?{" "}
                <a
                  href="#"
                  className="text-primary_yellow hover:text-primary_yellow/80 font-medium transition-colors duration-200
                    relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 
                    after:bg-primary_yellow hover:after:w-full after:transition-all after:duration-300
                    hover:shadow-[0_0_20px_rgba(255,196,4,0.1)]"
                >
                  Đăng ký ngay
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    );
}

export default Login;