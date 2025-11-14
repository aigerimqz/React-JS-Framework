import React from "react";
import "./TourItem.css";



export default function TourItem({tour}){
  return (
    <div className="tour-card">
        
      <img src={tour.thumbnail} alt={tour.title} className="tour-image" />
      <div className="tour-content">
        <h2 className="tour-title">{tour.title}</h2>
        <p className="tour-country">{tour.brand}</p>
        <p className="tour-description">{tour.description}</p>
        <p className="tour-price">{tour.price.toLocaleString()} ₸</p>
      </div>
    </div>
  );

}
