import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Menu from "./pages/Menu";
import MealDetial from "./pages/MealDetail";
import Cart from "./components/Cart";
import CartProvider from "./store/CartContext";

function App() {
    return (
        <CartProvider>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/MealDetail/:id" element={<MealDetial />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
                <Footer />
            </Router>
        </CartProvider>
    );
}

export default App;
