import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Profile() {
  const { user, logout } = useAuth();

  if (!user) return <Navigate to="/login" />;

  return (
    <div>
      <h1>Profile</h1>
      <p>Email: {user.email}</p>
      <p>UID: {user.uid}</p>

      <button onClick={logout}>Logout</button>
    </div>
  );
}
