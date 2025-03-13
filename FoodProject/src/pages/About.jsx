import { Clock, MapPin, Star } from "lucide-react";
import { Carousel } from "antd";
import { Link } from "react-router-dom";
import Slides from "../components/Slides";
import Highlights from "../components/Highlights";
import InsideInfor from "../components/InsideInfo";
import Reviews from "../components/Reviews";
import TopReviews from "../components/TopReviews";
export default function About() {
  return (
    <>
      <section className="px-6 py-16 md:py-24 grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        <div className="space-y-6 text-center md:text-left mt-10">
          <h1 className="text-5xl font-bold text-primary_yellow leading-tight transform hover:scale-105 transition-transform duration-300  drop-shadow-default">
            Chúng tôi mang đến
            <span className="block mt-2"> Những bữa ăn lành mạnh</span>
            <span className="block mt-2"> Cho gia đình bạn</span>
          </h1>
          <p className="text-gray-300 leading-relaxed text-xl">
            Trải nghiệm hương vị chân thật và nguyên bản từ gian bếp của chúng
            tôi đến bàn ăn của bạn. Đội ngũ đầu bếp luôn chuẩn bị từng món ăn
            với sự tận tâm và tỉ mỉ.
          </p>
          <div className="flex space-x-4 ">
            <Link to="/contact">
              <button className="group relative px-8 py-4 bg-primary-yellow text-primary-brown rounded-full text-lg font-semibold overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,196,4,0.4)] bg-primary_yellow">
                <span className="relative z-10 ">
                  Liên hệ với chúng tôi ngay
                </span>
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </button>
            </Link>

            <Link to="/menu">
              <button className="px-8 py-4 border-2 border-primary_yellow text-primary_yellow rounded-full text-lg font-semibold hover:bg-primary-yellow hover:text-primary-brown transition-all duration-300">
                Xem thực đơn
              </button>
            </Link>
          </div>
        </div>
        <Slides />
      </section>

      <Highlights />

      <InsideInfor />

        <TopReviews />
      
    </>
  );
}
