import React, { useEffect, useState } from "react";
import Button from "./Button";

const Card = ({
  name,
  description,
  price,
  image,
  setCartItems,
  cartItems,
  id,
}) => {
  const itemInCart = cartItems.find((item) => item.id === id);
  const [count, setCount] = useState(1); // Manage local count for each card

  useEffect(() => {
    if (itemInCart) {
      setCount(itemInCart.amount); // Set local count to the amount in the cart when item is in cart
    }
  }, [itemInCart]);

  function handleCart() {
    if (!itemInCart) {
      setCartItems((prev) => [
        ...prev,
        { name, amount: count, price: price, id: id },
      ]);
    } else {
      // If already in cart, just update the amount
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, amount: count } : item
        )
      );
    }
  }

  const handleCountChange = (newCount) => {
    setCount(newCount);
    if (itemInCart) {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, amount: newCount } : item
        )
      );
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      handleCountChange(count - 1);
    }
  };

  const handleIncrement = () => {
    handleCountChange(count + 1);
  };

  return (
    <div className={`font-redhat ${itemInCart ? "" : "border-none"}`}>
      <div className="w-60 relative">
        <img
          className={`w-full rounded-lg ${
            itemInCart ? "border-solid border-2 border-orange-700" : ""
          }`}
          src={image}
          alt="waffles-image"
        />
        <Button
          count={count}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
          handleCart={handleCart}
          itemInCart={!!itemInCart} // Pass whether the item is in the cart
        />
      </div>
      <div className="mt-8">
        <p className="text-orange-900 text-sm font-thin mb">{name}</p>
        <p className="text-orange-900 font-semibold">{description}</p>
        <span className="text-orange-700 font-semibold ">
          ${parseFloat(price).toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default Card;
