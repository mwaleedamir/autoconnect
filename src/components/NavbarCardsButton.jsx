import React from "react";
import { FaCarSide } from "react-icons/fa";
import { AiOutlineShop } from "react-icons/ai";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const NavbarCardsButton = () => {
  const cards = [
    { svg: <FaCarSide />, name: "Showrooms", to: "/marketplace" },
    { svg: <FaCarSide />, name: "Sell For me", to: "/sell-for-me" },
    { svg: <AiOutlineShop />, name: "Shop", to: "/shop" },
    { svg: <AiOutlineShop />, name: "More", to: "/shop" }
  ];
  return (
    <div className="max-sm:w-full md:w-[90%] w-[80%] flex gap-2 max-sm:gap-1 justify-center items-center justify-self-center">
      {cards.map(card =>
        <div key={uuidv4()} className="min-h-10 min-lg:w-32 bg-white text-black max-sm:px-2 max-sm:py-1 px-4 py-3 rounded-md">
          <Link  to={card.to}>
            <div className="flex max-sm:flex-col max-sm:text-sm justify-center gap-2 items-center flex-wrap ">
              <div className="text-xl ">
                {card.svg}
              </div>
              <h2>
                {card.name}
              </h2>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavbarCardsButton;
