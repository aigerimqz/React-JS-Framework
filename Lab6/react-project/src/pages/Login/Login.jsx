import "../Login/Login.css";
export default function Login(){
    return (
        <>
        <div className="login__block">
            <input className="input input__email" type="email" name="" placeholder="Email" id="" />
            <input className="input input__password" type="password" name="" placeholder="Password" id="" />
            <button className="login__btn">Login</button>
            <a className="login__link" href="Forgot password?"></a>
        </div>
        </>
    )
}