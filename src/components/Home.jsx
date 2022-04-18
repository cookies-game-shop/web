import React from "react";
import DATA  from "../Data"
import {NavLink} from "react-router-dom";
const Home =() =>{

    const cardItem =(item)=>{
        return(
            <div className="card my-5 py-4" key={item.id} style={{width: "18rem"}}>
                <img src={item.img} className="card-img-top" alt={item.name}/>
                    <div className="card-body text-center">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="lead">${item.price}</p>
                        <NavLink to={`/products/${item.id}`} className="btn btn-outline-dark">Buy now</NavLink>
                    </div>
            </div>
        );
    }

    return(
        <div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>Welcome</h1>
                        <hr/>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row mt-3 ml-2 justify-content-md-around">
                    {DATA.map(cardItem)}
                </div>
            </div>

        </div>
    )
}

export default Home