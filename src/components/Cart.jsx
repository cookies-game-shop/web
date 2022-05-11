import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {delItem} from "../actions";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {useParams} from "react-router";
import cartService from "../service/cartService";

const Cart=()=> {
    const [products, setProducts] = useState([]);
    const {game_id} = useParams();
    const {username}=useParams();

    function fetchCart() {
        axios.get("http://localhost:8080/user/get-cart", {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then((res) => {
                console.log(res)
                setProducts(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }
    const handleClose = async (e) => {
        e.preventDefault();
        cartService.deleteFromCart(username, game_id)
    }

    useEffect(() => {
        fetchCart();
    }, [])


    return (
        <div>
            {products.map((item, i) =>
                <div className="px-4 my-5 bg-light rounded-3" key={item.id}>
                    <div className="container py-4">
                        <button onClick={handleClose} className="btn-close float-end" aria-label="Close"/>
                        <div className="row justify-content-center">
                            <div className="col-md-4">
                                <img src={item.image} alt={item.name} height="200px"
                                     width="200px"/>
                            </div>
                            <div className="col-md-4">
                                <h3>{item.name}</h3>
                                <p className="lead fw-bold">${item.price}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )


   /* const emptyCart=()=>{
         return(
         <div className="px-4 my-5 bg-light rounded-3 py-5">
             <div className="container py-4">
                 <div className="row">
                     <h3>Your Cart is Empty</h3>
                 </div>
             </div>
         </div>
         )
     }*/

     const button = () => {
         return(
             <div className="container">
                 <div className="row">
                     <NavLink to="/checkout" className="btn btn-outline-dark mb-5 w-25 mx-auto">Checkout</NavLink>
                 </div>
             </div>
         );
     }

    /*  return(
          <>
              {state.length===0 && emptyCart()}
              {state.length!==0 && state.map(cartItems)}
              {state.length !== 0 && button()}
          </>
      )*/
}

export default Cart