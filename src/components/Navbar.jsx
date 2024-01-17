import { Link }  from "react-router-dom";
import logo from "../assets/logo.png"
import { AuthContext } from "../context/auth.context";
import { useContext, useState } from "react";


const Navbar = () => {

    const { isLoggedIn, logOutUser }  = useContext(AuthContext)

    const [hamburguerMenu, setHamburguerMenu] = useState(false);

    const hamburguerMenuClick = () => {
        setHamburguerMenu(!hamburguerMenu)
        // console.log(hamburguerMenu)
    }

    const handleLogout = () => {
        logOutUser();
    }

    return (
        <>

            {isLoggedIn  ?   
            <nav>
                <ul className="items-center flex sm:hidden  "> 
                    <li>
                        <Link to="/" className="flex items-center gap-4">
                                {/* Change this image */}
                                <img src={logo} alt="Pizza Logo" width="50" height="50"/>
                                <h3>Pizza Planet</h3>
                        </Link>
                    </li>
                    <li className="flex items-center gap-4">
                        <Link to="/menu" >Menu</Link>
                        <Link to="/users/profile">Profile</Link>
                        <Link to="/users/my-orders">My Orders</Link>
                        <Link to="/users/my-favourites">My Favourites</Link>
                        <Link to="/users/create-my-pizza">Create My Pizza</Link>
                    </li>
                    <li className="flex gap-4">
                        <button onClick={handleLogout}>Logout</button>
                        <button>Cart</button>
                    </li>
                </ul>
            </nav> 
                        : 
            <nav>
                {/* Not well centered */}
                <ul className="items-center w-full justify-between flex sm:hidden">
                    <li>
                        <Link to="/" className="flex items-center gap-4 ml-5">
                            <img src={logo} alt="Pizza Logo" width="50" height="50"/>
                            <h3>Pizza Planet</h3>
                        </Link>
                    </li>
                    <li className="flex  gap-4 justify-center mr-[8rem]">
                        <Link to="/menu">Menu</Link>
                        <Link to="/signup">Signup</Link>
                        <Link to="/login">Login</Link>
                    </li>
                    <li className=" flex justify-end mr-10">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3
                                2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                        </button>
                    </li>
                </ul>
                {/* Mobile NavBar */}
                <ul className="items-center w-full justify-between hidden sm:flex">
                    <li>
                        <Link to="/" className="flex items-center gap-4 ml-5">
                            <img src={logo} alt="Pizza Logo" width="50" height="50"/>
                            <h3>Pizza Planet</h3>
                        </Link>
                    </li>
                    <li className="flex  gap-4 justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={hamburguerMenu ? "black" : "white"} className="w-6 h-6 cursor-pointer z-10" onClick={hamburguerMenuClick}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    {hamburguerMenu && <div><ul className="absolute top-0 right-0 bg-white w-40 h-screen">
                                        <li><a className="text-black">Menu</a></li>
                                        <li><a className="text-black">Login</a></li>
                                        <li><a className="text-black">Signup</a></li>
                                        <li><a className="text-black">Shopping Cart</a></li>
                                    </ul></div>}
                    </li>
                </ul>
                
            </nav> 
            }
        </>
    )
}

export default Navbar;

