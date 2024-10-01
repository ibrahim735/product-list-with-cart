import React, { useState } from "react";
import EmptyCartIllustration from "./assets/images/illustration-empty-cart.jpg";

// Ensure desserts is defined or imported properly
const desserts = [
  { description: "Waffles with Berries", price: "$6.50" },
  { description: "Vanilla Bean Creme Brulee", price: "$7.00" },
  { description: "Macaron Mix of Five", price: "$8.00" },
  { description: "Classic Tiramisu", price: "$5.50" },
  { description: "Pistachio Baklava", price: "$4.00" },
  { description: "Lemon Meringue Pie", price: "$5.00" },
  { description: "Red Velvet Cake", price: "$4.50" },
  { description: "Salted Caramel Brownie", price: "$5.50" },
  { description: "Vanilla Panna Cotta", price: "$6.50" }
];

const [cart, setCart] = useState([{}])



const Cart = () => {
  // Process cart items
  const cartItems = [
    ...desserts.map(item => {
      const amount = 2; // You can set this to any default value or dynamically calculate it
      const priceNumber = parseFloat(item.price.replace('$', '')); // Convert price string to a number
      const totalPrice = `$${(priceNumber * amount).toFixed(2)}`; // Calculate totalPrice
      return {
        ...item,
        amount: amount,
        totalPrice: totalPrice
      };
    }),
    { description: "Chocolate Chip Cookie", price: "$3.00", amount: 3, totalPrice: "$9.00" } // New item
  ];

  // Get the number of items in the cart
  const itemCount = cartItems.length;

  return (
    <div className="w-96 h-80 rounded-lg bg-white p-4">
      <h1 className="text-2xl font-bold text-orange-700">Your Cart ({itemCount})</h1>
      {itemCount === 0 ? (
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
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className="flex justify-between py-2">
              <span>{item.description}</span>
              <span>{item.totalPrice}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
