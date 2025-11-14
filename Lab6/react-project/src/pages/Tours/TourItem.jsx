import React from "react";
import "./TourItem.css";
import { Link } from "react-router-dom";



export default function TourItem({tour}){
  return (
    <Link to={`/tours/${tour.id}`} className="tour__detail">
      <div className="tour-card">
          
        <img src={tour.thumbnail} alt={tour.title} className="tour-image" />
        <div className="tour-content">
          <h2 className="tour-title">{tour.title}</h2>
          <p className="tour-country">{tour.brand}</p>
          <p className="tour-description">{tour.description}</p>
          <p className="tour-price">{tour.price.toLocaleString()} $</p>
        </div>
      </div>
    </Link>
  );

}
