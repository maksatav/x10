import api from '../../http-common'

export default{
    state:{
        quiz: null,
        // total_point: null
    },
    getters: {
        QUIZ: state => () => state.quiz,
        // TOTAL_POINT: state => () => state.total_point
    },
    mutations:{
        SET_QUIZ(state, quiz){
            state.quiz = quiz
        },
        // SET_TOTAL_POINT(state, total_point){
        //     state.total_point = total_point
        // }
    },
    actions:{
        GET_QUIZ({commit}, id){
            return new Promise((resolve, reject) => {
                api.get('/quizzes/' + id)
                .then(resp => {
                    const data = resp.data
                    resolve(resp)
                    commit('SET_QUIZ', data)
                })
                .catch(err => {
                    reject(err)
                    console.log(err)
                })
            })
        },
        // GET_TOTAL_POINT({commit}, data){
        //     return new Promise((resolve, reject) => {
        //         api.post('/quizzes', data)
        //         .then(resp => {
        //             const data = resp.data
        //             resolve(resp)
        //             commit('SET_TOTAL_POINT', data)
        //         })
        //         .catch(err => {
        //             reject(err)
        //             console.log(err)
        //         })
        //     })
        // }
    }
}