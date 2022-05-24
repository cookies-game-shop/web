import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import {useParams} from "react-router";
import axios from "axios";

const Checkout = () => {
    const [products, setProducts] = useState([]);

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
    useEffect(() => {
        fetchCart();
    }, [])


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
        <>
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
                </div>
                <button className="btn-lg btn btn-outline-dark mx-auto" type="submit">Continue to checkout</button>
            </div>


        </>
    )
}

export default Checkout