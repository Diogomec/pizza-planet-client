import { useContext, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import authService from "../services/auth.service";
import { AuthContext } from "../context/auth.context";

const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState(undefined);

    const navigate = useNavigate();

    const { storeToken, authenticateUser } = useContext(AuthContext);

    const handleChangeEmail = (e) =>  setEmail(e.target.value);
    const handleChangePassword = (e) =>  setPassword(e.target.value);

    const handleLogin = (e) => {
        e.preventDefault()

        const requestBody = { email, password }

        authService.
        login(requestBody)
        .then((response) => {

            storeToken(response.data.authToken);
            authenticateUser();
            navigate("/");
        })
        .catch((error) => {
            // If the request resolves with an error, set the error message in the state
            const errorDescription = error.response.data.message;
            setErrorMessage(errorDescription);
        });
    };
    
    return (
        <>
            <Navbar/>
                <form className="flex flex-col items-center m-14" onSubmit={handleLogin}>
                    <label>Email</label>
                    <input className="border-black border-2" value={email} onChange={handleChangeEmail} placeholder="user@planetpizza.com" type="email"></input>
                    <label>Password</label>
                    <input className="border-black border-2" value={password} onChange={handleChangePassword} placeholder="******" type="password"></input>
                    <button className="border-black border-2" type="submit">Login</button>
                 </form>
                 {errorMessage && <p>{errorMessage}</p>}
            <Footer/>
        </>
    )
}

export default LoginPage;