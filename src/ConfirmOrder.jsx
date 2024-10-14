import React from "react";
import OrderConfirmed from "./assets/images/order-confirmed.jpg";

const ConfirmOrder = ({ setConfirmOrderPopUp, cartItems, totalPrice }) => {
  return (
    <div className="bg-black flex items-center justify-center fixed top-0 left-0 bg-opacity-50 h-screen w-full px-48 py-10">
      <div className="bg-white rounded-lg shadow-lg h-screen overflow-auto p-10">
        <img className="w-14" src={OrderConfirmed} alt="order-confirmed-icon" />
        <h1 className="font-bold text-4xl text-orange-950 mt-6">
          Order Confirmed
        </h1>
        <p className="font-thin text-orange-950 mt-2">
          We hope you enjoy your food!
        </p>

        <div className="mt-7 mb-7 p-5 w-96 h-fit bg-orange-50 rounded-xl">
          {cartItems.map((data) => {
            return (
              <div
                key={data.id}
                className="border-b-[0.01px] border-orange-200 flex items-center justify-between p-3"
              >
                <div className="flex items-center gap-4">
                  <img className="w-12 rounded-lg" src={data.image} alt="cart-items-image" />
                  <div>
                    <p className="font-bold text-orange-900 mb-">{data.name}</p>
                    <p className="flex gap-x-2 ">
                      <span className="text-orange-700">{data.amount}x</span>{" "}
                      <span className="ml-3 font-thin text-orange-900">
                        @ ${parseFloat(data.price).toFixed(2)}
                      </span>
                    </p>
                  </div>
                </div>
                <p className="text-base font-semibold text-orange-900">
                  ${parseFloat(data.amount * data.price).toFixed(2)}
                </p>
              </div>
            );
          })}
          <div className="text-orange-900 p-3 flex items-center justify-between">
            <p className="text-sm font-thin">Order Total</p>
            <p className="text-2xl font-bold">${totalPrice.toFixed(2)}</p>
          </div>
        </div>
        <button
          className=" bg-orange-700 border border-transparent flex justify-center items-center border-orange-950 rounded-full text-base text-center text-white font-semibold w-full  px-2 py-4"
          onClick={() => {
            setConfirmOrderPopUp(false);
            window.location.reload();
          }}
        >
          Start New Order
        </button>
      </div>
    </div>
  );
};

export default ConfirmOrder;
