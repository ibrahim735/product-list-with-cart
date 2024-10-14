import React, { useState } from "react";
import Card from "./Card";
import Cart from "./Cart";
import { itemsData } from "./itemsData";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  return (
    <div>
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
              setCartItems={setCartItems}
              cartItems={cartItems}
            />
          ))}
        </div>
              <Cart cartItems={cartItems} setCartItems={setCartItems}   />
      </div>
    </div>
  );
};

export default App;
