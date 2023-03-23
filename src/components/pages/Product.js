import axios from "axios";
import React, {useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import store from "../../store";
import { useNavigate } from "react-router-dom";


function Product({data}) {
    //Create state handler for products
    const [item, setItem] = useState([]);
    //Create state handler for product images
    const [imgSrc, setImgSrc] = useState();
    //Get id and category parameters from URL
    let {id, category} = useParams();

    const handleAddToBasket = (item) => {
        //Send message to store to add product to cart
        store.dispatch({ type: 'cart/productAdded', payload: item })
      };
    
    //Use the navigator hook to allow users to go back
    const navigate = useNavigate();
    //Create function to move back one page
	const moveBack = () => {
		navigate(-1);
	}
    useEffect (() => {
        axios
        .get(`https://dummyjson.com/products/${id}`)
        .then(({ data }) => {
            //Set product to use requested data
            setItem(data);
            //Set product image to use requested data
            setImgSrc(data.images[0]);
        });
        }, [id]); 
    
    //Display loading before state change has happened
    if (item) {
        return (
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="d-flex flex-column container-fluid col-md-7 py-5 align-items-center">
                    <button type="button" className="btn btn-secondary" onClick={moveBack}>Back</button>
                    <h2 className="display-5 fw-bold">{item.title}</h2>
                    <div className="product-content d-flex col-md-8">
                        <div className="col-md-5">
                            <img src={imgSrc}/>
                        </div>
                        <div className="d-flex col-md-10 flex-column align-items-center justify-content-center">
                            <p className="col-md-12 fs-4">{item.description}</p>
                            <p className="col-md-4 fs-4 d-flex justify-content-center">£{item.price}</p>
                            <p className="col-md-4 fs-4 d-flex justify-content-center">{item.rating}</p>
                            <button type="button" className="btn btn-primary" onClick={() => handleAddToBasket(item.title, item.images, item.description, item.price)}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        )}
    else {
        return (
            <h2>Loading</h2>
        )
    }
}

export default Product;