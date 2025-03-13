import React from "react";
import { Link } from "react-router-dom";

const images = [
  { id: 1, img: "/public/images/panner/pexels-cottonbro-3298633.jpg" },
  { id: 2, img: "/images/panner/pexels-cottonbro-4252146.jpg" },
  { id: 3, img: "/public/images/panner/pexels-cottonbro-3298689.jpg" },
];

export default function Introduct() {
  return (
    <section className="bg-gradient-primary text-primary-brown min-h-screen flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl w-full px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-5xl lg:text-7xl font-bold text-primary_yellow leading-tight transform hover:scale-105 transition-transform duration-300 drop-shadow-default">
            Chào mừng đến
            <span className="block mt-2"> Amazing Food</span>
          </h1>
          <p className="text-xl text-white/90 leading-relaxed max-w-xl animate-slide-up">
            Là điểm đến lý tưởng dành cho những ai yêu thích ẩm thực đẳng cấp.
            Với sự kết hợp hài hòa giữa hương vị truyền thống và phong cách chế
            biến hiện đại, chúng tôi mang đến những trải nghiệm ẩm thực tinh tế,
            chinh phục cả những thực khách khó tính nhất.
          </p>
          <div className="flex space-x-4">
            <Link to="/menu">
              <button className="group relative px-8 py-4 bg-primary-yellow text-primary-brown rounded-full text-lg font-semibold overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,196,4,0.4)] bg-primary_yellow">
                <span className="relative z-10 ">Khám phá ngay</span>
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </button>
            </Link>

            <Link to="/about">
              <button className="px-8 py-4 border-2 border-primary_yellow text-primary_yellow rounded-full text-lg font-semibold hover:bg-primary-yellow hover:text-primary-brown transition-all duration-300">
                Xem thêm
              </button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 transform hover:scale-[1.02] transition-transform duration-500">
          <div className="space-y-4">
            <div className="overflow-hidden rounded-2xl shadow-md shadow-[#ffc404]">
              <img
                src={images[0].img}
                alt={images[0].alt}
                className="w-full h-[200px] object-cover transform  hover:scale-110 transition-transform duration-700  "
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-md shadow-[#ffc404]">
              <img
                src={images[2].img}
                alt={images[2].alt}
                className="w-full h-[200px] object-cover transform hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-md shadow-[#ffc404]">
            <img
              src={images[1].img}
              alt={images[1].alt}
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
