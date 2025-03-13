import { useCart } from "./CartContext";
import { useState } from "react";

const Cart = () => {
  const { cart, removeFromCart, totalItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const groupedCart = cart.reduce((acc, product) => {
    if (acc[product.id]) {
      acc[product.id].quantity += 1;
    } else {
      acc[product.id] = { ...product, quantity: 1 };
    }
    return acc;
  }, {});

  const groupedItems = Object.values(groupedCart);

  return (
    <div className="relative">
      <button
        onClick={() => setIsCartOpen(!isCartOpen)}
        className="fixed top-8 right-8 p-4 bg-indigo-500 text-white rounded-full shadow-lg hover:bg-indigo-600 transition-colors duration-200"
      >
        🛒 ({totalItems})
      </button>

      {isCartOpen && (
        <div className="fixed top-20 right-8 w-96 bg-white rounded-lg shadow-lg border border-gray-200">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              🛒 Your Cart ({totalItems} items)
            </h2>
            {groupedItems.length === 0 ? (
              <p className="text-gray-500">Your cart is empty</p>
            ) : (
              <div className="space-y-4">
                {groupedItems.map((product) => (
                  <div
                    key={product.id}
                    className="flex justify-between items-center p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                      <div>
                        <span className="text-gray-700 font-medium">
                          {product.name} (x{product.quantity})
                        </span>
                        <p className="text-green-500 font-semibold">
                          ${product.price * product.quantity}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-200"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;