<template>
    <div class="courses">
        <div class="courses-top">
            <div class="container">
                <h1>Курсы</h1>
            </div>
        </div>
        <div class="courses-block">
            <!-- <div class="courses offline-course">
                <div class="container">
                    <h6><router-link to="offlinecourses">Оффлайн курсы</router-link></h6>
                    <OfflineCourseCard :courses="offline_courses" />
                </div>
            </div> -->
            <div class="courses online-course">
                <div class="container">
                    <h6><router-link to="onlinecourses">Онлайн курсы</router-link></h6>
                    <OnlineCourseCard :courses="online_courses" />
                </div>
            </div>
            <!-- <div class="courses vebinar">
                <div class="container">
                    <h6>Вебинар</h6>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
import OfflineCourseCard from '@/components/OfflineCourseCard.vue'
import OnlineCourseCard from '@/components/OnlineCourseCard.vue'

export default {
    name: 'courses',
    components: {
        OfflineCourseCard, OnlineCourseCard
    },
    computed: {
        online_courses (){
            return this.$store.getters.ONLINE_COURSES_THREE()
        },
        offline_courses (){
            return this.$store.getters.OFFLINE_COURSES_THREE()
        }
    },
    mounted() {
        this.$store.dispatch('GET_ONLINE_COURSES_THREE')
        this.$store.dispatch('GET_OFFLINE_COURSES_THREE')
        window.scrollTo(0,0)
    }
}
</script>

<style lang="scss" scoped>
    @import "../assets/css/main";
    .courses{
        .courses-top{
            background: #E8F2F5;
            padding: 26px 1rem;
            @media (max-width: 768px) {
                padding: 0;
            }
            h1{
                font-style: normal;
                font-weight: 500;
                font-size: 26px;
                line-height: 32px;
                letter-spacing: -0.3px;
                color: #32768D;
                margin: 0 auto;
                @media (max-width: 768px) {
                    width: 100%;
                    text-align: center;
                    font-size: 16px;
                }
            }
        }
        .courses-block{
            padding: 25px 0;
            background: #ffffff;
            h1{
                color: #1B213E;
                margin-bottom: 40px;
                letter-spacing: -0.3px;
                text-align: center;
                @extend %h1;
            }
            .courses{
                padding: 25px 0;
                h6{
                    color: #1B213E;
                    @extend %style-two;
                    margin-bottom: 20px;
                    a{
                        color: #1B213E;
                        // text-decoration: none;
                    }
                }
                .container{
                    max-width: 1180px;
                }
                .row{
                    @media (max-width: 768px) {
                        flex-wrap: initial;
                        overflow-x: scroll;
                    }
                }
            }
            .online-course{
                background: #f8f8f8;
            }
        }
    }
</style>