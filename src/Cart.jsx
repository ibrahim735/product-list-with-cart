import React, { useState } from "react";
import EmptyCartIllustration from "./assets/images/illustration-empty-cart.jpg";

const Cart = () => {
  const [cart, setCart] = useState([
    { id: 1, name: "John", amount: 2, price: "$4.00" }
  ]);

  const cartItems = cart.map((item) => (
    <ul key={item.id}> {/* Add a unique key */}
      <li>{item.name}</li>
      <span>{item.amount}x</span>
      <span>{item.price}</span>
      <span>{item.TotalPrice}</span>
    </ul>
  ));

  return (
    <div className="w-96 h-80 rounded-lg bg-white p-4">
      <h1 className="text-2xl font-bold text-orange-700">Your Cart ({cart.length})</h1>
      {cart.length === 0 ? (
        <>
          <img
            className="w-32 my-10 mx-auto"
            src={EmptyCartIllustration}
            alt="Empty-Cart-Illustration-image"
          />
          <p className="text-sm font-semibold text-orange-900 text-center">
            Your added items will appear here
          </p>
        </>
      ) : (
        cartItems
      )}
    </div>
  );
};

export default Cart;

