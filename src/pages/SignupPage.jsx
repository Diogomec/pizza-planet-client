import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import authService from "../services/auth.service";
import { useNavigate } from "react-router-dom";



const SignupPage = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState(undefined);

    const navigate = useNavigate()

    const handleChangeName = (e) =>  setName(e.target.value);
    const handleChangeEmail = (e) =>  setEmail(e.target.value);
    const handleChangePassword = (e) =>  setPassword(e.target.value);

    const handleSignup = (e) => {
        e.preventDefault()

        const requestBody = {name, email, password};

        authService
        .signup(requestBody)
        .then(() => {
            setErrorMessage("");
            navigate("/login")
        })
        .catch((error) => {
            
            const errorDescription = error.response.data.message;
            setErrorMessage(errorDescription);
            
          });
    }

    return (
                <>
                    <Navbar/>
                        <form className="flex flex-col items-center m-14" onSubmit={handleSignup}>
                            <label>Name</label>
                            <input className="border-black border-2" value={name} onChange={handleChangeName} placeholder="Tommy" type="text"></input>
                            <label>Email</label>
                            <input className="border-black border-2" value={email} onChange={handleChangeEmail} placeholder="user@planetpizza.com" type="email"></input>
                            <label>Password</label>
                            <input className="border-black border-2" value={password} onChange={handleChangePassword} placeholder="******" type="password"></input>
                            <button className="border-black border-2" type="submit">Sign Up</button>
                        </form>
                        {errorMessage && <p>{errorMessage}</p>}
                    <Footer/>
                </>

    )
}

export default SignupPage;