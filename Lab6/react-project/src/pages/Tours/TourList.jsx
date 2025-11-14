import { useState, useEffect } from "react";
import TourItem from "./TourItem";
import "./TourList.css";
import { searchItems } from "../../services/itemService";
export default function TourList() {
    const [items, setItems] = useState([]);
    const [params, setParams] = useSearchParams();
    const q = params.get("q") || "";
    const [filterQuery, setFilterQuery] = useState("");
    const [loading, setLoading] = useState(false);
    async function load(query = "") {
        setLoading(true);
        let data;

        if (query) {
          data = await searchItems(query);
        }else{
          const res = await fetch("https://dummyjson.com/products");
          data = await res.json();
        }

        
        setItems(data.products || []);
        setLoading(false);
    }

    useEffect(() => {
        load(q);
    }, [q]);

    // useEffect(() => {
    //     const delayDebounce = setTimeout(() => {
    //         load(filterQuery);
    //     }, 400);
    //     return () => clearTimeout(delayDebounce);
    // }, [filterQuery]);
    // const filteredItems = items.filter((item) =>
    //     item.name.toLowerCase().includes(filterQuery.toLowerCase())
    // );
    return (
        <div className="tour__list">
            <h2 className="list__title">Tours</h2>
            <button className="load__btn" onClick={load}>Reload tours</button>
            <div className="search__bar">
                <input type="text" className="search__input" 
                placeholder="Search tours..."
                value={filterQuery}
                onChange={(e) => setFilterQuery(e.target.value)} />
                <button className="clear__btn" onClick={() => setFilterQuery("")}>Clear</button>
            </div>
            {loading ? (
                <p className="loading">Loading tours...</p>
            ):
            items.length ? (
                <ul className="tour__items">
                    {items.map((item) => (
                        <TourItem key={item.id} tour={item} />
                    ))}
                </ul>
            ) : (
                <p>No matching tours</p>
            )}
        </div>
    );
}
