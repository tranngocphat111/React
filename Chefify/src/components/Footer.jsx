import logoWhite from '../assets/white_chefify.png'

const Footer = () => {
  return (
    <div className="w-full h-[350px] text-white bg-gray-900 p-10 grid grid-cols-2 gap-10">
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-bold">About Us</h2>
        <p className="text-md">
          Webcome to our website, a wonderful place to explore and learn how to
          cook like apro
        </p>
        <div>
          <input
            type="text"
            placeholder="Enter your email"
            className="px-6 py-2 w-[70%] rounded-lg"
          />

          <button className="py-2 px-5 bg-primary rounded-lg ml-4 transition hover:bg-pink-700">Send</button>
        </div> 
        <div className='mt-[100px] flex gap-5 items-center'>
            <img src={logoWhite} alt="logoWhite" />
            <span>2023 Chefify Company</span>
            <span>Term of Servicel Privacy Policy</span>

        </div>
      </div>


      <div className='grid grid-cols-2'>
            <div className='flex flex-col justify-between'>
                <ul className='text-md flex flex-col gap-3 px-10'>
                    <li className='text-lg font-bold'>Learn More</li>
                    <li>Our Cooks</li>
                    <li>See Our Fetures</li>
                    <li>FAQ</li>
                </ul>

                <ul className='text-md flex flex-col gap-3 px-10'>
                    <li className='text-lg font-bold'>Shop</li>
                    <li>Gift Subscription</li>
                    <li>Send Us Feedback</li>
                </ul>
            </div>

            <div className='flex flex-col justify-between'>
                <ul className='text-md flex flex-col gap-3 px-10'>
                    <li className='text-lg font-bold'>Recipes</li>
                    <li>What to Cook This Week</li>
                    <li>Pasta</li>
                    <li>Dinner</li>
                    <li>Healthy</li>
                    <li>Vegetarian</li>
                    <li>Vegan</li>
                    <li>Christmas</li>
                </ul>

                
            </div>
      </div>
      
    </div>
  );
};

export default Footer;
