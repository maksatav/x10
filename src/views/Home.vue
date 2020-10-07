<template>
    <div class="home">
        <div class="home-image">
        </div>
        <div class="popular-course pt-4">
            <h1 class="mb-4">Популярные курсы</h1>
            <!-- <pre>{{courses}}</pre> -->
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
                    <div class="row">
                        <div class="col-lg-4 px-2">
                        </div>
                    </div>
                </div>
            </div> -->
        </div>
        <div class="leave-nomer">
            <p>Оставьте свой номер и наш менеджер<br>
            перезвонит к вам в течении 30 минут</p>
            <button type="button" class="btn" data-toggle="modal" data-target="#nomerModal">Оставить номер</button>
        </div>
        <div class="our-students">
            <h1>Наши студенты</h1>
            <div class="container">
                <VueSlickCarousel :arrows="true" :dots="true">
                    <div>
                        <div class="slider">
                            <div class="avatar">
                                <img src="../assets/image/home/2.png" class="img">
                                <img src="../assets/image/icon/N1.png" class="nomer1">
                            </div>
                            <h6 class="name">София Арманова</h6>
                            <p class="status">Студент</p>
                            <p class="text">Английский язык является то самый большой 
                                язык по количеству говорящих, и третий 
                                по распространенности родной язык в мире,
                                после того, как Стандартный Китайский 
                                Язык и Испанский.</p>
                            <p class="bonus"><img src="../assets/image/icon/coin.png"> 300 бонусов</p>
                            <img src="../assets/image/icon/left.png" class="left-note">
                            <img src="../assets/image/icon/right.png" class="right-note">
                        </div>
                        <div class="back-one-block"></div>
                        <div class="back-two-block"></div>
                    </div>
                    <div>
                        <div class="slider">
                            <div class="avatar">
                                <img src="../assets/image/home/2.png" class="img">
                                <img src="../assets/image/icon/N1.png" class="nomer1">
                            </div>
                            <h6 class="name">София Арманова</h6>
                            <p class="status">Студент</p>
                            <p class="text">Английский язык является то самый большой 
                                язык по количеству говорящих, и третий 
                                по распространенности родной язык в мире,
                                после того, как Стандартный Китайский 
                                Язык и Испанский.</p>
                            <p class="bonus"><img src="../assets/image/icon/coin.png"> 300 бонусов</p>
                            <img src="../assets/image/icon/left.png" class="left-note">
                            <img src="../assets/image/icon/right.png" class="right-note">
                        </div>
                        <div class="back-one-block"></div>
                        <div class="back-two-block"></div>
                    </div>
                </VueSlickCarousel>
            </div>
        </div>
        <div class="our-trust">
            <h1>Нам доверяют</h1>
            <div class="container">
                <div class="row">
                    <div class="col-6 col-lg-2">
                        <img src="../assets/image/trust/1.png">
                    </div>
                    <div class="col-6 col-lg-2">
                        <img src="../assets/image/trust/2.png">
                    </div>
                    <div class="col-6 col-lg-2">
                        <img src="../assets/image/trust/3.png">
                    </div>
                    <div class="col-6 col-lg-2">
                        <img src="../assets/image/trust/4.png">
                    </div>
                    <div class="col-6 col-lg-2">
                        <img src="../assets/image/trust/5.png">
                    </div>
                    <div class="col-6 col-lg-2">
                        <img src="../assets/image/trust/6.png">
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal -->
        <div class="modal fade leave-nomer-modal" id="nomerModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body">
                        <h1>Мы с вами созвонимся</h1>
                        <form @submit.prevent="send">
                            <div class="form-group">
                                <label for="telefon2">Телефон</label>
                                <masked-input v-model="phone" class="form-control" id="telefon2" mask="\+\71111111111" required />
                            </div>
                            <button type="submit" class="btn">Отправить</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="thankyouModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header p-2">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body text-center py-5">
                        <h4>Спасибо за заявку</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import OfflineCourseCard from '@/components/OfflineCourseCard.vue'
import OnlineCourseCard from '@/components/OnlineCourseCard.vue'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import MaskedInput from 'vue-masked-input'
import $ from "jquery";

export default {
    name: 'Home',
    components: {
        OfflineCourseCard, VueSlickCarousel,
        OnlineCourseCard, MaskedInput
    },
    data() {
        return{
            phone: ''
        }
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
    },
    methods: {
        send() {
            const data = {
                date: "2020-03-31T17:30:08",
                comment: 'Test',
                phoneNumber: this.phone
            }
            this.$store.dispatch('GET_REQUEST', data)
            .then(response => {
                $('#nomerModal').modal('hide');
                $('#thankyouModal').modal('show');
            }).catch(err => {
                alert('Ошибка')
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "../assets/css/main";
    .home{
        .home-image{
            background-image: url(../assets/image/home/1.png);
            width: 100%;
            min-height: 600px;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            @media (max-width: 768px) {
                background-image: url(../assets/image/home/mobile.png);
                min-height: 240px;
            }
        }
        .popular-course{
            background: #ffffff;
            padding: 16px 0 0;
            border-bottom: 40px solid #f8f8f8;
            h1{
                color: #1B213E;
                margin-bottom: 10px;
                letter-spacing: -0.3px;
                text-align: center;
                @extend %h1;
                @media (max-width: 768px) {
                    text-align: left;
                    margin-left: 12px;
                    margin-bottom: 20px;
                }
            }
            .row{
                @media (max-width: 768px) {
                    flex-wrap: initial;
                }
            }
            .courses{
                padding: 25px 0;
                @media (max-width: 768px) {
                    overflow-x: scroll;
                }
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
            }
            .online-course{
                background: #f8f8f8;
            }
        }
        .leave-nomer{
            background: #13182C;
            padding: 60px 1rem;
            text-align: center;
            p{
                font-style: normal;
                font-weight: 500;
                font-size: 26px;
                line-height: 32px;
                text-align: center;
                letter-spacing: -0.3px;
                color: #ffffff;
                margin-bottom: 40px;
                @media (max-width: 425px) {
                    font-size: 16px;
                    line-height: 20px;
                }
            }
            button{
                background: #326FEE;
                border-radius: 5px;
                padding: 12px 67px;
                color: #ffffff;
                @extend %style-two;
                @media (max-width: 425px) {
                    width: 100%;
                }
            }
        }
        .leave-nomer-modal{
            .modal-content{
                border-radius: 30px;
            }
            .modal-body{
                padding: 40px 100px;
                box-shadow: 0px 5px 10px rgba(172, 172, 172, 0.3);
                @media (max-width: 425px) {
                    padding: 30px 20px;
                }
                h1{
                    color: #333333;
                    @extend %h1;
                    margin-bottom: 40px;
                    text-align: center;
                }
                input{
                    border: none;
                    border-bottom: 1px solid #8B8F8C;
                    border-radius: 0;
                    height: calc(1.5em + .75rem + -6px);
                    box-shadow: none;
                    padding-left: 2px;
                }
                label{
                    font-style: normal;
                    font-weight: normal;
                    font-size: 18px;
                    line-height: 21px;
                    color: #8B8F8C;
                    margin-bottom: 0;
                }
                button{
                    background: #326FEE;
                    border-radius: 5px;
                    padding: 12px 88px;
                    color: #ffffff;
                    @extend %style-two;
                    margin: 40px auto 0;
                    display: block;
                }
            }
        }
        .our-students{
            background: #f8f8f8;
            padding: 40px 0;
            h1{
                @extend %h1;
                color: #1B213E;
                text-align: center;
                margin-bottom: 40px;
                @media (max-width: 768px) {
                    text-align: left;
                    margin-left: 12px;
                    margin-bottom: 20px;
                }
            }
            .container{
                max-width: 850px;
                @media (max-width: 425px) {
                    padding: 12px 40px;
                }
            }
            .slick-slide{
                > div {
                    outline: none !important;
                    > div{
                        padding: 30px 0 60px;
                    }
                } 

            }
            .slider{
                background: #ffffff;
                text-align: center;
                width: 580px;
                margin: 0 auto;
                box-shadow: 0px 30px 60px rgba(138, 149, 158, 0.2);
                border-radius: 10px;
                padding-bottom: 35px;
                position: relative;
                z-index: 3;
                @media (max-width: 425px) {
                    width: 100%;
                    box-shadow: none;
                }
                .avatar{
                    display: inline-block;
                    margin-top: -30px;
                    position: relative;
                    .img{
                        width: 80px;
                        height: 80px;
                        border-radius: 50%;
                        border: 2px solid #ffffff;
                        margin: 0 auto;
                    }
                    .nomer1{
                        position: absolute;
                        bottom: 0;
                        right: 0;
                    }
                }
                .name{
                    font-style: normal;
                    font-weight: bold;
                    font-size: 18px;
                    line-height: 22px;
                    color: #383C4E;
                }
                .status{
                    @extend %style-one;
                    color: #B2BFCB;
                }
                .text{
                    font-style: normal;
                    font-weight: normal;
                    font-size: 14px;
                    line-height: 17px;
                    text-align: center;
                    color: #B2BFCB;
                    width: 310px;
                    margin: 0 auto;
                    @media (max-width: 425px) {
                        width: 100%;
                        padding: 0 12px;
                    }
                }
                .bonus{
                    width: 160px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 15px auto 0;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 18px;
                    line-height: 21px;
                    letter-spacing: -0.3px;
                    color: #326FEE;
                    img{
                        margin-right: 14px;
                    }
                }
                .left-note{
                    position: absolute;
                    top: 5rem;
                    left: 35px;
                    @media (max-width: 425px) {
                        top: 1rem;
                        left: 1rem;
                    }
                }
                .right-note{
                    position: absolute;
                    right: 65px;
                    bottom: 3rem;
                    @media (max-width: 425px) {
                        right: 1rem;
                        bottom: 1rem;
                    }
                }
            }
            .back-one-block{
                width: 685px;
                height: 165px;
                background: #fff;
                border-radius: 10px;
                position: absolute;
                top: 47%;
                z-index: -2;
                left: 50%;
                transform: translate3d(-50%, -50%, 0);
                // box-shadow: 0px 30px 60px rgba(138, 149, 158, 0.2);
                @media (max-width: 768px) {
                    display: none;
                }
            }
            .back-two-block{
                width: 630px;
                height: 215px;
                background: #fff;
                border-radius: 10px;
                position: absolute;
                top: 47%;
                z-index: -1;
                left: 50%;
                transform: translate3d(-50%, -50%, 0);
                // box-shadow: 0px 30px 60px rgba(138, 149, 158, 0.2);
                @media (max-width: 768px) {
                    display: none;
                }
            }
        }
        .our-trust{
            padding: 40px 0;
            text-align: center;
            h1{
                @extend %h1;
                color: #1B213E;
                text-align: center;
                margin-bottom: 40px;
                @media (max-width: 768px) {
                    text-align: left;
                    margin-left: 12px;
                    margin-bottom: 20px;
                }
            }
            img{
                width: 150px;
                height: 80px;
                object-fit: contain;
            }
            .container{
                max-width: 1360px;
            }
        }
    }
</style>

<style>
    .slick-dots li{
        margin: 0;
    }
    .slick-slider .slick-dots .slick-active button:before{
        border: 1px solid #326FEE;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        margin: 0 auto;
        background: #326FEE;
    }
    .slick-dots li button:before{
        content: '';
        border: 1px solid #326FEE;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        margin: 0 auto;
        border: 1px solid #326FEE;
        opacity: 1;
    }
    .slick-next:before{
        content: url('../assets/image/icon/next.png');
    }
    .slick-prev:before{
        content: url('../assets/image/icon/prev.png');
    }
    .slick-slide{
        position: relative;
    }
    @media (max-width: 768px) {
        .slick-prev{
            left: 0;
        }
        .slick-next{
            right: 0;
        }
    }
    @media (max-width: 425px) {
        .slick-prev{
            left: -30px;
        }
        .slick-next{
            right: -30px;
        }
    }
</style>