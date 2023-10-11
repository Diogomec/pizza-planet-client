import axios from "axios";

class ProductService {
    constructor() {
        this.api = axios.create ({

            baseURL: import.meta.env.REACT_APP_API_URL || "http://localhost:5005"
        })
    }

    getAll = () => {
     return this.api.get("/product/getAll");
    };
}

const productService = new ProductService();

export default productService;