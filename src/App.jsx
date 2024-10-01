import React from "react";
import Card from "./Card";
import Cart from "./Cart";
import Waffles from "./assets/images/image-waffle-desktop.jpg";
import CremeBrulee from "./assets/images/image-creme-brulee-desktop.jpg";
import Macaron from "./assets/images/image-macaron-desktop.jpg";
import Tiramisu from "./assets/images/image-tiramisu-desktop.jpg";
import Baklava from "./assets/images/image-baklava-desktop.jpg";
import Pie from "./assets/images/image-meringue-desktop.jpg";
import Cake from "./assets/images/image-cake-desktop.jpg";
import Brownie from "./assets/images/image-brownie-desktop.jpg";
import PannaCotta from "./assets/images/image-panna-cotta-desktop.jpg";

const desserts = [
  {
    image: Waffles,
    name: "Waffle",
    description: "Waffles with Berries",
    price: "$6.50",
  },
  {
    image: CremeBrulee,
    name: "Creme Brulee",
    description: "Vanilla Bean Creme Brulee",
    price: "$7.00",
  },
  {
    image: Macaron,
    name: "Macaron",
    description: "Macaron Mix of Five",
    price: "$8.00",
  },
  {
    image: Tiramisu,
    name: "Tiramisu",
    description: "Classic Tiramisu",
    price: "$5.50",
  },
  {
    image: Baklava,
    name: "Baklava",
    description: "Pistachio Baklava",
    price: "$4.00",
  },
  {
    image: Pie,
    name: "Pie",
    description: "Lemon Meringue Pie",
    price: "$5.00",
  },
  { image: Cake, name: "Cake", description: "Red Velvet Cake", price: "$4.50" },
  {
    image: Brownie,
    name: "Brownie",
    description: "Salted Caramel Brownie",
    price: "$5.50",
  },
  {
    image: PannaCotta,
    name: "Panna Cotta",
    description: "Vanilla Panna Cotta",
    price: "$6.50",
  },
];

const App = () => {
  return (
    <>
      <h1 className="text-4xl font-bold py-10">Desserts</h1>
      <div className="flex">
        <div className="w-2/3 flex flex-wrap gap-6">
          {desserts.map((dessert, index) => (
            <Card
              key={index}
              image={dessert.image}
              name={dessert.name}
              description={dessert.description}
              price={dessert.price}
            />
          ))}
        </div>
        <Cart />
      </div>
    </>
  );
};

export default App;
