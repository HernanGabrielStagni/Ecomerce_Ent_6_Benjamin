import React, { useState } from "react";
import './ProductIdInfo_CSS.css'
import SimilarProducts from "./SimilarProducts";
const ProductIdInfo = ({ product }) => {
//console.log(product)

  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    setQuantity(quantity + 1);
  };

  const handleMinus = () => {
    if (quantity> 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <section className="container_gral">
     <article className="container_info">
      <h3 className="product__brand">{product?.brand}</h3>
      <h2 className="product__title">{product?.title}</h2>
      <p className="product__description">{product?.description}</p>

      <div className="price__title-value">
        <div className="price">
          <span>Price : $ </span>
          <span>{product?.price}</span>
        </div>

          <div className="quantyti__count">
              <span> Quantity</span>
          
              <div className="container__button"> {/* div del contadoor */}
                <button className="button__count" onClick={handleMinus}> - </button>
                <span>{quantity}</span>
                <button className="button__count" onClick={handleAdd}> + </button>
              </div>
         </div>
      </div>
         
          <button className="button__cart">
            add to cart <i className="bx bx-cart"></i>
          </button>
        
          </article>
     
    </section>
  );
};

export default ProductIdInfo;
