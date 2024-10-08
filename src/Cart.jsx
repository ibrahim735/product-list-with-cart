import EmptyCartIllustration from "./assets/images/empty-cart.jpg";
import { ImCancelCircle } from "react-icons/im";
import carbonNeutral from "./assets/images/carbon-neutral-icon.jpg";

const Cart = ({ cartItems, setCartItems, setButtonState }) => {
  function removeItemById(id) {
    setCartItems(cartItems.filter((item) => item.id !== id));
    // Notify the Card component to reset its button state
    setButtonState(id, true); // true indicates to revert to "Add to Cart"
  }

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.amount * item.price;
  }, 0);

  return (
    <div className="w-96 h-max rounded-lg bg-white p-4">
      <h1 className="text-2xl font-bold text-orange-700">
        Your Cart ({cartItems.length})
      </h1>
      {cartItems.length < 1 ? (
        <div>
          <img
            className="w-32 my-10 mx-auto"
            src={EmptyCartIllustration}
            alt="Empty-Cart-Illustration-image"
          />
          <p className="text-sm font-semibold text-orange-900 text-center">
            Your added items will appear here
          </p>
        </div>
      ) : (
        <div className="space-y-4 ">
          {cartItems.map((data, index) => {
            return (
              <article
                className="flex justify-between items-center py-4 border-b-[0.01px] border-orange-200"
                key={index}
              >
                <div className="text-sm">
                  <p className="font-bold text-orange-900 mb-">{data.name}</p>
                  <p className="flex gap-x-2 ">
                    <span className="text-orange-700">{data.amount}x</span>{" "}
                    <span className="ml-3 font-thin text-orange-900">
                      @ ${parseFloat(data.price).toFixed(2)}
                    </span>{" "}
                    <span className="font-semibold text-orange-900">
                      ${parseFloat(data.amount * data.price).toFixed(2)}
                    </span>
                  </p>
                </div>

                <div
                  onClick={() => removeItemById(data.id)}
                  className="cursor-pointer w-4"
                >
                  <ImCancelCircle />
                </div>
              </article>
            );
          })}
          <div className="text-orange-900 p-3 flex items-center justify-between">
            <p>Order Total</p>
            <p className="text-3xl font-bold">${totalPrice.toFixed(2)}</p>
          </div>
          <div className="text-orange-900 flex justify-center items-center gap-2 px-6 py-4 bg-orange-50 rounded-2xl ">
            <img className="w-6" src={carbonNeutral} />
            <p className="text-sm font-medium">
              This is a <span className="font-semibold">carbon-neutral</span>{" "}
              delivery
            </p>
          </div>
          <button className="bg-orange-700 border border-transparent flex justify-center items-center border-orange-950 rounded-full text-base text-center text-white font-semibold w-full  px-2 py-4  ">
            Confirm Order
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
