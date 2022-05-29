import React from "react";
import LoremIpsum from "react-lorem-ipsum";

let Image = require("../assets/photo_2022-04-06_20-57-55.jpg")
const About =() =>{
    return(
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="fw-bold mb-4">About Us</h1>
                        <p className="lead mb-4">
                            Our project is online store to buy computer games.
                            Who is this app for: Our application is aimed at everyone who is fond of games
                            What tasks the application solves: Our application gives you the opportunity to buy games online without leaving home
                        </p>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                    <img src={Image} alt="About Us"
                    height="500px" width="500px"/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About