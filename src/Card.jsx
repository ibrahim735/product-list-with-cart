import React from "react";
import Button from "./Button";

const Card = ({ name, description, price, image }) => {
  return (
    <div className="font-redhat">
      <div className="w-60 relative">
        <img className="w-full rounded-lg" src={image} alt="waffles-image" />
        <Button />
      </div>
      <div className={`mt-8`}>
        <p className="text-orange-900 text-sm font-thin mb">{name}</p>
        <p className="text-orange-900 font-semibold">{description}</p>
        <span className="text-orange-700 font-semibold ">{price}</span>
      </div>
    </div>
  );
};

export default Card;
