import { Link } from "react-router-dom";
import CartIcon from "../assets/icons/cart.png";
import { useContext } from "react";
import { CartContext } from "../store/CartContext";
export default function Meal({ meal }) {
    
    return (
        <div className="bg-[#1d1a16]  shadow-lg rounded-2xl overflow-hidden  max-w-sm mx-auto transform transition duration-300 cursor-pointer hover:scale-105 hover:shadow-[#ffc404]">
            <Link
                to={`/MealDetail/${meal.id}`}
                className="flex flex-col justify-center items-center"
            >
                <img
                    src={`/public/images/meals/${meal.image}`}
                    alt={meal.id}
                    className="w-full h-80 object-cover"
                />
                <div className="p-4 text-stone-300 text-center">
                    <h3 className="text-xl font-bold">{meal.name}</h3>
                    <p className="inline-block text-[18px]  bg-primary_linear text-primary_yellow font-bold px-8 py-2 m-3 rounded-md ">
                        ${meal.price}
                    </p>

                    <p className="text-stone-200 text-[15px] mt-2">
                        {meal.description}
                    </p>
                </div>
                <button className="px-7 py-2.5  my-4 mb-6 bg-[#ffc404] text-[#312c1d] font-semibold rounded-md transition-all duration-300 hover:bg-white hover:text-[#312c1d] hover:shadow-xl">
                    <img
                        src={CartIcon}
                        alt="cartitem"
                        className="h-6 inline-block mr-2"
                    />
                    Mua ngay
                </button>
            </Link>
        </div>
    );
}
