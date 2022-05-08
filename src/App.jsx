import {BrowserRouter, Navigate, Redirect, Route, Routes} from 'react-router-dom';
import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";
import ProductDetail from "./components/ProductDetail";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import AddGame from "./components/AddGame";
import {UserContext, useUserContext} from "./context/UserContext";
import {useState} from "react";

function App() {
    const [token, setToken] = useState(false);

    return (
        <>
            <UserContext.Provider value={{token, setToken}}>
                <Header/>
                <Routes>

                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/login" element={<Login/>}/>


                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/products/:id" element={<ProductDetail/>}/>

                    <Route path="/add-game" element={<AddGame/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/checkout" element={<Checkout/>}/>
                    <Route
                        path="/"
                        element={<Navigate to="/" replace/>}
                    />


                </Routes>
            </UserContext.Provider>
        </>
    );
}

export default App;
