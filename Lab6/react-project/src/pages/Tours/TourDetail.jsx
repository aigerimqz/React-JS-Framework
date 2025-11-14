import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getItemById } from "../../services/itemService";

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
    <div className="tour-details">
      <h2>{tour.title}</h2>
      <img src={tour.thumbnail} alt={tour.title} width={300} />
      <p>Brand: {tour.brand}</p>
      <p>Category: {tour.category}</p>
      <p>Price: {tour.price.toLocaleString()} ₸</p>
      <p>Rating: {tour.rating}</p>
      <p>Description: {tour.description}</p>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}
