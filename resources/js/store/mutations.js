export default {
    logout: () => {
        sessionStorage.removeItem('TOKEN');
    },
    reset: (state) => {
        state.user.link = [];
        state.user.data = {};
    },
    setUser: (state, user) => {
        state.user.data = user;
    },
    setPublicUser: (state, user) => {
        state.user.data.public = user;
    },
    setToken: (state, token) => {
        sessionStorage.setItem('TOKEN', token);
        state.user.token = token;
    },
    setLink: (state, link) => {
        state.user.link = link;
    },
    updateLink: (state, linkData) => {
        state.user.link[linkData.index] = linkData.link;
    },
    addLink: (state, link) => {
        if (!state.user.link) {
            state.user.link = [link];
        } else {
            state.user.link.push(link);
        }
    },
    setImage: (state, image) => {
        state.user.data.image = image;
    },
    delLink: (state, link) => {
        let index = state.user.link.map((item) => item.id).indexOf(link);
        state.user.link.splice(index, 1);
    },
    changeTheme: (state) => {
        state.theme = !state.theme;
    },
    closeError: (state) => {
        state.error = false;
    },
    setError: (state, err) => {
        state.error = true;
        if (!err.response) {
            state.errorMsg = 'Error: Network Error';
        } else {
            state.errorMsg = err.response.data.message;
        }
    },
    setModal: (state, response) => {
        if (response.data.success) {
            state.successModal = true;
            state.successMessage = response.data.message;
            setTimeout(() => {
                state.successModal = false;
                state.successMessage = '';
            }, 3000);
        }
    },
};
