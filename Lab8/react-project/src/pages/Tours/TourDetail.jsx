import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getItemById } from "../../services/itemService";
import "../Tours/TourDetail.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchItemById } from "../../features/items/itemsSlice";
export default function TourDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [tour, setTour] = useState(null);
  // const [loading, setLoading] = useState(true);

  const {selectedItem, loadingItem, errorItem} = useSelector(
    (state) => state.items
  );

  // useEffect(() => {
  //   getItemById(id)
  //     .then(data => setTour(data))
  //     .finally(() => setLoading(false));
  // }, [id]);

  useEffect(() => {
    dispatch(fetchItemById(id));
  }, [id, dispatch]);


  if (loadingItem) return <p>Loading...</p>;
  if (errorItem) return <p>Error: {errorItem}</p>
  if (!selectedItem) return <p>Tour not found</p>;

  return (
    <div className="tour__details">
      <h2 className="tour__title">{selectedItem.title}</h2>
      <img className="tour__img" src={selectedItem.thumbnail} alt={selectedItem.title} width={300} />
      <p className="tour__info">Brand: {selectedItem.brand}</p>
      <p className="tour__info">Category: {selectedItem.category}</p>
      <p className="tour__info">Price: {selectedItem.price.toLocaleString()} $</p>
      <p className="tour__info">Rating: {selectedItem.rating}</p>
      <p className="tour__info">Description: {selectedItem.description}</p>
      <button className="tour__btn" onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}
