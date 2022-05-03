import {BrowserRouter, Navigate, Redirect, Route, Routes} from 'react-router-dom';
import Home from "./components/Home";
import Product from "./components/Product";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import ProductDetail from "./components/ProductDetail";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";


function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/products/:id" element={<ProductDetail/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
                <Route
                    path="/"
                    element={<Navigate to="/" replace />}
                />
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
