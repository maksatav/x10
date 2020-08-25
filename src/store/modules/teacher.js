import api from '../../http-common'

export default{
    state:{
        teachers: null,
        teacher: null
    },
    getters: {
        TEACHERS: state => () => state.teachers,
        TEACHER: state => () => state.teacher
    },
    mutations:{
        SET_TEACHERS(state, teachers){
            state.teachers = teachers
        },
        SET_TEACHER(state, teacher){
            state.teacher = teacher
        }
    },
    actions:{
        GET_TEACHERS({commit}){
            return new Promise((resolve, reject) => {
                api.get('/mentors')
                .then(resp => {
                    const data = resp.data
                    resolve(resp)
                    commit('SET_TEACHERS', data)
                })
                .catch(err => {
                    reject(err)
                    console.log(err)
                })
            })
        },
        GET_TEACHER({commit}, id){
            return new Promise((resolve, reject) => {
                api.get('/mentors/' + id)
                .then(resp => {
                    const data = resp.data
                    resolve(resp)
                    commit('SET_TEACHER', data)
                })
                .catch(err => {
                    reject(err)
                    console.log(err)
                })
            })
        }
    }
}