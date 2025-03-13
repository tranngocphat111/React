import { Carousel } from "antd";

export default function Slides() {
  return (
    <div>
      <Carousel
        autoplay
        autoplaySpeed={1500}
        effect="fade"
        arrows
        infinite={true}
        className="shadow-2xl mt-10"
        dots={{ className: "custom-dots" }}
      >
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80"
          alt="Delicious food plate"
          className="rounded-lg w-full h-[400px] object-cover shadow-lg transition-all duration-700 ease-in-out"
        />
        <img
          src="https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?auto=format&fit=crop&q=80"
          alt="Delicious food plate"
          className="rounded-lg w-full h-[400px] object-cover shadow-lg transition-all duration-700 ease-in-out"
        />
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80"
          alt="Delicious food plate"
          className="rounded-lg w-full h-[400px] object-cover shadow-lg transition-all duration-700 ease-in-out"
        />
        <img
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80"
          alt="Delicious food plate"
          className="rounded-lg w-full h-[400px] object-cover shadow-lg transition-all duration-700 ease-in-out"
        />
      </Carousel>
    </div>
  );
}
