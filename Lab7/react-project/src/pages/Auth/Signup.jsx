import { useState } from "react";
// import { createUserWithEmailAndPassword } from "./firebase/auth";

import { useNavigate, Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import "./Login.css";
export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/profile");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="signup__block">
      <h1>Signup</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <input className="input input__email" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input className="input input__password" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <input className="input input__confirm" type="password" placeholder="Confirm a password" onChange={(e) => setError(e.target.value.includes())}/>

      <button onClick={handleSignup}>Signup</button>

      <p>Have an account? <Link to="/login">Login</Link></p>
    </div>
  );
}
