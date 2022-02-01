export default {
    namespaced: true,
    state() {
        return {
            basicPayments: {
                'page1': [
                  {'date': '28.03.2020', 'category': 'Food', 'value': 169},
                  {'date': '20.03.2020', 'category': 'Transport', 'value': 769},
                  {'date': '10.03.2020', 'category': 'Sport', 'value': 69}
                ],
                'page2':[
                  {'date': '10.04.2020', 'category': 'Sport', 'value': 80},
                  {'date': '19.08.2020', 'category': 'Transport', 'value': 449},
                  {'date': '11.10.2020', 'category': 'Sport', 'value': 29}
                ],
                'page3':[
                  {'date': '16.11.2020', 'category': 'Transport', 'value': 1139},
                  {'date': '14.01.2020', 'category': 'Transport', 'value': 1769},
                  {'date': '01.03.2020', 'category': 'Sport', 'value': 169}
                ],
                },
            currentPayment: [],
            total_pages: 0,
            }
        },
    getters: {
        paymentList(state){
            return state.currentPayment
        },
        listNumber(state){
            return Object.keys(state.basicPayments).length
        }
    },
    mutations: {
        loadPay(state, data){
            for(let key in state.basicPayments){
                if (key == data){
                    state.currentPayment = state.basicPayments[key]
                }
            }
        },
        addItem(state,data) {
            state.basicPayments.page3.push(data)
        },

    },
    actions: {
        loadPayments({ commit }, data){
            commit('loadPay', data)
        }
    }
}