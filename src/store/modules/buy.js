import api from '../../http-common'

export default{
    state:{
        purchased_course: null,
        request: null
    },
    getters: {
        PURCHASED_COURSE: state => () => state.purchased_course,
        REQUEST: state => () => state.request,
    },
    mutations:{
        SET_PURCHASED_COURSE(state, purchased_course){
            state.purchased_course = purchased_course
        },
        SET_REQUEST(state, request){
            state.request = request
        }
    },
    actions:{
        GET_PURCHASED_COURSE({commit}, data){
            return new Promise((resolve, reject) => {
                api.post('/orders', data)
                .then(resp => {
                    const data = resp.data
                    resolve(resp)
                    commit('SET_PURCHASED_COURSE', data)
                })
                .catch(err => {
                    reject(err)
                    console.log(err)
                })
            })
        },
        GET_REQUEST({commit}, data){
            return new Promise((resolve, reject) => {
                api.post('/requests', data)
                .then(resp => {
                    const data = resp.data
                    resolve(resp)
                    commit('SET_REQUEST', data)
                })
                .catch(err => {
                    reject(err)
                    console.log(err)
                })
            })
        }
    }
}