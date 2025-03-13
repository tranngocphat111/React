import { Link } from "react-router-dom";
import logo from "../assets/Group 9.png";
import iconSearch from "../assets/search.png";
import { useState } from "react";
import ModalLogin from "./ModalLogin";

const Header = () => {
  const [isModal, setIsModal] = useState(false);

  const toggleModal = () => {
    setIsModal(!isModal);
  };

  return (
    <div className="container flex justify-around items-center py-4 px-6 border-b-2">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>

      <div className="relative">
        <img
          src={iconSearch}
          alt="iconSearch"
          className="absolute left-12 top-2.5 w-5 h-5"
        />
        <input
          type="text"
          placeholder="What would you like cook?"
          className="bg-stone-200 px-4 py-2 pl-10 rounded-lg ml-10 w-[300px] "
        />
      </div>

      <ul className="flex mx-[90px] text-lg text-stone-700">
        <Link to="/WhatToCook">
          <li className="mx-5    hover:text-primary">What to cook</li>
        </Link>
        <Link to="/Recipes">
          <li className="px-5  hover:text-primary">Recipes</li>
        </Link>
        <Link to="/Ingredients">
          <li className="px-5  hover:text-primary">Ingredients</li>
        </Link>
        <Link to="/Occasions">
          <li className="px-5  hover:text-primary">Occasions</li>
        </Link>
        <Link to="/AboutUs">
          <li className="px-5  hover:text-primary">About Us</li>
        </Link>
      </ul>

      <button
        className="text-primary bg-second px-4 py-2 rounded-lg mr-4 hover:bg-primary transition hover:text-white"
        onClick={toggleModal}
      >
        Login
      </button>
      <button
        className="text-white bg-primary px-4 py-2 rounded-lg transition hover:bg-pink-700
      "
      >
        Subcribe
      </button>

      <ModalLogin isOpen={isModal} isClose={toggleModal}/>
    </div>
  );
};

export default Header;
