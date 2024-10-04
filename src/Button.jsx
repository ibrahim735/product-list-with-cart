import React, { useState } from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import { GrSubtractCircle } from "react-icons/gr";

const Button = () => {
  const [toggle, setToggle] = useState(true);
  const [count, setCount] = useState(0);

  const handelDecrement = () => {
    if (count > 0) {
      setCount(count -1);
    } 
  };

  const handleIncrement = () => {
    setCount(count + 1)
  };

  const addTocartButton = (
    <button
      className="bg-white border border-solid border-orange-950 rounded-3xl flex items-center justify-center gap-2 w-32 px-2 py-2  text-sm"
      onClick={() => setToggle((prev) => !prev)}
    >
      <MdOutlineAddShoppingCart />
      Add to Cart
    </button>
  );

  const numberOfItemsButton = (
    <button className="bg-orange-700 border border-transparent flex justify-between items-center border-orange-950 rounded-3xl text-center w-32 px-2 py-2 text-sm">
      <div onClick={handelDecrement}>
        <GrSubtractCircle className="text-lg text-white hover:bg-white hover:text-red-500 rounded-full  cursor-pointer transition-all duration-200" />
      </div>
      <p className="text-white font-semibold">{count}</p>
      <div onClick={handleIncrement}>
        <IoMdAddCircleOutline className="text-lg text-white hover:bg-white hover:text-red-500 rounded-full  cursor-pointer transition-all duration-200" />
      </div>
    </button>
  );

  return (
    <div className="absolute -bottom-5  left-12">
      <div>{toggle ? addTocartButton : numberOfItemsButton}</div>
    </div>
  );
};

export default Button;
