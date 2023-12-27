const mutations = {
    REMOVE_USER: (state, userId) => {
        state.users = state.users.filter(x => x.id !== userId);
    },
    ADD_USER: (state, user) => {
        state.users.push(user)
    }
};

export default mutations;