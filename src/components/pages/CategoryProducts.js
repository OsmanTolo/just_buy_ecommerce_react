import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useMatches } from "react-router";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Product from "./Product";
import store from "../../store";

export default function CategoryProducts() {
  //Get category name from URL
  const { name } = useParams();
  //Create state handler for products
  const [products, setProducts] = useState([]);

  //Request data from API
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/category/${name}`)
      .then(({ data }) => {
        setProducts(data);
      });
  }, [name]);

  const handleAddToBasket = (product) => {
    // Send a message to the store to add a product to the cart
    store.dispatch({ type: "cart/productAdded", payload: product });
  };

  //Display loading before state change has occurred
  if (products.products) {
    return (
      <div className="products-div custom-container">
        {products.products.map(({ id, title, images, price, description }) => (
          <div key={title} className="product-card">
            <img
              src={images[0]}
              className="product-image"
              style={{ width: "100%" }}
              alt={description}
            />
            <div
              style={{
                position: "relative",
                bottom: "0",
                left: "0",
                backgroundColor: "black",
                color: "white",
                padding: "5px",
              }}
            >
              <div className="product-name">{title}</div>
              <div>${price}</div>
              <div className="buttons">
                <button
                  className="add-button prod-button"
                  onClick={() => handleAddToBasket({ title, images, price })}
                >
                  Add
                </button>
                <Link to={`product/${id}`} key={"product " + id + " link"}>
                  <Routes>
                    {/*Create a route with a placeholder id element on the end of the URL*/}
                    <Route
                      path="product/:id"
                      element={<Product data={products.products} />}
                    />
                  </Routes>
                  <button className="more-button prod-button">Info</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    return <h2>Loading</h2>;
  }
}
