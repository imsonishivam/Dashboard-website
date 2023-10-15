import React from "react";
import { UilArrowUp, UilArrowDown } from "@iconscout/react-unicons";

const CardOfOverview = ({ title, amount, isUp, percent, time }) => {
  return (
    <div className="cardOfOverview">
      <p>{title}</p>
      <h1>{amount}</h1>
      <div>
        {isUp ? (
          <UilArrowUp color="#008000" />
        ) : (
          <UilArrowDown color="#FF0000" />
        )}
        {isUp ? (
          <span
            style={{
              color: "#008000",
            }}
          >
            {percent}
          </span>
        ) : (
          <span
            style={{
              color: "#FF0000",
            }}
          >
            {percent}
          </span>
        )}
        <span>&nbsp;{time}</span>
      </div>
    </div>
  );
};

export default CardOfOverview;
