import axios from "axios";

export default class ProductService {
    getProcuct(){
        return axios.get("http://localhost:8080/api/products/getAll")
    }
}