import React, { useContext, useMemo, useState } from "react";
import { Minus, Plus, ShoppingCart, Timer, Users, Trash2 } from "lucide-react";
import { data } from "../data.js";
import { CartContext } from "../store/CartContext.jsx";
import { BsCartXFill } from "react-icons/bs";
import { Link } from "react-router-dom";
function Cart() {
    const { items, updateItemQuantity, removeCartItem } =
        useContext(CartContext);

    const total = useMemo(() => {
        return (items || []).reduce(
            (sum, item) => sum + parseFloat(item.price) * item.quantity,
            0
        );
    }, [items]);

    return (
        <div className="min-h-screen bg-[#1a1a1a] text-white p-8">
            {/* Cart Content */}
            <div className="max-w-4xl mx-auto mt-[80px]">
                <h1 className="text-4xl  font-bold text-primary_yellow leading-tight drop-shadow-default">
                    Giỏ hàng của bạn
                </h1>
                {items.length === 0 ? (
                    <div className="flex flex-col justify-center items-center mt-10">
                        <div className="flex flex-col justify-center items-center h-[350px] w-[350px] bg-primary_brown/20 rounded-lg shadow-md p-4">
                            <BsCartXFill className="text-primary_yellow w-[150px] h-[150px] opacity-50 transition-transform duration-300 hover:scale-110" />
                            <span className="mt-4 text-2xl text-primary_yellow font-semibold drop-shadow-md opacity-50">
                                Giỏ hàng rỗng
                            </span>
                            <Link to="/menu">
                                <button className="group mt-5 relative px-6 py-3 bg-primary-yellow text-primary-brown rounded-full text-lg font-semibold overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,196,4,0.4)] bg-primary_yellow">
                                    <span className="relative z-10 text-black">
                                        Khám phá ngay
                                    </span>
                                    <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                                </button>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="space-y-6 mt-8">
                            {items.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-[#2a2a2a] rounded-lg p-6 flex gap-6"
                                >
                                    <img
                                        src={`/public/images/meals/${item.image}`}
                                        alt={item.name}
                                        className="w-48 h-48 object-cover rounded-lg"
                                    />

                                    <div className="flex-1">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="text-2xl font-bold text-yellow-400">
                                                    {item.name}
                                                </h3>
                                                <p className="text-gray-400 mt-2">
                                                    {item.description}
                                                </p>
                                            </div>
                                            <button
                                                onClick={() =>
                                                    removeCartItem(item.id)
                                                }
                                                className="text-gray-400 hover:text-red-500"
                                            >
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        </div>

                                        <div className="mt-4 flex items-center gap-6 text-sm text-gray-400">
                                            <div className="flex items-center gap-2">
                                                <Timer className="w-4 h-4" />
                                                <span>
                                                    Thời gian chuẩn bị:{" "}
                                                    {
                                                        item.details
                                                            .preparationTime
                                                    }
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Users className="w-4 h-4" />
                                                <span>
                                                    Khẩu phần ăn:{" "}
                                                    {item.details.servingSize}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="mt-6 flex justify-between items-center">
                                            <div className="flex items-center gap-4">
                                                <button
                                                    onClick={() =>
                                                        updateItemQuantity(
                                                            item.id,
                                                            -1
                                                        )
                                                    }
                                                    className="w-8 h-8 flex items-center justify-center bg-[#3a3a3a] rounded-full hover:bg-yellow-400 hover:text-black transition-colors"
                                                >
                                                    <Minus className="w-4 h-4" />
                                                </button>
                                                <span className="text-xl font-semibold">
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    onClick={() =>
                                                        updateItemQuantity(
                                                            item.id,
                                                            1
                                                        )
                                                    }
                                                    className="w-8 h-8 flex items-center justify-center bg-[#3a3a3a] rounded-full hover:bg-yellow-400 hover:text-black transition-colors"
                                                >
                                                    <Plus className="w-4 h-4" />
                                                </button>
                                            </div>
                                            <span className="text-2xl font-bold text-yellow-400">
                                                $
                                                {(
                                                    parseFloat(item.price) *
                                                    item.quantity
                                                ).toFixed(2)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Cart Summary */}
                        <div className="mt-8 bg-[#2a2a2a] rounded-lg p-6">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-xl">Tổng cộng:</span>
                                <span className="text-3xl font-bold text-yellow-400">
                                    ${total.toFixed(2)}
                                </span>
                            </div>
                            <button className="flex justify-center w-full items-center gap-3 group mt-5 relative px-6 py-4 bg-primary-yellow text-primary-brown rounded-lg text-lg font-semibold overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,196,4,0.4)] bg-primary_yellow">
                                <ShoppingCart className="w-5 h-5 text-black z-10" />

                                <span className="relative z-10 text-black">
                                    Tiến hành thanh toán
                                </span>
                                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Cart;
