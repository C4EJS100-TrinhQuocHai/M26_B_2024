import { createStore } from "vuex";
// const { createStore } = require("vuex");
import count from "./modules/count";
import user from "./modules/user";
import product from "./modules/product";
const store = createStore({
    modules: {
        count,
        user,
        product,
    }
    // state: {
    //     // nơi khai báo dữ liệu (state)
    //     count: 0,
    //     users: [],
    //     products: []
    // },
    // getters: {
    //     // để lấy ra các state
    // },
    // mutations: {
    //     // nơi khai báo các hàm (method) để biến đổi state
    //     // khai báo hàm tăng giá trị biến count!
    //     increase: (state, payload) => {
    //         console.log("giá trị payload", payload);

    //         state.count += payload.payload;
    //     },
    //     // tạo những hàm tương tác với state là user
    //     // muốn thêm user
    //     addUser:(state,payload)=>{
    //         // state.users.push(payload)
    //     },

    //     // muốn thêm sản phẩm
    //     addProduct:()=>{

    //     }
})

export default store;