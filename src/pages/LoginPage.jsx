import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleChangeEmail = (e) =>  setEmail(e.target.value);
    const handleChangePassword = (e) =>  setPassword(e.target.value);
    
    return (
        <>
            <Navbar/>
                <form className="flex flex-col items-center m-14" onSubmit={{}}>
                    <label>Email</label>
                    <input className="border-black border-2" value={email} onChange={handleChangeEmail} placeholder="user@planetpizza.com" type="email"></input>
                    <label>Password</label>
                    <input className="border-black border-2" value={password} onChange={handleChangePassword} placeholder="******" type="password"></input>
                    <button className="border-black border-2" type="submit">Login</button>
                 </form>
            <Footer/>
        </>
    )
}

export default LoginPage;