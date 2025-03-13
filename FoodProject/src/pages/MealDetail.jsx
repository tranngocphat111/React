import React from "react";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Users } from "lucide-react";
import { data } from "../data";
import CartIcon from "../assets/icons/cart.png";
import Reviews from "../components/Reviews";
import Meals from "../components/Meals";
import InputQuantity from "../components/InputQuantity";
import { CartContext } from "../store/CartContext";
import { useContext } from "react";

function MealDetail() {
  const [value, setValue] = useState(1);

  const handleIncrement = () => {
    console.log("alo");
    setValue((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (value > 1) {
      setValue((prev) => prev - 1);
    }
  };

  const handleOnChange = (e) => {
    console.log("alo");
    setValue(Math.max(1, parseInt(e.target.value) || 1));
  };
  const { id } = useParams();
  const product = data.find((item) => item.id === id);
  const { addItemToCart } = useContext(CartContext);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center ">
        <h2 className="text-2xl text-primary_yellow">Product not found</h2>
        <Link
          to="/"
          className="text-primary_yellow hover:text-white mt-4 inline-block"
        >
          Return to Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="w-[80%] mx-auto px-4 py-12">
      <Link
        to="/"
        className="inline-flex items-center text-primary_yellow hover:text-white mb-8 mt-10 "
      ></Link>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
        <div className="col-span-3">
          <img
            src={`/public/images/meals/${product.image}`}
            alt={product.name}
            className="w-full h-[550px] object-cover rounded-lg "
          />
        </div>

        <div className="col-span-2">
          <h1 className="text-[42px] font-bold text-primary_yellow mb-4 drop-shadow-default">
            {product.name}
          </h1>
          <p className="text-white mb-2 text-xl">{product.description}</p>
          <span className=" text-primary_yellow text-5xl  my-7 font-semibold drop-shadow-default inline-block">
            ${product.price}
          </span>
          <div className="bg-primary_brown rounded-lg p-6 mb-8">
            <div className="flex items-center gap-4 mb-4">
              <Clock className="text-primary_yellow" size={20} />
              <span className="text-white">
                Thời gian chuẩn bị: {product.details.preparationTime}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Users className="text-primary_yellow" size={20} />
              <span className="text-white">
                Khẩu phần ăn: {product.details.servingSize}
              </span>
            </div>
          </div>

          <div>
            <InputQuantity
              value={value}
              onDecrement={handleDecrement}
              onIncrement={handleIncrement}
              onChange={handleOnChange}
            />
          </div>
          <button
            className="w-full items-center mt-8 group relative px-8 py-4 bg-primary-yellow text-primary-brown rounded-lg text-lg font-semibold overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,196,4,0.4)] bg-primary_yellow"
            onClick={() => addItemToCart(product.id, value)}
          >
            <img
              src={CartIcon}
              alt="cartitem"
              className="h-8 inline-block mr-2 relative z-10 bottom-0.5"
            />
            <span className="relative z-10 text-xl ">Thêm vào giỏ hàng</span>
            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </button>
        </div>
      </div>

      <div>
        <h1 className="text-3xl  font-bold text-primary_yellow leading-tight  drop-shadow-default mt-12 mb-4">
          Giới thiệu
        </h1>
        <p className="text-white text-xl">{product.introduction}</p>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-primary_yellow mb-4 drop-shadow-default my-10 mt-12">
          Thành phần
        </h2>
        <ul className="grid grid-cols-2 gap-2 w-[50%] list-disc pl-6">
          {product.details.ingredients.map((ingredient, index) => (
            <li key={index} className="text-white text-xl ">
              {ingredient}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-3xl font-semibold text-primary_yellow drop-shadow-default mt-12 mb-6">
          Thông tin dinh dưỡng
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(product.details.nutritionalInfo).map(
            ([key, value]) => (
              <div
                key={key}
                className="bg-primary_brown rounded-lg p-4 text-center"
              >
                <div className="text-white capitalize text-xl">{key}</div>
                <div className="text-primary_yellow font-semibold text-xl">
                  {value}
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <Reviews />

      <div>
        <h1 className="text-3xl  font-bold text-primary_yellow leading-tight  drop-shadow-default mt-12 ">
          Các món khác
        </h1>
        <Meals meals={data} max={3} />
      </div>
    </div>
  );
}

export default MealDetail;
