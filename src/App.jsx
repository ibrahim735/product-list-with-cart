import React, { useState } from "react";
import Card from "./Card";
import Cart from "./Cart";
import { itemsData } from "./itemsData";

const App = () => {
  const [count, setCount] = useState(1);
  const [cartItems, setCartItems] = useState([]);

  const toggleCart = () => {
    setToggle((prev) => !prev);
  };

  return (
    <>
      <h1 className="text-4xl font-bold py-10">Desserts</h1>
      <div className="flex">
        <div className="w-2/3 flex flex-wrap gap-6">
          {itemsData.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              description={item.description}
              price={item.price}
              count={count}
              setCount={setCount}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          ))}
        </div>
        <Cart cartItems={cartItems} count={count} setCartItems={setCartItems} />
      </div>
    </>
  );
};

export default App;
