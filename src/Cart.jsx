import React from "react";
import EmptyCartIllustration from "./assets/images/illustration-empty-cart.jpg";

const Cart = () => {
  return (
    <div className="w-96 h-80 rounded-lg bg-white p-4">
      <h1 className="text-2xl font-bold text-orange-700">Your Cart (0)</h1>
      <img
        className="w-32 my-10 mx-auto"
        src={EmptyCartIllustration}
        alt="Empty-Cart-Illustration-image"
      />
      <p className="text-sm font-semibold text-orange-900 text-center">
        Your added items will appear here
      </p>
    </div>
  );
};

export default Cart;
