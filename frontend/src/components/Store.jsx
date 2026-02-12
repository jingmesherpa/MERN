import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Store = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1000/product/getAll"
        );
        console.log("Products API:", response.data); // debug

        // Fix: use response.data.data
        setProducts(response.data.data || []);
      } catch (error) {
        console.log("Fetch Error:", error.message);
      }
    };

    fetchProduct();
  }, []);

  const handleClick = (productId, price) => {
    navigate(`/order/${productId}/${price}`);
  };

  return (
    <div className="store-container">
      <h1 className="page-title">Our Collection</h1>

      {products.length === 0 ? (
        <p className="loading-text">Loading products...</p>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <div key={product._id} className="product-card">
              <div className="image-wrapper">
                <img
                  src={product.productImage}
                  alt={product.productName}
                  className="product-image"
                />
              </div>
              <div className="product-content">
                <h3 className="product-name">{product.productName}</h3>
                <p className="product-details">{product.productDetails}</p>
                <div className="price-action-row">
                  <p className="product-price">Rs. {product.price}</p>
                  <button
                    className="buy-button"
                    onClick={() => handleClick(product._id, product.price)}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Store;
