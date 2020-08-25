<template>
    <div class="my-course">
        <div class="my-course__top">
            <h1>Мои курсы</h1>
        </div>
        <div class="my-course__container">
            <!-- <pre>{{mycourse}}</pre> -->
            <MyCourseCard :courses="mycourse" v-if="mycourse.data.length" />
            <h6 v-else>Курсов нет</h6>
        </div>
    </div>
</template>

<script>
import MyCourseCard from '@/components/MyCourseCard'

export default {
    name: 'my-course',
    components: {
        MyCourseCard
    },
    computed: {
        mycourse() {
            return this.$store.getters.MY_COURSE()
        }
    },
    mounted() {
        if(localStorage.getItem('token')){
            this.$store.dispatch('GET_MY_COURSE')
        }
        window.scrollTo(0,0)
    }
}
</script>

<style lang="scss" scoped>
    .my-course{
        background: #f8f8f8;
        &__top{
            background: #E8F2F5;
            padding: 26px 1rem;
            @media (max-width: 768px) {
                padding: 13px 1rem;
            }
            h1{
                width: 700px;
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
        &__container{
            width: 700px;
            margin: 0 auto;
            padding: 40px 0;
            @media (max-width: 768px) {
                width: 100%;
                padding: 40px 1rem;
            }
        }
    }
</style>