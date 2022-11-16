import React from "react";
const Card = ({ id, name, date, img }) => {
  return (
    <section className="outerPostBox grow">
      <section className="innerPostBox">
        <img className="postImage" src={img} alt="chopper pic" />
        <section className="caption">
          {/* make the item_info below changeable for each loop */}
          <div>
            <h2>{name}</h2>
            <p>{date}</p>
          </div>
        </section>
      </section>
    </section>
  );
};
export default Card;
