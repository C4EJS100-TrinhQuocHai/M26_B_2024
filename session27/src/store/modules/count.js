const count = {
    state: {
        count: 0
    },
    mutations: {
        increase: (state, payload) => {
            console.log("giá trị payload", payload);

            state.count += payload.payload;
        },
    },
    actions: {

    },
    getters: {}
}
export default count;