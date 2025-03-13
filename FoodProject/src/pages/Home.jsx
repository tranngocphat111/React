import Introduct from "../components/Introduct";
import Meals from "../components/Meals";
import { data } from "../data";
import Highlights from "../components/Highlights";
import BestSeller from "../components/BestSeller";
import TopReviews from "../components/TopReviews";

export default function Home() {
  return (
    <div className="mx-auto">
      <div className="flex justify-center flex-col items-center ">
        <Introduct />
      </div>
      <BestSeller />
      <Highlights />

      <div className="flex justify-center flex-col items-center ">
        <Meals meals={data} max={6} isTitle={true}/>
      </div>
      
      <TopReviews />
    </div>
  );
}
