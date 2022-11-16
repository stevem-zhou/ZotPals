import React from "react";
import Card from './Card';
const CardList=({Members})=>{
    const array=Members.map((user,i)=>{return <Card key={i} id={Members[i].id} name={Members[i].name} email={Members[i].email} img={Members[i].img}/>})
    return (
        <div>
            {array}
        </div>
    );
}
export default CardList;