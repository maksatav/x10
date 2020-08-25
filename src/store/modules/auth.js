import api from '../../http-common.js'

export default{
    state:{
        user: null

    },
    getters: {
        GET_USER: state => () => state.user
    },
    mutations:{
        LOG_IN(state, user) {
            state.user = user
        },
        LOG_OUT(state) {
            state.user = null
        }
    },
    actions:{
        SET_USER: ({commit}, payload = null) => {
            if (payload && payload.data) {
                // localStorage.token =  payload.data.token
                api.defaults.headers.common['Authorization'] = localStorage.getItem('token')
                commit('LOG_IN', payload.data.user)
            } else {
                localStorage.removeItem('token')
                localStorage.removeItem('id')
                delete api.defaults.headers.common['Authorization']
                commit('LOG_OUT')
            }
        },
        SET_USER_FROM_TOKEN: ({commit}) => {
            api.get('/users/' + localStorage.getItem('id'))
            .then(response => {
                commit('LOG_IN', response.data)
                // console.log(response.data)
            })
            .catch(error => {
                localStorage.removeItem('token')
                localStorage.removeItem('id')
                delete api.defaults.headers.common['Authorization']
                commit('LOG_OUT')
            })
        }
    }
}