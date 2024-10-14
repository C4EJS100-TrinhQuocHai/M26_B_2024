import { addProduct, getAllProduct } from "@/api/productApi";
const product = {
    state: {
        products: []
    },
    mutations: {
        getAllProduct: async (state) => {
            state.products = await getAllProduct();
        },
        addProductMutation: async (state, payload) => {
            console.log("giá trị sản phẩm vừa thêm vào", payload);
            const res = await addProduct(payload.data);
            state.products.push(res);
        }
    },
    actions: {
        // xử lý các tác vụ bất đồng bộ
        // hàm đi lấy tất cả sản phẩm
        getAllProduct: ({ commit }) => {
            commit("getAllProduct")
        },
        addProductAction: ({ commit }, payload) => {
            commit("addProductMutation", payload)
        }
    }
}
export default product;