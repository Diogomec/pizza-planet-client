
import { v4 as uuidv4 } from "uuid";

const PizzaCard = ({pizza}) => {


    return (
        <>
             <div className="flex justify-center mt-8 flex-wrap gap-4">
                                <div className="border-white border-solid border-4 w-72 h-[28rem] rounded">
                                    <h3 className="text-center my-2">{pizza.name}</h3>
                                    <div className="flex justify-center"> 
                                    <img src={pizza.imageUrl} width="250px" className="rounded" ></img>
                                    </div>
                                    <div className=" flex flex-col items-center justify-center">
                                    <select className="text-black mt-4">
                                        {pizza.sizes.map(size => {
                                            return <option key={uuidv4()} className="text-black rounded" >{size.name}</option>
                                        })}
                                    </select>
                                    <p className="text-center mt-4 " >19,99 €</p>
                                    </div>
                                    <div className="flex gap-4 justify-center mt-4">
                                        <button className="border-2 border-white rounded px-4 py-2">More Info</button>
                                        <button className="border-2 border-white rounded px-4 py-2">Order</button>
                                        
                                    </div>
                                </div>
                            
                    </div>
        </>
    )
}

export default PizzaCard;