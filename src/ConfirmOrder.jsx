import React from "react";
import OrderConfirmed from "./assets/images/order-confirmed.jpg";

const ConfirmOrder = ({ setConfirmOrderPopUp }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-40 h-screen w-screen px-48 py-10">
      <div className="fixed inset-0 flex items-center justify-center">
        <div className=" bg-white rounded-lg shadow-lg w-2/5 h-fit p-10">
          <img
            className="w-14"
            src={OrderConfirmed}
            alt="order-confirmed-icon"
          />
          <h1 className="font-bold text-4xl text-orange-950 mt-8">
            Order Confirmed
          </h1>
          <p className="font-thin text-orange-950 mt-3">
            We hope you enjoy your food!
          </p>
          <div className="p-5 w-20 h-20 bg-orange-50 rounded-xl"></div>
          <button
            className="bg-orange-700 border border-transparent flex justify-center items-center border-orange-950 rounded-full text-base text-center text-white font-semibold w-full  px-2 py-4"
            onClick={() => setConfirmOrderPopUp(false)}
          >
            Start New Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmOrder;
