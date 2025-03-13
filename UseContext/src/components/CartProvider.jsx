import { CartProvider } from ".components/CartContext"; 
import ProductList from ".components/ProductList"; 
import Cart from "./Cart"; 
function App() { 
  return ( 
    <CartProvider> 
      <div style={{ padding: "20px" }}> 
        <h1> Shopping Cart</h1> 
        <ProductList /> 
        <Cart /> 
      </div> 
    </CartProvider> 
  ); 
} 
export default App;