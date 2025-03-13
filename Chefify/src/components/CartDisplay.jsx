import iconButton from "../assets/Icon Button 73.png";
import img1 from "../assets/Italian-style tomato.png";
import img2 from "../assets/Bean, shrimp, and potato salad.png";
import avatar from "../assets/avatar.png";

const CartDisplay = ({ title, description, meals, isDiff }) => {
  return (
    <div className="w-full flex flex-col text-center mt-12 mb-[120px] items-center">
      <h1 className="text-primary  font-bold text-[40px] my-1">{title}</h1>
      <p className="text-stone-800 mb-9 text-xl">{description}</p>
      {!isDiff && (
        <div className="flex gap-6 justify-center ">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden border border-stone-300 shadow-md shadow-stone-400 hover:translate-y-[-8px] transition-all  duration-300 ease-in-out cursor-pointer"
            >
              <img
                src={img1}
                alt="Italian-style tomato salad"
                className="h-[180px] object-cover"
              />
              <div className="flex justify-between py-2 px-3 items-center">
                <span className="text-left font-bold text-md max-w-[200px] text-stone-800">
                  Italian-style tomato salad
                </span>
                <img src={iconButton} alt="iconButton" />
              </div>
              {/* <span>{meal.preparationTime}</span> */}
              <span className="ml-3 px-3 py-1 rounded-lg bg-second text-sm text-primary float-left mb-4 font-semibold">
                14 minutes
              </span>
            </div>
          ))}
        </div>
      )}

      {isDiff && (
        <div className="w-[80%] grid grid-cols-2  gap-6 justify-center ">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="flex  rounded-lg overflow-hidden border border-stone-300 shadow-md shadow-stone-400 hover:translate-y-[-8px] transition-all  duration-300 ease-in-out cursor-pointer"
            >
              <img
                src={img2}
                alt="Italian-style tomato salad"
                className="h-[180px] w-[180px]  object-cover m-3 rounded-lg"
              />
              <div className="flex flex-col text-left p-2 w-full">
                <div className="flex justify-between   items-center">
                <span className="text-left font-bold text-xl  text-stone-800">
                  Italian-style tomato salad
                </span>
                <img src={iconButton} alt="iconButton" className="h-10 w-10"/>
              </div>

             
              <span className="text-sm">34 minutes</span>
              <div className="flex gap-3 py-3 items-center">
                <img src={avatar} alt="avatar" className="w-10 h-10"/>
                <span className="text-md font-semibold ">Jennifer King</span>
              </div>
              <span className="text-[15px]">Stuffed sticky rice balls: A delightful Asian treat with chewy, glutinous rice a flavorful surprise filling...</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartDisplay;
