import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getItemById } from "../../services/itemService";
import "../Tours/TourDetail.css";
export default function TourDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getItemById(id)
      .then(data => setTour(data))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!tour) return <p>Tour not found</p>;

  return (
    <div className="tour__details">
      <h2 className="tour__title">{tour.title}</h2>
      <img className="tour__img" src={tour.thumbnail} alt={tour.title} width={300} />
      <p className="tour__info">Brand: {tour.brand}</p>
      <p className="tour__info">Category: {tour.category}</p>
      <p className="tour__info">Price: {tour.price.toLocaleString()} $</p>
      <p className="tour__info">Rating: {tour.rating}</p>
      <p className="tour__info">Description: {tour.description}</p>
      <button className="tour__btn" onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}
