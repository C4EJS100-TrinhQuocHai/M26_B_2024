import { createStore } from "vuex";

const store = createStore({
    state: {
        count: 0,
        todos: [
            {
                id: 1,
                status: true,
                name: "code"
            },
            {
                id: 2,
                status: false,
                name: "đá bóng"
            },
            {
                id: 3,
                status: true,
                name: "cầu lông"
            }
        ],
        users: []
    },
    getters: {
        getCount: (state) => {
            return state.count
        },
        doneTodos: (a) => {
            return a.todos.filter(item => item.status);
        }
    },
    mutations: {
        // đi định nghĩa các phương thức để tương tác với state, chính là dữ liệu
        increment1: (abc_state, a) => {
            console.log("giá trị nhận về", a);
            abc_state.users = a.amount;
        },
    },
    actions: {
        // destructoring
        incrementAsync1({ commit }) {
            // console.log(111, abbbb);
            // setTimeout(() => {
            //     commit('increment1', {
            //         amount: 6
            //     })
            // }, 3000)
            // lấy data từ API
            fetch(" http://localhost:3000/users")
                .then(res => res.json())
                .then(data => {
                    console.log("111111", data);
                    commit("increment1", {
                        amount: data
                    })
                })
                .catch(err => console.log("bug", err))
        },
        deleteUser:({commit},payload)=>{
            fetch(`http://localhost:3000/users/${payload.id}`,{
                method:"DELETE"
            })
        }
    }
})

export default store;