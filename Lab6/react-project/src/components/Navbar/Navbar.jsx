export default function Navbar() {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
             <NavLink to="/about">About Us</NavLink>
            <NavLink to="/items">Tours</NavLink>
            <NavLink to="/login">Login</NavLink>
        </nav>
    )
}