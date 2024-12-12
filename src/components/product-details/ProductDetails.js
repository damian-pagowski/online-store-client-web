
import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";
import { CartContext } from "../../context/CartContext";
import { UserContext } from "../../context/UserContext";

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { state: { products }, loadProductById } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [reviews, setReviews] = useState([]);
  const BASE_URL = process.env.REACT_APP_API_URL;
  const { user } = useContext(UserContext); 

  useEffect(() => {
    const fetchProductDetails = async () => {
      let productData = products.find(p => p.productId === Number(productId));
      if (!productData) {
        productData = await loadProductById(productId);
      }
      setProduct(productData);
    };

    fetchProductDetails();
  }, [productId, products, loadProductById]);

  // reviews
  useEffect(() => {
    const randomReviews = [
      "Great product! Highly recommend it.",
      "Decent quality for the price.",
      "The product didn't match the description, but customer support resolved it.",
      "Absolutely love it! Will buy again.",
      "Fast shipping and excellent condition."
    ];
    const randomGeneratedReviews = Array.from({ length: 3 }, () => {
      const randomIndex = Math.floor(Math.random() * randomReviews.length);
      return randomReviews[randomIndex];
    });
    setReviews(randomGeneratedReviews);
  }, []);


  const handleQuantityChange = (e) => {
    const value = Math.max(1, parseInt(e.target.value) || 1);
    setQuantity(value);
  };

  const handleAddToCart = () => {
    if (product) {
      for (let i = 0; i < quantity; i++) {
        addToCart(product);
      }
      navigate("/cart");
    }
  };

  if (!product) {
    return <h2>Loading...</h2>;
  }


  return (
    <div>      
      <div className="product-list-container">
        <div className="product-list-grid">
          <div className="item1">
           
          </div>
          <div className="item2">
{/* Product Details */}

<div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img 
                  src={`${BASE_URL}${product.image}`}

            alt={product.name} 
            className="img-fluid" 
            style={{ maxHeight: "300px" }} 
          />
        </div>

        <div className="col-md-6">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <h3>Price: EUR {product.price}</h3>

          <div className="my-4">
          <label htmlFor="quantity" className="form-label">Quantity</label>

          <div class="input-group">

            <input 
              type="number" 
              id="quantity" 
              className="form-control" 
              value={quantity} 
              onChange={handleQuantityChange} 
              min="1" 
            />
            <button 
            className="btn btn-success" 
            onClick={handleAddToCart}
            disabled={!user?.token} 
          >
            Add to Cart
          </button>
          </div>

          

          </div>
        

        </div>
      </div>

      <hr />

      <div className="reviews mt-5">
        <h3>Reviews</h3>
        {reviews.map((review, index) => (
          <div key={index} className="alert alert-info">
            {review}
          </div>
        ))}
      </div>
    </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;