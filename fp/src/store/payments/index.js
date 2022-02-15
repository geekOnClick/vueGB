import Vue from 'vue';

const pages = {
    page1: [
        {
            id: 1, date: '20.03.2020', category: 'Food', value: 180,
        },
        {
            id: 2, date: '21.03.2020', category: 'Navigation', value: 150,
        },
        {
            id: 3, date: '22.03.2020', category: 'Sport', value: 450,
        },
        {
            id: 4, date: '23.03.2020', category: 'Entertaiment', value: 969,
        },
        {
            id: 5, date: '24.03.2020', category: 'Education', value: 1500,
        },
    ],
    page2: [
        {
            id: 6, date: '23.04.2020', category: 'Navigation', value: 1000,
        },
        {
            id: 7, date: '24.04.2020', category: 'Entertaiment', value: 1100,
        },
        {
            id: 8, date: '25.04.2020', category: 'Food', value: 300,
        },
        {
            id: 9, date: '20.04.2020', category: 'Food', value: 250,
        },
        {
            id: 10, date: '20.04.2020', category: 'Food', value: 800,
        },
    ],
    page3: [
        {
            id: 11, date: '23.05.2020', category: 'Entertaiment', value: 2324,
        },
        {
            id: 12, date: '24.05.2020', category: 'Education', value: 2100,
        },
        {
            id: 13, date: '25.05.2020', category: 'Entertaiment', value: 3000,
        },
        {
            id: 14, date: '20.05.2020', category: 'Food', value: 2000,
        },
        {
            id: 15, date: '20.05.2020', category: 'Food', value: 345,
        },
    ],

};

export default {
    state: {
        paymentsList: {},
        pageCount: 1,
        maxID: 0
    },
    mutations: {
        SET_PAYMENTS_LIST(state, payload) {
            Vue.set(state.paymentsList, payload["key"], payload["list"]);
        },
        SET_PAGES_COUNT(state, count) {
            state.pageCount = count;
        },
        SET_MAX_ID(state) {
            const lastPage = pages["page" + state.pageCount];
            state.maxID = lastPage[lastPage.length - 1].id;
        },
        ADD_PAYMENT_DATA(state, payment) {
            if (pages['page' + state.pageCount].length < 3) {
                pages['page' + state.pageCount].push(payment);
            } else {
                pages['page' + (state.pageCount + 1)] = [payment];
            }
        },
        REMOVE_PAYMENT_DATA(state, id) {
            for (const key in state.paymentsList) {
                state.paymentsList[key] = state.paymentsList[key].filter(item => item.id != id);
            }
        },
        UPDATE_PAYMENT_DATA(state, payload) {
            for (const key in state.paymentsList) {
                state.paymentsList[key].forEach((item, index) => {
                    if (item.id == payload.id) {
                        state.paymentsList[key][index].date = payload.date;
                        state.paymentsList[key][index].category = payload.category;
                        state.paymentsList[key][index].value = payload.value;
                    }
                });
            }
        },
    },
    getters: {
        paymentsList: ({ paymentsList }) => paymentsList,
        paymentPages: ({ pageCount }) => pageCount,
        maxID: ({ maxID }) => maxID,
    },
    actions: {
        fetchData(state, page) {
            const key = 'page' + page;
            if (!(key in state.getters.paymentsList)) {
                setTimeout(() => {
                    const initialPaymentsList = pages[key];
                    state.commit('SET_PAYMENTS_LIST', { "key": key, "list": initialPaymentsList });
                });
            }
        },
        fetchPages({ commit }) {
            setTimeout(() => {
                const pageCount = Object.keys(pages).length;
                commit('SET_PAGES_COUNT', pageCount);
                commit('SET_MAX_ID');
            });
        }
    },
};
