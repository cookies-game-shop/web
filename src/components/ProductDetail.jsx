import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router";

export default function ProductDetail (props) {
    const[products, setProducts]=useState([]);
    const {id} = useParams();
    useEffect(()=>{
        fetchProducts();
    },[])
    function fetchProducts(){
        axios.get(`http://localhost:8080/game/get-game?id=${id}`)
            .then((res)=>{
                console.log(res)
                setProducts(res.data)
            })
            .catch((err)=>{
                console.log(err);
            })
    }




        return (
            <>
                <div className="container my-5 py-3">
                    <div className="row">
                        <div className="col-md-6 d-flex justify-content-center mx-auto product">
                            <img src={props.previewImage} alt={products.name} height="400px"/>
                        </div>
                        <div className="col-md-6 d-flex flex-column justify-content-center">
                            <h1 className="display-5 fw-bold">{products.name}</h1>
                            <hr/>
                            <h2 className="my-4">{products.price}</h2>
                            <p className="lead">{products.par}</p>
                            <button
                                    className="btn btn-outline-dark my-5">btn</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }


