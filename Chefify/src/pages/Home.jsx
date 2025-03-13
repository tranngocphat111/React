import CartDisplay from "../components/CartDisplay";
import ModalLogin from "../components/ModalLogin";
import Panner from "../components/Panner";

const Home = () => {
  return (
    <>
      <Panner />
      <CartDisplay
        title="This Summer Recipes"
        description="We have all your Independence Day sweets covered"
        isDiff={false}
      />

      <CartDisplay
        title="Recipes With Videos"
        description="Cooking up Culinary Creations with Step-by-Step Videos"
        isDiff={false}
      />

      <CartDisplay
        title="Editor's pick"
        description="Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!"
        isDiff={true}
      />

    </>
  );
};
export default Home;
