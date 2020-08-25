<template>
    <div class="teacher">
        <!-- <pre>{{mentor_course}}</pre> -->
        <div class="container" v-if="teacher">
            <div class="teacher-profile d-flex align-items-center">
                <img :src="teacher.imageUrl">
                <div class="teacher-desc">
                    <h6 class="name">{{ teacher.name }}</h6>
                    <p class="text">{{ teacher.title }}</p>
                    <div class="d-flex align-items-center teacher-progress">
                        <div class="border-right pl-0">
                            <p class="number">{{ teacher.totalStudents ? teacher.totalStudents : 0 }}</p>
                            <p class="title">Студентов</p>
                        </div>
                        <div class="border-right">
                            <p class="number">{{ teacher.totalCourses ? teacher.totalCourses : 0 }}</p>
                            <p class="title">Курсов</p>
                        </div>
                        <div>
                            <p class="number">4,5/5</p>
                            <p class="title">Рейтинг</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr>
            <div class="biography">
                <h5>Биография</h5>
                <p>
                    {{ teacher.description }}
                </p>
            </div>
            <hr>
            <div class="courses">
                <h5>Курсы</h5>
                <MentorCourseCard :courses="mentor_courses" />
            </div>
        </div>
    </div>
</template>

<script>
import MentorCourseCard from '@/components/MentorCourseCard.vue'

export default {
    name: 'teacher',
    components: {
        MentorCourseCard
    },
    mounted() {
        this.$store.dispatch('GET_TEACHER', this.$route.params.id)
        this.$store.dispatch('GET_COURSE_MENTOR', this.$route.params.id)
        window.scrollTo(0,0)
    },
    computed: {
        teacher() {
            return this.$store.getters.TEACHER()
        },
        mentor_courses() {
            return this.$store.getters.MENTOR_COURSES()
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "../assets/css/main";
    .teacher{
        background: #f8f8f8;
        padding: 40px 0;
        @media (max-width: 768px) {
            padding: 20px 0;
        }
        .container{
            max-width: 850px;
        }
        .teacher-profile{
            img{
                width: 140px;
                height: 140px;
                object-fit: cover;
                border-radius: 50%;
            }
            @media (max-width: 768px) {
                flex-direction: column;
            }
        }
        .teacher-desc{
            margin-left: 50px;
            .name{
                font-style: normal;
                font-weight: 500;
                font-size: 26px;
                line-height: 32px;
                letter-spacing: -0.3px;
                color: #1B213E;
                margin-bottom: 20px;
                @media (max-width: 768px) {
                    margin-top: 1rem;
                    margin-bottom: .5rem;
                    font-size: 18px;
                }
            }
            .text{
                letter-spacing: -0.3px;
                color: #1B213E;
                @extend %style-one;
                margin-bottom: 20px;
            }
            @media (max-width: 768px) {
                margin-left: 0;
                text-align: center;
            }
        }
        .teacher-progress{
            >div{
                text-align: center;
                padding: 0 20px;
            }
            .number{
                letter-spacing: -0.3px;
                color: #1B213E;
                @extend %style-two;
                margin-bottom: 12px;
            }
            .title{
                letter-spacing: -0.3px;
                color: #1B213E;
                @extend %style-one;
            }
            @media (max-width: 768px) {
                justify-content: center;
            }
        }
        .biography{
            h5{
                margin-top: 30px;
                margin-bottom: 20px;
                letter-spacing: -0.3px;
                color: #326FEE;
                @extend %style-two;

            }
            p{
                letter-spacing: -0.3px;
                color: #1B213E;
                white-space: pre-line;
                @extend %style-one;
            }
        }
        .courses{
            h5{
                margin-top: 30px;
                margin-bottom: 20px;
                letter-spacing: -0.3px;
                color: #326FEE;
                @extend %style-two;
            }
            .row{
                @media (max-width: 768px) {
                    flex-wrap: initial;
                    overflow-x: scroll;
                }
            }
        }
    }
</style>