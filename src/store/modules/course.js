import api from '../../http-common'

export default{
    state:{
        courses: null,
        course: null,
        course_section: null,
        course_section_without_token: null,
        my_course: null,
        user_course: null,
        online_courses_three: null,
        offline_courses_three: null,
        online_courses: null,
        offline_courses: null,
        mentor_courses: null
    },
    getters: {
        COURSES: state => () => state.courses,
        COURSE: state => () => state.course,
        COURSE_SECTION: state => () => state.course_section,
        COURSE_SECTION_WITHOUT_TOKEN: state => () => state.course_section_without_token,
        MY_COURSE: state => () => state.my_course,
        USER_COURSE: state => () => state.user_course,
        ONLINE_COURSES_THREE: state => () => state.online_courses_three,
        OFFLINE_COURSES_THREE: state => () => state.offline_courses_three,
        ONLINE_COURSES: state => () => state.online_courses,
        OFFLINE_COURSES: state => () => state.offline_courses,
        MENTOR_COURSES: state => () => state.mentor_courses

    },
    mutations:{
        SET_COURSES(state, courses){
            state.courses = courses
        },
        SET_COURSE(state, course){
            state.course = course
        },
        SET_COURSE_SECTION(state, course_section){
            state.course_section = course_section
        },
        SET_COURSE_SECTION_WITHOUT_TOKEN(state, course_section_without_token){
            state.course_section_without_token = course_section_without_token
        },
        SET_MY_COURSE(state, my_course){
            state.my_course = my_course
        },
        SET_USER_COURSE(state, user_course){
            state.user_course = user_course
        },
        SET_ONLINE_COURSES_THREE(state, online_courses_three){
            state.online_courses_three = online_courses_three
        },
        SET_OFFLINE_COURSES_THREE(state, offline_courses_three){
            state.offline_courses_three = offline_courses_three
        },
        SET_ONLINE_COURSES(state, online_courses){
            state.online_courses = online_courses
        },
        SET_OFFLINE_COURSES(state, offline_courses){
            state.offline_courses = offline_courses
        },
        SET_MENTOR_COURSES(state, mentor_courses){
            state.mentor_courses = mentor_courses
        }
    },
    actions:{
        GET_COURSES({commit}){
            return new Promise((resolve, reject) => {
                api.get('/courses')
                .then(resp => {
                    const data = resp.data
                    resolve(resp)
                    commit('SET_COURSES', data)
                })
                .catch(err => {
                    reject(err)
                    console.log(err)
                })
            })
        },
        GET_COURSE({commit}, id){
            return new Promise((resolve, reject) => {
                api.get('/courses/' + id)
                .then(resp => {
                    const data = resp.data
                    resolve(resp)
                    commit('SET_COURSE', data)
                })
                .catch(err => {
                    reject(err)
                    console.log(err)
                })
            })
        },
        GET_COURSE_SECTION({commit}, id){
            return new Promise((resolve, reject) => {
                api.get('/courses/sections?courseId=' + id + '&progressForUserId=' + localStorage.getItem('id'))
                .then(resp => {
                    const data = resp.data
                    resolve(resp)
                    commit('SET_COURSE_SECTION', data)
                })
                .catch(err => {
                    reject(err)
                    console.log(err)
                })
            })
        },
        GET_COURSE_SECTION_WITHOUT_TOKEN({commit}, id){
            return new Promise((resolve, reject) => {
                api.get('/courses/sections?courseId=' + id)
                .then(resp => {
                    const data = resp.data
                    resolve(resp)
                    commit('SET_COURSE_SECTION_WITHOUT_TOKEN', data)
                })
                .catch(err => {
                    reject(err)
                    console.log(err)
                })
            })
        },
        GET_MY_COURSE({commit}){
            return new Promise((resolve, reject) => {
                api.get('/courses/?availableForUserId=' + localStorage.getItem('id'))
                .then(resp => {
                    const data = resp.data
                    resolve(resp)
                    commit('SET_MY_COURSE', data)
                })
                .catch(err => {
                    reject(err)
                    console.log(err)
                })
            })
        },
        GET_USER_COURSE({commit}, id){
            return new Promise((resolve, reject) => {
                api.get('/courses/?availableForUserId=' + id)
                .then(resp => {
                    const data = resp.data
                    resolve(resp)
                    commit('SET_USER_COURSE', data)
                })
                .catch(err => {
                    reject(err)
                    console.log(err)
                })
            })
        },
        GET_ONLINE_COURSES_THREE({commit}){
            return new Promise((resolve, reject) => {
                api.get('/courses/?courseTypeEnum=ONLINE&size=3')
                .then(resp => {
                    const data = resp.data
                    resolve(resp)
                    commit('SET_ONLINE_COURSES_THREE', data)
                })
                .catch(err => {
                    reject(err)
                    console.log(err)
                })
            })
        },
        GET_OFFLINE_COURSES_THREE({commit}){
            return new Promise((resolve, reject) => {
                api.get('/courses/?courseTypeEnum=OFFLINE&size=3')
                .then(resp => {
                    const data = resp.data
                    resolve(resp)
                    commit('SET_OFFLINE_COURSES_THREE', data)
                })
                .catch(err => {
                    reject(err)
                    console.log(err)
                })
            })
        },
        GET_ONLINE_COURSES({commit}){
            return new Promise((resolve, reject) => {
                api.get('/courses/?courseTypeEnum=ONLINE')
                .then(resp => {
                    const data = resp.data
                    resolve(resp)
                    commit('SET_ONLINE_COURSES', data)
                })
                .catch(err => {
                    reject(err)
                    console.log(err)
                })
            })
        },
        GET_OFFLINE_COURSES({commit}){
            return new Promise((resolve, reject) => {
                api.get('/courses/?courseTypeEnum=OFFLINE')
                .then(resp => {
                    const data = resp.data
                    resolve(resp)
                    commit('SET_OFFLINE_COURSES', data)
                })
                .catch(err => {
                    reject(err)
                    console.log(err)
                })
            })
        },
        GET_COURSE_MENTOR({commit}, id){
            return new Promise((resolve, reject) => {
                api.get('/courses?mentorId=' + id)
                .then(resp => {
                    const data = resp.data
                    resolve(resp)
                    commit('SET_MENTOR_COURSES', data)
                })
                .catch(err => {
                    reject(err)
                    console.log(err)
                })
            })
        },
    }
}