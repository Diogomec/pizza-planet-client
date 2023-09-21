import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MenuPage = () => {
    return (
            <>
                <Navbar/>
                <div className="min-h-[29rem]">
                    <h1 className="text-center mt-4">Choose Your Pizzas Here!</h1>
                </div>
                 <Footer/>
            </>
    )
}

export default MenuPage;