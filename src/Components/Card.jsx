import React from "react";
import style from "../Components/Card.module.css";
import { cardItems } from "../utils/CardData";

const myName = "adeola";

const Card = () => {
  return (
    <>
     <div>
      <div className="d-flex gap-5 border border-warning border-5 justify-content-between">
        <h1>I am {myName}</h1>
        <h1>I am {myName}</h1>
      </div>
      <div className={style.container}>
        {cardItems.map((card, index)=>(
          <div key={index} className={style.card}>
            <img src={card.image} alt="" className={style.img} />
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
            <i>{card.price}</i>
          </div>
        ))}
      </div>
     </div>
    </>
  );
};

export default Card;
