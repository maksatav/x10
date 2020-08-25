<template>
    <div class="graduate">
        <div class="container" v-if="graduate">
            <!-- <pre>{{graduate}}</pre> -->
            <img :src="graduate.imageUrl" v-if="graduate.imageUrl" class="graduate-image">
            <img src="../assets/image/icon/user.svg" v-else class="graduate-image">
            <h1 class="name">{{ graduate.name }}</h1>
            <p class="company">СЕО компании х10</p>
            <div class="d-flex align-items-center justify-content-center graduate-progress">
                <div class="border-right pl-0">
                    <img src="../assets/image/icon/coin.png">
                    <p class="title">{{ graduate.originalPoints }} бонусов</p>
                </div>
                <div class="border-right">
                    <img src="../assets/image/icon/N1.png" class="number" v-if="graduate.order === 1">
                    <img src="../assets/image/icon/N2.png" class="number" v-else-if="graduate.order === 2">
                    <img src="../assets/image/icon/N3.png" class="number" v-else-if="graduate.order === 3">
                    <p class="title" v-if="graduate.order === 1">1 место</p>
                    <p class="title" v-if="graduate.order === 2">2 место</p>
                    <p class="title" v-if="graduate.order === 3">3 место</p>
                </div>
                <div>
                    <img src="../assets/image/icon/ifbc.png" :style="graduate.member == false ? 'opacity:0.4' : 'opacity:1'">
                    <p class="title">FBC Member</p>
                </div>
            </div>
            <div class="course" v-if="user_courses">
                <h6>Курсы</h6>
                <p v-if="user_courses.total === 0">Курсов нет</p>
                <MyCourseCard :courses="user_courses" v-else/>
            </div>
        </div>
    </div>
</template>

<script>
import MyCourseCard from '@/components/MyCourseCard'

export default {
    name: 'graduate',
    components: {
        MyCourseCard
    },
    mounted() {
        this.$store.dispatch('GET_USER', this.$route.params.id)
        this.$store.dispatch('GET_USER_COURSE', this.$route.params.id)
        window.scrollTo(0,0)
    },
    computed: {
        graduate() {
            return this.$store.getters.USER()
        },
        user_courses() {
            return this.$store.getters.USER_COURSE()
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "../assets/css/main";
    .graduate{
        padding: 40px 0;
        background: #f8f8f8;
        text-align: center;
        @media (max-width: 425px) {
            padding: 20px 0;
        }
        .graduate-image{
            width: 140px;
            height: 140px;
            object-fit: cover;
            border-radius: 50%;
            margin-bottom: 20px;
        }
        .name{
            margin-bottom: 20px;
            font-style: normal;
            font-weight: 500;
            font-size: 26px;
            line-height: 32px;
            letter-spacing: -0.3px;
            color: #1B213E;
            @media (max-width: 425px) {
                margin-bottom: 10px;
                font-size: 16px;
            }
        }
        .company{
            letter-spacing: -0.3px;
            color: #E0E0E0;
            @extend %style-one;
        }
        .graduate-progress{
            > div{
                text-align: center;
                padding: 0 20px;
            }
            img{
                width: 35px;
                height: 23px;
                object-fit: contain;
                margin-bottom: 1rem;
            }
            .title{
                letter-spacing: -0.3px;
                color: #1B213E;
                @extend %style-one;
            }
        }
        .course{
            width: 700px;
            margin: 0 auto;
            text-align: left;
            @media (max-width: 425px) {
                width: 100%;
            }
            h6{
                margin-top: 30px;
                margin-bottom: 20px;
                letter-spacing: -0.3px;
                color: #326FEE;
                @extend %style-two;
            }
        }
    }
</style>