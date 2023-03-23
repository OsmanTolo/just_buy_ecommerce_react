import axios from "axios";
import React, { useEffect, useState } from "react";
import "../assets/css/topDeals.css";

const TopDeals = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        // sort products by discount percentage in descending order
        const sortedProducts = response.data.products.sort(
          (a, b) => b.discountPercentage - a.discountPercentage
        );
        // set state to top 5 products with highest discount percentage
        setProducts(sortedProducts.slice(0, 8));
        console.log(sortedProducts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="top-deals">
      <h2 class="header-caption">Products at Slashed Prices</h2>
      <section className="topDeals-grid__container">
        {products.map((product) => (
          <div key={product.id} className="grid-item">
            <div className="topDeal-card">
              <div>
                <img
                  src={product.images[0]}
                  alt={product.description}
                  className="topDeal-card__img"
                />
              </div>
              <div className="topDeal-card__header">{product.title}</div>
              <div className="topDeal-card__price">
                <p className="topDeal-card__discount">
                  {Math.ceil(product.discountPercentage)}% off
                </p>
                <p className="topDeal-card__cost">
                  Price: £{Math.ceil(product.price)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default TopDeals;

// <div key={product.id}>
//   <h2>{product.title}</h2>
//   <img src={product.images[0]} alt="" />
//   <div className="cost">
//     <p>Price: £{Math.ceil(product.price)}</p>
//     <p>
//       Discount Percentage: {Math.ceil(product.discountPercentage)}% off
//     </p>
//   </div>
// </div>
