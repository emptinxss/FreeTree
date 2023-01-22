import { createStore } from 'vuex';
import { useDark } from '@vueuse/core';
import mutations from './mutations';
import actions from './actions';

const store = createStore({
    state: {
        user: {
            data: {},
            link: [],
            token: sessionStorage.getItem('TOKEN'),
        },
        theme: useDark(),
        error: false,
        errorMsg: '',
        successMessage: false,
        successModal: '',
    },
    actions,
    mutations,
});

export default store;
