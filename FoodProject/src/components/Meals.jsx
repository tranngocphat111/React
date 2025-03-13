import { Link } from "react-router-dom";
import Meal from "./Meal";

export default function Meals({ meals, max, isTitle }) {
  return (
    <>
      {isTitle && (
        <div className="relative group w-fit mt-10  ">
          <h1 className="text-[42px] font-bold text-left text-primary_yellow relative uppercase ">
            <span className="relative z-10  drop-shadow-default">
              Danh sách bán chạy
            </span>
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary_yellow rounded-full shadow-md transition-all duration-500 ease-in-out group-hover:w-full"></span>
          </h1>
        </div>
      )}

      <section className="py-5 mb-10">
        <div className="w-full p-4 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {meals.map((meal, index) => {
              if (index < max) {
                return <Meal meal={meal} key={meal.id} />;
              }
            })}
          </div>
        </div>
      </section>
    </>
  );
}
