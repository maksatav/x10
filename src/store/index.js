import Vue from 'vue'
import Vuex from 'vuex'
import course from "./modules/course"
import auth from "./modules/auth"
import teacher from "./modules/teacher"
import buy from "./modules/buy"
import user from "./modules/user"
import quiz from "./modules/quiz"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    course,
    auth,
    teacher,
    buy,
    user,
    quiz
  }
})
