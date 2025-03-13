import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import { ShoppingCart, User } from "lucide-react";

import { Utensils } from "lucide-react";

import { CartContext } from "../store/CartContext";
import { useContext } from "react";

export default function Header() {
  const { totalQuantity } = useContext(CartContext);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [selectedPage, setSelectedPage] = useState("Home");

  const handlePageChange = (page) => {
    setSelectedPage(page);
  };
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  return (
    <nav className="fixed w-full bg-primary_brown text-primary_yellow py-4 px-3 shadow-lg index z-50 drop-shadow-default">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link
          to="/"
          className="text-2xl font-bold transition-transform duration-300 hover:scale-110 hover:text-white"
        >
          <Utensils className="w-8 h-8 inline-block mr-2" />
          <span className="tracking-[2px] pl-2">Amazing Food</span>
        </Link>

        <div className="flex-1 flex justify-center space-x-8">
          <Link
            to="/"
            className="relative group text-lg font-medium"
            onClick={() => handlePageChange("Home")}
          >
            <span className="hover:text-white transition-colors duration-300 tracking-[2px]">
              Trang chủ
            </span>

            <span
              className={`absolute left-0 bottom-0 w-0 h-0.5 bg-primary_yellow transition-all duration-300 group-hover:w-full ${
                selectedPage !== "Home" ? "" : "w-full "
              }`}
            ></span>
          </Link>
          <Link
            to="/menu"
            className="relative group text-lg font-medium"
            onClick={() => handlePageChange("Menu")}
          >
            <span className="hover:text-white transition-colors duration-300 tracking-[2px]">
              Thực đơn
            </span>
            <span
              className={`absolute left-0 bottom-0 w-0 h-0.5 bg-primary_yellow transition-all duration-300 group-hover:w-full ${
                selectedPage !== "Menu" ? "" : "w-full"
              }`}
            ></span>
          </Link>
          <Link
            to="/about"
            className="relative group text-lg font-medium"
            onClick={() => handlePageChange("About")}
          >
            <span className="hover:text-white transition-colors duration-300 tracking-[2px]">
              Giới thiệu
            </span>
            <span
              className={`absolute left-0 bottom-0 w-0 h-0.5 bg-primary_yellow transition-all duration-300 group-hover:w-full ${
                selectedPage !== "About" ? "" : "w-full"
              }`}
            ></span>
          </Link>
          <Link
            to="/contact"
            className="relative group text-lg font-medium"
            onClick={() => handlePageChange("Contact")}
          >
            <span className="hover:text-white transition-colors duration-300 tracking-[2px]">
              Liên hệ   
            </span>
            <span
              className={`absolute left-0 bottom-0 w-0 h-0.5 bg-primary_yellow transition-all duration-300 group-hover:w-full ${
                selectedPage !== "Contact" ? "" : "w-full"
              }`}
            ></span>
          </Link>
        </div>

        {isLoggedIn ? (
          <div className="flex items-center space-x-4">
            <Link to="/cart">
              <div className="relative w-10 h-10">
                <ShoppingCart className="text-primary_yellow w-8 h-8 cursor-pointer hover:text-white transition-colors duration-300" />
                {totalQuantity === 0 ? undefined : (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                    {totalQuantity}
                  </span>
                )}
              </div>
            </Link>

            <User className="text-primary_yellow w-8 h-8 cursor-pointer hover:text-white transition-colors duration-300" />
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-[#ffc404] text-[#312c1d] font-semibold rounded-lg transition-all duration-300 hover:bg-white hover:text-[#312c1d] hover:shadow-xl"
            >
              Đăng xuất
            </button>
          </div>
        ) : (
          <>
            <Link to="/cart" className="relative w-10 h-10 mr-4">
              <ShoppingCart className="text-primary_yellow w-8 h-8 cursor-pointer hover:text-white transition-colors duration-300" />
              {totalQuantity === 0 ? undefined : (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {totalQuantity}
                </span>
              )}
            </Link>
            <Link
              to="/login"
              className="px-5 py-2 bg-[#ffc404] text-[#312c1d] font-semibold rounded-lg transition-all duration-300 hover:bg-white hover:text-[#312c1d] hover:shadow-xl"
            >
              Đăng nhập
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
