import React, {useEffect, useState} from 'react'
import {NavLink} from "react-router-dom";
import axios from "axios";
import {useParams} from "react-router";
import cartService from "../service/cartService";
import {setImages} from "../service/utils";

const Cart=()=> {
    const [products, setProducts] = useState([]);

    function fetchCart() {
        axios.get("http://localhost:8080/user/get-cart", {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then((res) => {
               const arr = res.data;
                const cop = setImages(arr);
                setProducts(cop);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    const handleClose =  (id) => {
        cartService.deleteFromCart(id).then(()=>  console.log("DELETED")).catch(e=>{console.log(e)});
    }

    useEffect(() => {
        fetchCart();
    }, [products])


    return (
        <div>
            {products.map((item, i) =>
                <div className="px-4 my-5 bg-light rounded-3" key={item.id}>
                    <div className="container py-4">
                        <button onClick={() =>handleClose(item.id)} className="btn-close float-end" aria-label="Close"/>
                        <div className="row justify-content-center">
                            <div className="col-md-4">
                                <img src={item.previewImage} alt={item.name} height="200px"
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
            <div className="container">
                <div className="row">
                    <NavLink to="/checkout" className="btn-lg btn btn-outline-dark mb-5 w-25 mx-auto">Checkout</NavLink>
                </div>
            </div>
        </div>)
}



  /* /* const emptyCart=()=>{
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

     /*const button = () => {
         return(
             <div className="container">
                 <div className="row">
                     <NavLink to="/checkout" className="btn btn-outline-dark mb-5 w-25 mx-auto">Checkout</NavLink>
                 </div>
             </div>
         );
     }

     return(
          <>

              { button()}
          </>
      )*/


export default Cart