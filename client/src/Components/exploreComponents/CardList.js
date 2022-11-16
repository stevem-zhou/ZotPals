import React from "react";
import Card from "./Card";
const CardList = ({ Items }) => {
  const array = Items.map((item, i) => {
    return (
      <Card
        key={i}
        id={Items[i].id}
        name={Items[i].name}
        date={Items[i].date}
        img={Items[i].img}
      />
    );
  });
  return <div>{array}</div>;
};
export default CardList;
