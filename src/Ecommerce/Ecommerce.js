import React, { useState } from "react";
import "./ecommerce.css";
import img1 from "../images/PngItem_5550642.png";
import Card from "../components/Card";
import { FiShoppingCart } from "react-icons/fi";

const Ecommerce = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = async (id) => {
    data.map((val) => {
      if (val.id === id) {
        if (!isDuplicate(cart, val, cart.length)) {
          let temp = [...cart];
          temp.push(val);
          setCart(temp);
          calculateTotal(temp);
        }
      }
      return true;
    });
  };

  const removeFromCart = async (id) => {
    let temp = [...cart];
    let removed = temp.filter((value) => value.id !== id);
    console.log(removed);
    setCart(removed);
    calculateTotal(removed);
  };

  const isDuplicate = (arr, element, n) => {
    for (let i = 0; i < n; i++) {
      if (arr[i].id === element.id) {
        return true;
      }
    }
    return false;
  };

  const calculateTotal = (cartItems) => {
    let temp = 0;
    cartItems.map((item) => {
      return (temp = +temp + +item.price);
    });
    setTotal(temp);
  };

  const data = [
    {
      id: 1,
      name: "Nike MX5",
      size: [7, 8, 9, 10],
      colors: ["#15ff00"],
      price: "1999",
      img: img1,
    },

    {
      id: 2,
      name: "Nike Air Max",
      size: [7, 8, 9, 10],
      colors: ["#411222", "#15ff00"],
      price: "999",
      img: img1,
    },

    {
      id: 3,
      name: "Nike HP5",
      size: [7, 8, 9, 10],
      colors: ["#789544", "#987421"],
      price: "799",
      img: img1,
    },

    {
      id: 4,
      name: "Nike Runner",
      size: [7, 8, 9, 10],
      colors: ["#542454", "#642178"],
      price: "1399",
      img: img1,
    },

    {
      id: 5,
      name: "Nike Relax",
      size: [7, 8, 9, 10],
      colors: ["#a445ad", "#d45785"],
      price: "899",
      img: img1,
    },

    {
      id: 6,
      name: "Nike Dia",
      size: [7, 8, 9, 10],
      colors: ["#a4fffd", "#f47874"],
      price: "899",
      img: img1,
    },
  ];

  return (
    <div className="ecommerce-contianer">
      <nav className="navbar">
        <h3 className="logo">Steps</h3>
        <h3 className="cart">
          <FiShoppingCart />
          <spin className="cart-size">{cart.length ? cart.length : ""}</spin>
        </h3>
      </nav>

      <div className="body-container">
        <div className="cart-container collapse">
          {cart.length ? (
            cart.map((info) => (
              <Card
                id={info.id}
                img={info.img}
                name={info.name}
                sizes={info.size}
                colors={info.colors}
                price={info.price}
                removeFromCart={removeFromCart}
                inCart={true}
              />
            ))
          ) : (
            <h4 className="empty-cart">No Items in Cart</h4>
          )}
          <div className="total-container">
            <h5 className="total">Total: {total}</h5>
          </div>
        </div>

        <div className="products-container">
          <div className="body-top">
            {/* Not implemented yet */}
            <input
              className="search-field"
              type="text"
              placeholder="Search for a shoe"
            />
            {/* Not implemented yet */}
            <p className="sort">Highest</p>
          </div>

          <div className="products">
            {data.map((info) => (
              <Card
                id={info.id}
                img={info.img}
                name={info.name}
                sizes={info.size}
                colors={info.colors}
                price={info.price}
                addToCart={addToCart}
              />
            ))}
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Ecommerce;
