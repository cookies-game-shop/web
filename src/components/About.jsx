import React from "react";
import LoremIpsum from "react-lorem-ipsum";

let Image = require("../assets/cookie.png")
const About =() =>{
    return(
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="fw-bold mb-4">About Us</h1>
                        <p className="lead mb-4">
                        <LoremIpsum p={2}/>
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