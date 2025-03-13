import { CartProvider } from "./components/CartContext";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            🛍️ Shopping Cart
          </h1>
          <ProductList />
          <Cart />
        </div>
      </div>
    </CartProvider>
  );
}

export default App;