import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import TourItem from "./TourItem";
import "./TourList.css";
import { fetchItems } from "../../features/items/itemsSlice";
import Loader from "../../components/Loader";
import ErrorBox from "../../components/ErrorBox";

export default function TourList() {
    const dispatch = useDispatch();
    const { list, loadingList, errorList } = useSelector(
        (state) => state.items
    );

    const [params, setParams] = useSearchParams();
    const q = params.get("q") || "";
    const [filterQuery, setFilterQuery] = useState(q);

    useEffect(() => {
        dispatch(fetchItems(q));
    }, [q, dispatch]);

    function handleSearch(e) {
        const value = e.target.value;
        setFilterQuery(value);
        setParams({ q: value });
    }

    return (
        <div className="tour__list">
            <h2 className="list__title">Tours</h2>
            <div className="search__bar">
                <input
                    type="text"
                    className="search__input"
                    placeholder="Search tours..."
                    value={filterQuery}
                    onChange={handleSearch}
                />
                <button
                    className="clear__btn"
                    onClick={() => handleSearch({ target: { value: "" } })}
                >
                    Clear
                </button>
            </div>

            {loadingList ? (
                <Loader/>
            ) : errorList ? (
                <ErrorBox message={errorList}/>
            ) : list.length ? (
                <ul className="tour__items">
                    {list.map((item) => (
                        <TourItem key={item.id} tour={item} />
                    ))}
                </ul>
            ) : (
                <p>No matching tours</p>
            )}
        </div>
    );
}
