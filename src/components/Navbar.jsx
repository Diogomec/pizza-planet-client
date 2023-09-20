import { Link }  from "react-router-dom";
import logo from "../assets/logo.png"
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";


const Navbar = () => {

    const { isLoggedIn, logOutUser }  = useContext(AuthContext)

    const handleLogout = () => {
        logOutUser();
    }

    return (
        <>

            {isLoggedIn  ?   
            <nav>
                <ul className="flex justify-around items-center"> 
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
                <ul className="flex justify-around items-center gap-4">
                    <li>
                        <Link to="/" className="flex items-center gap-4">
                            <img src={logo} alt="Pizza Logo" width="50" height="50"/>
                            <h3>Pizza Planet</h3>
                        </Link>
                    </li>
                    <li className="flex items-center gap-4">
                        <Link to="/menu">Menu</Link>
                        <Link to="/signup">Signup</Link>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <button>Cart</button>
                    </li>
                </ul>
            </nav> 
            }
        </>
    )
}

export default Navbar;

