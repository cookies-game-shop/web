import {BrowserRouter, Navigate, Redirect, Route, Routes} from 'react-router-dom';
import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";
import ProductDetail from "./components/ProductDetail";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import AuthService from "./service/authService";
import AddGame from "./components/AddGame";

/*const isAdmin = AuthService.isAdmin();
const isAdminContext = createContext(isAdmin);
console.log(isAdmin)*/

function App(){


    return (
        <>
            {/*<isAdminContext.Provider value={isAdmin}>*/}
            <Header />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/products/:id" element={<ProductDetail/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/add-game" element={<AddGame/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
                <Route
                    path="/"
                    element={<Navigate to="/" replace />}
                />
            </Routes>
            {/*</isAdminContext.Provider>*/}
        </>
    );
}

export default App;
