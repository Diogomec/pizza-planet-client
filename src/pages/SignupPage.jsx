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
                    <div className="flex justify-center">
                        <div className=" w-3/4  flex justify-between">
                            <div className="w-1/2">
                                <form className="flex flex-col items-center m-auto rounded" onSubmit={handleSignup}>
                                    <label className="mb-1">Name</label>
                                    <input className=" border-2 rounded text-black" value={name} onChange={handleChangeName} placeholder="Tommy" type="text"></input>
                                    <label className="mt-8 mb-1">Email</label>
                                    <input className=" border-2 rounded text-black" value={email} onChange={handleChangeEmail} placeholder="user@planetpizza.com" type="email"></input>
                                    <label className="mt-8 mb-1">Password</label>
                                    <input className=" border-2 rounded text-black" value={password} onChange={handleChangePassword} placeholder="******" type="password"></input>
                                    <button className="border-2 my-12 border-white px-12 py-1 rounded hover:bg-white hover:text-black" type="submit">Sign Up</button>
                                </form>
                            </div>
                            <div className=" bg-white w-1/2">
                                    rfgedrsr
                            </div>
                            {errorMessage && <div className=" w-full flex justify-center">
                                                <p className="text-center mt-14 border-4 border-red-600 px-8 py-2 rounded">{errorMessage}</p>
                                            </div>}
                        </div> 
                    </div>
                    <Footer/>
                </>

    )
}

export default SignupPage;