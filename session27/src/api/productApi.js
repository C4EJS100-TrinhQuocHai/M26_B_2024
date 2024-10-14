// API lấy toàn bộ thông tin của sản phẩm
// import axios from .... 
import axios from "axios"
export const getAllProduct = async () => {
    const response = await axios.get("http://localhost:3000/products")
    // console.log(111111, response);

    return response.data
}
// API lấy chi tiết 1 sản phẩm

export const getOneProduct = (id) => {
    // axios.get("http://localhost:8080/product")
    // const product =  // axios.get(`http://localhost:8080/product/$id`
    // return product.data
}

// API thêm mới 1 sản phẩm
export const addProduct = async (product) => {
    try {
        const response = await axios.post("http://localhost:3000/products", product)
        // console.log(444444, response);

        return response.data
    } catch (error) {
        console.log("error", error);
    }
}