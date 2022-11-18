import React from "react";//use in cardlist

const Card = ({ id, name, email, img }) => {
  return (
    <div className="tc dib br3 pa4 ma4 hover">
      <img className="br-100 h5 w" alt="profile_pic" src={img}/>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    
    </div>
  );
};
export default Card;
