import panner from "../assets/Image 73.png";
import avatar from "../assets/avatar.png";
const Panner = () => {
  return (
    <div className="container relative ">
      <img
        src={panner}
        alt="Image panner"
        className="w-full h-screen object-cover"
      />
      <div className="absolute w-[450px] h-[450px] top-[130px] left-[100px] bg-white rounded-lg  border-2 border-dashed border-primary  ">
        <div className="absolute top-[-24px] left-[25%]  px-14 py-2 bg-yellow-400 rounded-md shadow shadow-primary">
          <span>Recipe of the day</span>
        </div>
 
        <div className="flex flex-col justify-center items-center py-10 px-10 text-stone-600 ">
          <h2 className="text-2xl text-primary font-bold py-4">

            Salad Caprese
          </h2>
          <p className="text-center ">
            Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella,
            herbs, olive oil, and balsamic vinegar create a refreshing dish for
            lunch or appetizer.
          </p>
          <img src={avatar} alt="avatar" className="w-12 mt-16 mb-2" />
          <span>Salad Caprese</span>
          <button className="px-4 py-2 bg-primary text-white rounded-lg mt-4 transition hover:bg-pink-700">
            View now →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Panner;
