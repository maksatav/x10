import api from '../../http-common'

export default{
    state:{
        users: null,
        user: null,
        user_courses_progress: null
    },
    getters: {
        USERS: state => () => state.users,
        USER: state => () => state.user,
        USER_COURSES_PROGRESS: state => () => state.user_courses_progress
    },
    mutations:{
        SET_USERS(state, users){
            state.users = users
        },
        SET_USER(state, user){
            state.user = user
        },
        SET_USER_COURSES_PROGRESS(state, user_courses_progress){
            state.user_courses_progress = user_courses_progress
        }
    },
    actions:{
        GET_USERS({commit}){
            return new Promise((resolve, reject) => {
                api.get('/users')
                .then(resp => {
                    const data = resp.data
                    resolve(resp)
                    commit('SET_USERS', data)
                })
                .catch(err => {
                    reject(err)
                    console.log(err)
                })
            })
        },
        GET_USER({commit}, id){
            return new Promise((resolve, reject) => {
                api.get('/users/' + id)
                .then(resp => {
                    const data = resp.data
                    resolve(resp)
                    commit('SET_USER', data)
                })
                .catch(err => {
                    reject(err)
                    console.log(err)
                })
            })
        },
        GET_USER_COURSES_PROGRESS({commit}, data){
            return new Promise((resolve, reject) => {
                api.post('user_courses/progresses', data)
                .then(resp => {
                    const data = resp.data
                    resolve(resp)
                    commit('SET_USER_COURSES_PROGRESS', data)
                })
                .catch(err => {
                    reject(err)
                    console.log(err)
                })
            })
        }
    }
}