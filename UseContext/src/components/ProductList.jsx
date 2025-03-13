import { useCart } from "./CartContext";

const products = [
  { id: 1, name: "iPhone 15", price: 999, image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/42/281570/iphone-15-pink-2-638629454255353553-750x500.jpg" },
  { id: 2, name: "Samsung Galaxy S24", price: 899, image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/60/330732/op-lung-galaxy-s24-fe-silicone-samsung-den-1-638646757826563741-750x500.jpg" },
  { id: 3, name: "Google Pixel 8", price: 799, image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_4__2.jpg" },
];

const ProductList = () => {
  const { addToCart } = useCart();

  return (
    <div className="max-w-6xl mx-auto p-8 bg-gray-400 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 animate-fade-in">
        📱 Top Smartphones
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-indigo-500 transition-colors duration-300">
                {product.name}
              </h3>
              <p className="text-indigo-500 text-lg font-bold mt-2">${product.price}</p>
              <button
                className="mt-4 w-full px-4 py-2 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-600 transition-all duration-300 hover:scale-105"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;