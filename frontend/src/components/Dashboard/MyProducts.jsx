import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";

const MyProducts = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // Fetch products on mount
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get("http://localhost:1000/product/getAll");
        setProducts(response.data.data || []);
      } catch (error) {
        console.log("Fetch Error:", error.message);
      }
    };
    fetchProduct();
  }, []);

  // Navigate to update product page
  const handleEdit = (productId) => {
    navigate(`/dashboard/update-product/${productId}`);
  };


const handleDelete = async (productId) => {
  try {
    await axios.delete(`http://localhost:1000/product/delete/${productId}`);

    // Update the state after successful deletion
    setProducts(prevProducts => 
      prevProducts.filter(product => product.id !== productId)
    );

    alert("Product deleted successfully!");
  } catch (error) {
    console.log(error);
    alert("Failed to delete product. Please try again.");
  }
};


  return (
    <div className="store-container">
      <h1 className="page-title">My Products</h1>

      {products.length === 0 ? (
        <p className="loading-text">No products found...</p>
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
                  <button className="delete-button" onClick={() => handleDelete(product._id)}>Delete</button>
                  <button className="buy-button" onClick={() => handleEdit(product._id)}>Edit</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyProducts;
