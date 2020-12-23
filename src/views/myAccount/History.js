import React, { useState } from "react";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import CardItem from "../../components/CardItem";
import TableHeader from "../../components/TableHeader";
import TableBodyItem from "../../components/TableBodyItem";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Pagination]);

export default () => {
  const [activeCardIndex, setCount] = useState(0);
  const [cards, setCards] = useState([
    {
      id: "1",
      cardName: "Wallet Name Test One",
      balance: "2342.234234",
      addressStart: "1234",
      addressEnd: "5678",
    },
    {
      id: "2",
      cardName: "Wallet Name Test Two",
      balance: "1111.23994",
      addressStart: "8765",
      addressEnd: "4321",
    },
    {
      id: "3",
      cardName: "Wallet Name Test Three",
      balance: "63463.345343",
      addressStart: "4321",
      addressEnd: "8765",
    },
  ]);

  return (
    <div className="flex flex-col mt-4">
      <div className="mb-8 md:mb-12 xl:mb-16">
        <Swiper
          className="h-58 hidden md:block"
          spaceBetween={-200}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {cards.map((card, idx) => (
            <SwiperSlide key={idx} className={idx === 0 ? "ml-30" : ""}>
              <CardItem card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex flex-col items-center justify-center md:hidden">
          <ul className="card-list-mobile">
            {cards.map((card, idx) => (
              <li
                className={`text-2xl text-white relative ${
                  idx === activeCardIndex ? "active-card" : ""
                }`}
                style={{ zIndex: cards.length - idx }}
                key={card.id}
                onClick={() =>
                  setCards(() => {
                    const newCards = Array.from(cards);
                    const targetCard = newCards[idx];
                    newCards.splice(idx, 1);
                    newCards.unshift(targetCard);
                    return newCards;
                  })
                }
              >
                <CardItem card={card} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <h2 className="text-center text-base md:text-lg xl:text-xl text-white font-manrope mb-6 md:mb-8 xl:mb-10">
        Latest Transactions
      </h2>
      <div className="flex justify-between flex-col w-full mb-4 md:mb-5 xl:mb-7">
        <TableHeader />
        <TableBodyItem />
        <TableBodyItem />
        <TableBodyItem />
      </div>
      <div className="text-base text-white cursor-pointer flex items-center mx-auto">
        Transactions history
        <button className="focus:outline-none ml-2">
          <img
            className="w-2.5"
            src={require("../../assets/images/arrow.svg")}
            alt=""
          />
        </button>
      </div>
    </div>
  );
};
