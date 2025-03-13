import React, { useState } from "react";
import { Utensils } from "lucide-react";
import { Link } from "react-router-dom";
import { data } from "../data";
import Meal from "../components/Meal";
import Meals from "../components/Meals";

const categories = [
  "Tất Cả",
  "Món Chính",
  "Món phụ",
  "Món Tráng Miệng",
];

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("Tất Cả");

  const filteredItems =
    selectedCategory === "Tất Cả"
      ? data
      : data.filter((item) => item.category === selectedCategory);

  return (
    <div className="w-[80%] p-4 mx-auto">
      <div className="container mx-auto px-4 py-12 mt-14">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary_yellow mb-4">
            Thực Đơn Của Chúng Tôi
          </h1>
          <p className="text-gray-300">
            Chúng tôi đã chọn lọc tất cả các món ăn ngon miệng với nguyên liệu
            tuyệt vời
          </p>
          <p className="text-gray-300">
            Bạn cần thay đổi để tạo ra hạnh phúc thực sự
          </p>
        </div>

        <div className="flex justify-center gap-4 ">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? "bg-primary_yellow text-primary_brown"
                  : "text-primary_yellow border border-primary_yellow hover:bg-primary_yellow hover:text-primary_brown"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

       <Meals meals={filteredItems} max={filteredItems.length} isTitle={false}/>
      </div>
    </div>
  );
}

export default Menu;
