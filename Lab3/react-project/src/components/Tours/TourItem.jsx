import React from "react";
import "./TourItem.css";



export default function TourItem({tourName, photoUrl}){
  return (
    <div>
      <h1>{tourName}</h1>
      <img src={photoUrl} alt="" />
    </div>
  )

}
