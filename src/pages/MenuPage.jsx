import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import productService from "../services/product.service";
import { v4 as uuidv4 } from "uuid";
import PizzaCard from "../components/PizzaCard";

const MenuPage = () => {

    const [pizzas, setPizzas] = useState("")

    useEffect(() => {

         productService
        .getAll()
        .then(response  => {
            setPizzas(response.data)
        })
        .catch((error) => {
            console.log(error)
        });
    }, [])

    return (
            <>
                <Navbar/>
                <div className="min-h-[30rem]">
                    <h1 className="text-center mt-4 text-xl">Choose Your Pizzas Here!</h1>
                    <div className="flex justify-center mt-14 flex-wrap gap-4">
                    {pizzas ? pizzas.map(pizza => {
                        return <PizzaCard key={uuidv4()} pizza={pizza} />
                    }) : <p>No pizzas to show yet</p> }
                    </div>
              </div>
                 <Footer/>
            </>
    )
}

export default MenuPage;