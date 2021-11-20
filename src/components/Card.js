import React from "react";
import "./card.css";

const Card = ({
  img,
  name,
  sizes,
  colors,
  price,
  id,
  addToCart,
  removeFromCart,
  inCart,
}) => {
  return (
    <div className="card" key={id}>
      <div className="product-img">
        <img src={img} width="100px" alt="cloth" />
      </div>

      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <div className="specs-container">
          <div className="text-container">
            <p className="spec-name">Size:</p>
            <p className="sizes">
              {sizes ? sizes.map((val) => <p className="size">{val}</p>) : ""}
            </p>
          </div>

          <div className="text-container">
            <p className="spec-name">Color:</p>
            <div className="colors">
              {colors
                ? colors.map((col) => (
                    <p className="color" style={{ backgroundColor: col }}></p>
                  ))
                : ""}
            </div>
          </div>

          <div className="text-container">
            <p className="spec-name">Price:</p>
            <p>{price}$</p>
          </div>
        </div>

        <div className="btn-container">
          {inCart ? (
            <button className="btn" onClick={() => removeFromCart(id)}>
              Remove from cart
            </button>
          ) : (
            <button className="btn" onClick={() => addToCart(id)}>
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
