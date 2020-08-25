<template>
    <div class="offline-courses">
        <div class="offline-courses-top">
            <div class="container">
                <h1>Курсы</h1>
            </div>
        </div>
        <div class="offline-courses-block">
            <div class="container">
                <h6>Оффлайн курсы</h6>
                <OfflineCourseCard :courses="courses" />
            </div>
        </div>
    </div>
</template>

<script>
import OfflineCourseCard from '@/components/OfflineCourseCard.vue'

export default {
    name: 'offline-courses',
    components: {
        OfflineCourseCard
    },
    computed: {
        courses (){
            return this.$store.getters.OFFLINE_COURSES()
        }
    },
    mounted() {
        this.$store.dispatch('GET_OFFLINE_COURSES')
    }
}
</script>

<style lang="scss" scoped>
    @import "../assets/css/main";
    .offline-courses{
        .offline-courses-top{
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
        .offline-courses-block{
            padding: 25px 0;
            h6{
                color: #1B213E;
                @extend %style-two;
                margin-bottom: 20px;
            }
        }
    }
</style>