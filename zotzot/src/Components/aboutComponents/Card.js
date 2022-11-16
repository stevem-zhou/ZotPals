import React from "react";

const Card=({id, name,email,img})=>{
    return(
        <div className='tc bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='profile_pic' src={img} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
         </div>

    );
}
export default Card;