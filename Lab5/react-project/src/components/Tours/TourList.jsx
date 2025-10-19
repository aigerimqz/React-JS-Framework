import React, { useEffect, useState } from "react";
import TourItem from "./TourItem";
import "./TourList.css";


export default function TourList(){
  const [items, setItems] = useState([]);
  const [filterQuery, setFilterQuery] = useState("");
  const [loading, setLoading] = useState(false);

  async function load() {
    setLoading(true);
    const result = await fetch(
      "http://127.0.0.1:8000/api/tours/"
    );
    const data = await result.json();
    console.log(data, "fetched data");
    setItems(data);
    setLoading(false);
  }

  useEffect( () => {
    load();
  }, []);

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(filterQuery.toLowerCase())
  );


  return (
    <div className="tour__list">
      <h2 className="tour__title">Show tours</h2>
      <button className="loadBtn" onClick={load}>Reload tours</button>
      <div className="search__bar">
        <input className="search__input" 
        type="text" 
        placeholder="Search tours..." 
        value={filterQuery} 
        onChange={(e) => setFilterQuery(e.target.value)}/>
        
        <button className="clear__btn" onClick={() => setFilterQuery("")}>Clear</button>
      </div>
        
        
        {filteredItems.length ? 
        (
          <ul className="tour__items">
            {filteredItems.map((item) => (
              // <li key={item.id}>{item.name}</li>
              <TourItem key={item.id} tour = {item}></TourItem>
            ))}
          </ul>
        ) : (<p>No matching tours</p>)}
      

    
      
    </div>
  )
}
