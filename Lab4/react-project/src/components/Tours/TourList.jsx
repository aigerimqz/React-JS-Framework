import React, { useState } from "react";
import TourItem from "./TourItem";
import "./TourList.css";


export default function TourList(){
  const [items, setItems] = useState([]);
  const [filterQuery, setFilterQuery] = useState("");
  async function load() {
    const result = await fetch(
      "http://127.0.0.1:8000/api/tours/"
    );
    const data = await result.json();
    console.log(data, "fetched data");
    setItems(data);
  }

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(filterQuery.toLowerCase())
  );


  return (
    <div className="tour__list">
      <h2 className="tour__title">Show tours</h2>
      <button className="loadBtn" onClick={load}>Load tours</button>
      
      {items ? 
        <ul className="tour__items">
        {items.map((item) => (
          // <li key={item.id}>{item.name}</li>
          <TourItem key={item.id} tour = {item}></TourItem>
        ))}
        </ul>
      : <p>None</p>}
      
    </div>
  )
}
