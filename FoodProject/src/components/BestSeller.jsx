import React from 'react';

function BestSeller() {
  return (
    <div className="min-h-screen bg-black">
      <div className="relative w-full h-screen flex items-center">
        <div className="absolute top-8 left-8">
          <span className="text-primary_yellow font-bold text-2xl tracking-wider text-center">BEST SELLER</span>
        </div>
        
        <div className="container mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=80"
              alt="Bánh mì gà nướng"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
          
          <div className="w-full md:w-1/2 text-white">
            <div className="flex gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-10 h-10 text-primary_yellow fill-current p-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            
            <h1 className="text-5xl font-bold mb-6">Bánh mì gà nướng</h1>
            
            <p className="text-xl text-gray-300 mb-8 italic">
              "Ức gà nướng mềm với bơ, thịt xông khói, rau xà lách và sốt mật ong mù tạt trên bánh mì nướng"
            </p>
            
            
            <button className="group relative px-8 py-3 bg-primary-yellow text-primary-brown rounded-full text-lg font-semibold overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,196,4,0.4)] bg-primary_yellow">
                <span className="relative z-10 text-black">Xem ngay</span>
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestSeller;