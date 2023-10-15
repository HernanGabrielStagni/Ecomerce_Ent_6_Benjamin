import React, { useState } from "react";

const ProductIdInfo = ({ product }) => {
console.log(product)

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
    <section>
      <h3>{product?.brand}</h3>
      <h2>{product?.title}</h2>
      <p>{product?.description}</p>

      <footer>
        <div>
          <span>Price : $ </span>
          <span>{product?.price}</span>
        </div>

        <div>
          {" "}
          {/* cantidad y botones + y - */}
          <span> Quantity</span>
          <div>
            <button onClick={handleMinus}> - </button>
            <span>{quantity}</span>
            <button onClick={handleAdd}> + </button>
          </div>
          <button>
            add to cart <i className="bx bx-cart"></i>
          </button>
        </div>
      </footer>
    </section>
  );
};

export default ProductIdInfo;
