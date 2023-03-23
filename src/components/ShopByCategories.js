import "../assets/css/shopByCategories.css";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CategoryProducts from "./pages/CategoryProducts";

export default function ShopByCategories() {
  return (
    <div className="shop-page">
      <section className="categories custom-container">
        <h2 className="header-caption">Our Top Categories</h2>
        <div className="grid-container category-links">
          <div className="shop-card clothing">
            <Link to="/category/womens-dresses">
              <Routes>
                <Route to="/category/:name/*" element={<CategoryProducts />}/>
              </Routes>
              <img
                className="shop-card__img"
                src="https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=734&q=80"
                alt=""
              />
              <p className="shop-card__caption">Women's Dresses</p>
            </Link>
          </div>
          <div className="shop-card groceries">
            <Link to="/category/groceries">
              <Routes>
                <Route to="/category/:name/*" element={<CategoryProducts />}/>
              </Routes>
              <img
                className="shop-card__img"
                src="https://images.unsplash.com/photo-1608686207856-001b95cf60ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
                alt=""
              />
              <p className="shop-card__caption">Groceries</p>
            </Link>
          </div>
          <div className="shop-card footwear">
            <Link to="/category/mens-shoes">
              <Routes>
                <Route to="/category/:name/*" element={<CategoryProducts />}/>
              </Routes>
              <img
                className="shop-card__img"
                src="https://images.unsplash.com/photo-1588361861040-ac9b1018f6d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vdHdlYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <p className="shop-card__caption">Men's Shoes</p>
            </Link>
          </div>
          <div className="shop-card tech">
            <Link to="/category/laptops">
              <Routes>
                <Route to="/category/:name/*" element={<CategoryProducts />}/>
              </Routes>
              <img
                className="shop-card__img"
                src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                alt=""
              />
              <p className="shop-card__caption">Laptops</p>
            </Link>
          </div>
          <div className="shop-card home">
            <Link to="/category/furniture">
              <Routes>
                <Route to="/category/:name/*" element={<CategoryProducts />}/>
              </Routes>
              <img
                className="shop-card__img"
                src="https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
              />
              <p className="shop-card__caption">Furniture</p>
            </Link>
          </div>
          <div className="shop-card beauty">
            <Link to="/category/skincare">
              <Routes>
                <Route to="/category/:name/*" element={<CategoryProducts />}/>
              </Routes>
              <img
                className="shop-card__img"
                src="https://images.unsplash.com/photo-1643185539104-3622eb1f0ff6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
              />
              <p className="shop-card__caption">Skincare</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
