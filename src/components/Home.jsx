import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { setImages } from "../service/utils";
import {ToastContainer} from "react-toastify";

const Home = () => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    await axios.get("http://localhost:8080/game/get-list-game").then((res) => {
      const arr = res.data;
      const cop = setImages(arr);
      setGames(cop);
    });
  }

  const cardItem = (item) => {
    return (
        <div className="card my-5 py-4" key={item.id} style={{ width: "18rem" }}>
          <img
              src={item.previewImage}
              className="card-img-top"
              alt={item.name}
              style={{
                maxWidth: "350px",
                maxHeight: "210px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
          />
          <div className="card-body text-center">
            <h5 className="card-title">{item.name}</h5>
            <p className="lead">${item.price}</p>
            <NavLink to={`/products/${item.id}`} className="btn btn-outline-dark">
              Buy now
            </NavLink>
          </div>
        </div>
    );
  };

  return (
    <div>
        <div className="container py-5">
          <div className="row">
            <div className="col-12 text-center">
              <h1>Welcome</h1>
              <hr />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row mt-3 ml-2 justify-content-md-around">
            {games.map(cardItem)}
          </div>
        </div>
      </div>
  );
};

export default Home;