import React from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import { GrSubtractCircle } from "react-icons/gr";

const Button = ({
  count,
  handleIncrement,
  handleDecrement,
  handleCart,
  itemInCart,
}) => {
  return (
    <div className="absolute -bottom-5 left-14">
      {itemInCart ? (
        <button className="bg-orange-700 border border-transparent flex justify-between items-center border-orange-950 rounded-3xl text-center w-32 px-2 py-2 text-sm">
          <div onClick={handleDecrement}>
            <GrSubtractCircle className="text-lg text-white hover:bg-white hover:text-red-500 rounded-full cursor-pointer transition-all duration-200" />
          </div>
          <p className="text-white font-semibold">{count}</p>
          <div onClick={handleIncrement}>
            <IoMdAddCircleOutline className="text-lg text-white hover:bg-white hover:text-red-500 rounded-full cursor-pointer transition-all duration-200" />
          </div>
        </button>
      ) : (
        <button
          className="bg-white border border-solid border-orange-950 rounded-3xl flex items-center justify-center gap-2 w-32 px-2 py-2 text-sm"
          onClick={handleCart}
        >
          <MdOutlineAddShoppingCart />
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default Button;
