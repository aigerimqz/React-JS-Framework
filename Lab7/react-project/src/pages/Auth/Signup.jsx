import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css"; // можно использовать тот же CSS, что для Login
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSignup = async () => {
        try {
            setError("");
            setLoading(true);
            await createUserWithEmailAndPassword(auth, email, password);
            navigate("/profile");
        } catch (err) {
            setError(err.message);
        }
        setLoading(false);
    };

    return (
        <>
            <h1 style={{ textAlign: "center" }}>Sign Up</h1>

            <form className="login__block">
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

                <button
                    type="button"
                    className="login__btn"
                    disabled={loading}
                    onClick={handleSignup}
                >
                    {loading ? "Loading..." : "Sign Up"}
                </button>

                <p>
                    Already have an account?{" "}
                    <Link to="/login">Login</Link>
                </p>
            </form>
        </>
    );
}
