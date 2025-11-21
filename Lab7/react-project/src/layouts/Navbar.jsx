import { Outlet, Link } from "react-router-dom";
import "../layouts/Navbar.css";
import { useAuth } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export default function Navbar() {
  const { user } = useAuth();

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <div>
      <nav className="nav__bar">
        <Link className="bar__title" to="/"><h1 className="bar__title">Saiahat</h1></Link>

        <div className="nav__list">
          <Link className="nav__item" to="/">Home</Link>
          <Link className="nav__item" to="/about">About Us</Link>
          <Link className="nav__item" to="/tours">Tours</Link>
        </div>

        <div className="login__bar">
          {!user && (
            <>
              <Link className="login__link" to="/login">
                <button className="login__btn">Login</button>
              </Link>
              <Link className="login__link" to="/signup">
                <button className="login__btn">Signup</button>
              </Link>
            </>
          )}

          {user && (
            <>
              <Link className="login__link" to="/profile">
                <button className="login__btn">Profile</button>
              </Link>
              <button className="login__btn" onClick={handleLogout}>
                Logout
              </button>
            </>
          )}
        </div>
      </nav>

      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
