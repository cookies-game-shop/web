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


    var total = 0;
    const itemList = (item) => {
        total = total + item.price;
        return (
            <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                    <h6 className="my-0">{item.name}</h6>
                </div>
                <span className="text-muted">${item.price}</span>
            </li>
        );
    }


    return (
        <div>
            <div className="container my-5">
                <div className="row g-5">
                    <div className="col-md-5 col-lg-4 order-md-last">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-black">Your cart</span>
                            <span className="badge bg-black rounded-pill">{products.length}</span>
                        </h4>
                        <ul className="list-group mb-3">
                            {products.map(itemList)}

                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total (USD)</span>
                                <strong>${total}</strong>
                            </li>
                        </ul>
                    </div>



            <div className="col-md-7 col-lg-8">
            <div className="row g-3">
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
                    <NavLink to="/pay" className="w-100 btn-lg btn btn-outline-dark mb-5 w-25 mx-auto">Pay</NavLink>
                </div>
            </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    )
}





export default Cart