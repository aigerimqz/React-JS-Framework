import { Outlet, Link } from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About Us</Link> | 
        <Link to="/tours">Tours</Link> |
        <Link to="/login">Login</Link>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
