import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Profile.css";
export default function Profile() {
  const { user, logout } = useAuth();

  if (!user) return <Navigate to="/login" />;

  return (
    <div className="profile__block">
      <h1>Profile</h1>
      <p>Email: {user.email}</p>
      <p>UID: {user.uid}</p>

      <button onClick={logout}>Logout</button>
    </div>
  );
}
