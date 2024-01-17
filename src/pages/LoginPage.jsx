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
            <div className=" min-h-[42rem]">
                <form className="flex flex-col items-center mt-14 border-2 w-96 m-auto pt-16 pb-12 rounded" onSubmit={handleLogin}>
                    <label className="mb-1">Email</label>
                    <input className="border-black border-2 rounded text-black pl-1" value={email} onChange={handleChangeEmail} placeholder="user@planetpizza.com" type="email"></input>
                    <label className="mt-8 mb-1">Password</label>
                    <input className="border-black border-2 rounded text-black pl-1" value={password} onChange={handleChangePassword} placeholder="******" type="password"></input>
                    <button className="border-2 mt-8 border-white px-12 py-1 rounded hover:bg-white hover:text-black" type="submit">Login</button>
                 </form>
                 
                 {errorMessage && <div className=" w-full flex justify-center">
                                    <p className="text-center mt-14 border-4 border-red-600 px-8 py-2 rounded">{errorMessage}</p>
                                 </div>}
            </div>
            <Footer/>
        </>
    )
}

export default LoginPage;