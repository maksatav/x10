<template>
    <div class="online-courses">
        <div class="online-courses-top">
            <div class="container">
                <h1>Курсы</h1>
            </div>
        </div>
        <div class="online-courses-block">
            <div class="container">
                <h6>Онлайн курсы</h6>
                <OnlineCourseCard :courses="courses" />
            </div>
        </div>
    </div>
</template>

<script>
import OnlineCourseCard from '@/components/OnlineCourseCard.vue'

export default {
    name: 'online-courses',
    components: {
        OnlineCourseCard
    },
    computed: {
        courses (){
            return this.$store.getters.ONLINE_COURSES()
        }
    },
    mounted() {
        this.$store.dispatch('GET_ONLINE_COURSES')
    }
}
</script>

<style lang="scss" scoped>
    @import "../assets/css/main";
    .online-courses{
        .online-courses-top{
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
        .online-courses-block{
            padding: 25px 0;
            h6{
                color: #1B213E;
                @extend %style-two;
                margin-bottom: 20px;
            }
        }
    }
</style>