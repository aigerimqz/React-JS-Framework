
import { useState } from "react";
import { useAuth } from "../../context/AuthContext"; 
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const { login } = useAuth();
    const navigate = useNavigate();

    async function handleLogin(e) {
        e.preventDefault();
        try {
            setError("");
            setLoading(true);
            await login(email, password);
            navigate("/profile");
        } catch (err) {
            setError("Invalid email or password");
        }
        setLoading(false);
    }

    return (
        <>
            <h1 style={{ textAlign: "center" }}>Login</h1>

            <form className="login__block" onSubmit={handleLogin}>
                {error && <p className="error">{error}</p>}

                <input 
                    className="input input__email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <input 
                    className="input input__password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button className="login__btn" disabled={loading}>
                    {loading ? "Loading..." : "Login"}
                </button>

                <p>
                    Don't have an account?{" "}
                    <Link to="/signup">Sign up</Link>
                </p>
            </form>
        </>
    );
}
