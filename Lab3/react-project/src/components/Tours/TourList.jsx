import React, { useState } from "react";
import TourItem from "./TourItem";
import "./TourList.css";


export default function TourList(){
  const [items, setItems] = useState([]);

  async function load() {
    const result = await fetch(
      "http://127.0.0.1:8000/api/tours/"
    );
    const data = await result.json();
    console.log(data, "fetched data");
    setItems(data);
  }
  return (
    <div>
      <h2>Show tours</h2>
      <button onClick={load}>Load tours</button>
      <p>Data: {items?.length || "none"}</p>
      {items ? 
        <ul>
        {items.map((item) => (
          // <li key={item.id}>{item.name}</li>
          <TourItem key={item.id} tourName = {item.name}></TourItem>
        ))}
        </ul>
      : <p>None</p>}
      
    </div>
  )
}
