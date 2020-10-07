<template>
    <div class="graduates">
        <div class="graduates__top">
            <h1>Выпускники</h1>
        </div>
        <div class="graduates-container" v-if="graduates">
            <div class="row">
                <div class="col-lg-3 px-2" v-for="(user, index) in graduates.data" :key="index">
                    <router-link :to="{ name: 'Graduate', params: {id: user.id }}" class="graduate">
                        <div class="graduate-image">
                            <img :src="graduates.imageUrl" v-if="graduates.imageUrl" class="image">
                            <img src="../assets/image/icon/user.svg" v-else class="image">
                            <img src="../assets/image/icon/N1.png" class="number" v-if="index === 0">
                            <img src="../assets/image/icon/N2.png" class="number" v-else-if="index === 1">
                            <img src="../assets/image/icon/N3.png" class="number" v-else-if="index === 2">

                        </div>
                       <div>
                            <h6 class="name">{{ user.name }}</h6>
                            <hr>
                            <div class="bonus">
                                <img src="../assets/image/icon/coin.png">
                                <p class="mb-0">{{ user.originalPoints }} бонусов</p>
                            </div>
                            <div class="work mb-0">
                                <img src="../assets/image/icon/ifbc.png" :style="user.member == false ? 'opacity:0.4' : 'opacity:1'">
                                <p class="mb-0"><span class="doljnost">Должность:</span> FBC Member</p>
                            </div>
                       </div>
                       <img src="../assets/image/icon/arrow-right.png" class="arrow-right">
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'graduates',
    computed: {
        graduates(){
            return this.$store.getters.USERS()
        }
    },
    mounted() {
        this.$store.dispatch('GET_USERS')
    }
}
</script>

<style lang="scss" scoped>
    @import "../assets/css/main";
    .graduates{
        background: #f8f8f8;
        &__top{
            background: #E8F2F5;
            padding: 26px 1rem;
            @media (max-width: 768px) {
                padding: 13px 1rem;
            }
            h1{
                width: 850px;
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
        .graduates-container{
            width: 850px;
            margin: 0 auto;
            padding: 40px 0;
            @media (max-width: 768px) {
                width: 100%;
                padding: 40px 1rem;
            }
            .graduate{
                padding: 16px 10px;
                background: #ffffff;
                border-radius: 5px;
                text-align: center;
                margin-bottom: 1rem;
                display: block;
                text-decoration: none;
                @media (max-width: 768px) {
                    display: flex;
                    align-items: center;
                    margin-bottom: 0;
                }
            }
            .graduate-image{
                text-align: center;
                position: relative;
                @media (max-width: 768px) {
                    margin-right: 1rem;
                }
                .image{
                    width: 80px;
                    height: 80px;
                    object-fit: cover;
                    border-radius: 50%;
                }
                .number{
                    position: absolute;
                    right: 3rem;
                    bottom: -.5rem;
                    width: 26px;
                    height: 30px;
                    @media (max-width: 768px) {
                        width: 17px;
                        right: 5px;
                        bottom: 2px;
                        left: initial;
                        object-fit: contain;
                    }
                }
            }
            .name{
                margin-top: 15px;
                color: #333333;
                font-style: normal;
                font-weight: 500;
                font-size: 16px;
                line-height: 20px;
                @media (max-width: 768px) {
                    margin-bottom: 1rem;
                    margin-top: 0;
                    text-align: left;
                }
            }
            hr{
                @media (max-width: 768px) {
                    display: none;
                }
            }
            .doljnost{
                display: none;
                @media (max-width: 768px) {
                    display: block;
                }
            }
            .bonus,.work{
                display: flex;
                align-items: center;
                margin-bottom: 1rem;
                @media (max-width: 768px) {
                    margin-bottom: .3rem;
                }
                img{
                    width: 25px;
                    height: 16px;
                    object-fit: contain;
                    @media (max-width: 768px) {
                        display: none;
                    }
                }
                p{
                    letter-spacing: -0.3px;
                    color: #333333;
                    @extend %style-one;
                    margin-left: 20px;
                    @media (max-width: 768px) {
                        margin-left: 0;
                        display: flex;
                        align-items: center;
                        span{
                            margin-right: 8px;
                        }
                    }
                }
            }
            .arrow-right{
                display: none;
                margin-left: auto;
                @media (max-width: 768px) {
                    display: block;
                }
            }
        }
    }
</style>