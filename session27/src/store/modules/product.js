import { addProduct, getAllProduct } from "@/api/productApi";
const product = {
    state: {
        products: []
    },
    mutations: {
        getAllProduct: async (state, payload) => {
            state.products = await getAllProduct();
        },
        addProductMutation: async (state, payload) => {
            console.log("giá trị sản phẩm vừa thêm vào", payload);

            state.products.push(payload);
        }

    },
    actions: {
        // xử lý các tác vụ bất đồng bộ
        // hàm đi lấy tất cả sản phẩm

        getAllProduct: ({ commit }) => {
            commit("getAllProduct")
        },
        addProductAction: async ({ commit }, payload) => {
            commit("addProductMutation", await addProduct(payload.data))
        }
    }
}
export default product;