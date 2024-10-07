import React, { useState } from "react";
import Button from "./Button";

const Card = ({
  name,
  description,
  price,
  image,
  count,
  setCount,
  setCartItems,
  id,
}) => {
  function handleCart() {
    setCartItems((prev) => [
      ...prev,
      { name: name, amount: count, price: price, id: id },
    ]);
  }
  const [toggle, setToggle] = useState(true);

  function toggleCart() {
    setToggle((prev) => !prev);
  }
  return (
    <div className="font-redhat">
      <div className="w-60 relative">
        <img
          className={`w-full rounded-lg ${
            !toggle ? "border-solid border-2 border-orange-700" : ""
          }`}
          src={image}
          alt="waffles-image"
        />
        <Button
          count={count}
          setCount={setCount}
          handleCart={handleCart}
          toggleCart={toggleCart}
          toggle={toggle}
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
