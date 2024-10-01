import React, { useState } from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import { GrSubtractCircle } from "react-icons/gr";

const Button = () => {
  const [toggle, setToggle] = useState(true);
  const [count, setCount] = useState(1);
  const addTocart = (
    <button
      className="bg-white border border-solid border-orange-950 rounded-3xl flex items-center justify-center gap-2 w-32 px-2 py-2  text-sm"
      onClick={() => setToggle((prev) => !prev)}
    >
      <MdOutlineAddShoppingCart />
      Add to Cart
    </button>
  );
  const increaseItem = (
    <button className="bg-red-500 border border-solid flex justify-between items-center border-orange-950 rounded-3xl text-center w-32 px-2 py-2 text-sm">
      <div onClick={() => setCount(count - 1)}>
        <GrSubtractCircle className="text-lg text-white hover:bg-white hover:text-red-500 rounded-full  cursor-pointer transition-all duration-200" />
      </div>
      <p>{count}</p>
      <div onClick={() => setCount(count + 1)}>
        <IoMdAddCircleOutline className="text-lg text-white hover:bg-white hover:text-red-500 rounded-full  cursor-pointer transition-all duration-200" />
      </div>
    </button>
  );

  return (
    <div className="absolute -bottom-5  left-12">
      <div>{toggle ? addTocart : increaseItem}</div>
    </div>
  );
};

export default Button;
