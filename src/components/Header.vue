<template>
    <div>
        <div class="header">
            <div class="container-fluid">
                <router-link to="/"><img src="../assets/image/icon/logo.png"></router-link>
                <div class="input-group search-form">
                    <input type="text" class="form-control search-form__input" placeholder="Ищите что угодно" aria-describedby="search">
                    <div class="input-group-append">
                        <span class="input-group-text" id="search"><img src="../assets/image/icon/search.png"></span>
                    </div>
                </div>
                <div class="spinner-border text-primary ml-auto" role="status" v-if="loading">
                    <span class="sr-only">Loading...</span>
                </div>
                <div class="header-button ml-auto" v-if="!user">
                    <button type="button" class="btn header-button__signin mr-3" data-toggle="modal" data-target="#signinModal">Войти</button>
                    <router-link to="/registration" class="btn header-button__signup">Зарегистрироваться</router-link>
                </div>

                <div class="ml-auto d-flex align-items-center" v-else>
                    <router-link to="/graduates" class="btn graduate-button"><img src="../assets/image/icon/hat.png" class="mr-1"> Выпускники</router-link>
                    <div class="btn-group">
                        <a href="javascript:void(0);" class="mycourse" id="dropdownMenuMyCourse" data-toggle="dropdown">Мои курсы <img src="../assets/image/icon/arrow-down.png" class="ml-2"></a>
                        <div class="dropdown-menu dropdown-mycourse" aria-labelledby="dropdownMenuMyCourse" v-if="mycourse">
                            <span class="dropdown-menu-arrow dropdown-menu-arrow-two"></span>
                            <h6 class="text-center" v-if="mycourse.total === 0">Курсов нет</h6>
                            <router-link :to="{ name: 'Practice', params: {id: item.id }}" class="header-mycourse mb-2" v-for="(item, index) in mycourse.data" :key="index" v-else>
                                <img :src="item.imageUrl">
                                <div class="ml-2">
                                    <h6 class="title mb-0">{{ item.title.substring(0,30) }}...</h6>
                                    <h5 class="name mb-2">{{ item.mentor.name }}</h5>
                                    <div class="d-flex align-items-center">
                                        <div class="progress">
                                            <div class="progress-bar" role="progressbar" :style="'width:' + item.progress * 100 + '%'"></div>
                                        </div>
                                        <p class="mb-0 ml-2 percent">{{ item.progress * 100 }}%</p>
                                    </div>
                                </div>
                            </router-link>
                            <router-link to="/mycourse" class="show-more">Показать еще</router-link>
                        </div>
                    </div>
                    
                    <div class="btn-group">
                        <div id="dropdownMenuProfile" data-toggle="dropdown" class="profile-image">
                            {{user.firstName.substring(0,1)}}{{user.lastName.substring(0,1)}}
                        </div>
                        <div class="dropdown-menu dropdown-profile" aria-labelledby="dropdownMenuProfile">
                            <span class="dropdown-menu-arrow"></span>
                            <router-link to="/profilesettings" class="dropdown-item" href="#">Настройки профиля</router-link>
                            <router-link to="/bonus" class="dropdown-item" href="#">Мои Х бонусы</router-link>
                            <a class="dropdown-item" href="javascript:void(0);" @click="logout">Выйти</a>
                        </div>
                    </div>
                    <!-- <pre>{{user}}</pre> -->
                </div>

            </div>

            <div class="modal fade signin-modal" id="signinModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-body">
                            <h1>Войти</h1>
                            <Authorization />
                            <!-- <form action="">
                                <div class="form-group">
                                    <label for="telefon">Телефон</label>
                                    <input type="text" class="form-control" id="telefon" required>
                                </div>
                                <button type="submit" class="btn">Войти</button>
                            </form> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <HeaderMobile class="headerMobile" />
    </div>
</template>

<script>
import HeaderMobile from '@/components/HeaderMobile.vue'
import api from '../http-common.js'
import Authorization from '@/components/Authorization.vue'

export default {
    name: 'header-block',
    components: {
        HeaderMobile, Authorization
    },
    data() {
        return{
            loading: false
        }
    },
    computed: {
        user() {
            return this.$store.getters.GET_USER()
        },
        mycourse() {
            return this.$store.getters.MY_COURSE()
        }
    },
    mounted() {
        if(localStorage.getItem('token')){
            this.$store.dispatch('GET_MY_COURSE')
        }
    },
    methods: {
        logout() {
            api.put('/sessions/logout')
            .then(response => {
                this.$store.dispatch('SET_USER')
                this.$router.push({ name: 'Home' })
            }).catch(err => {
                alert('Ошибка')
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "../assets/css/main";
    .header{
        background: #ffffff;
        padding: 12px 0;
        @media (max-width: 768px) {
            display: none;
        }
        .container-fluid{
            padding: 0 40px;
            display: flex;
            align-items: center;
        }
        .search-form{
            margin-left: 80px;
            width: 600px;
            &__input{
                background: #F2F3F5;
                color: #686F79;
                border-color: #F2F3F5;
                box-shadow: none !important;
                @extend %style-one;
            }
            .input-group-text{
                background: #F2F3F5;
                border-color: #F2F3F5;
            }
        }
        .header-button{
            &__signin{
                background: #ffffff;
                border: 1px solid #333333;
                padding: 8px 30px;
                @extend %style-two;
            }
            &__signup{
                background: #326FEE;
                border: 1px solid #326FEE;
                padding: 8px 12px;
                color: #ffffff;
                @extend %style-two;
            }
        }
        .mycourse{
            margin-right: 50px;
            color: #333333;
            @extend %style-two;
            text-decoration: none;
        }
        .graduate-button{
            margin-right: 50px;
            border: 1px solid #333333;
            color: #333333;
            padding: 10px 16px;
            @extend %style-two;
        }
        .profile-image{
            cursor: pointer;
            width: 46px;
            height: 46px;
            border-radius: 50%;
            background: #326FEE;
            color: #FFFFFF;
            @extend %style-two;
            display: flex;
            align-items: center;
            justify-content: center;
            text-transform: uppercase;
        }
        .dropdown-profile{
            left: -2.5rem !important;
            top: 10px !important;
            padding: 20px 0px;
            a{
                letter-spacing: -0.3px;
                color: #1B213E;
                @extend %style-one;
                margin-bottom: 10px;
                &:hover{
                    background: transparent;
                    color: #326FEE;
                }
            }
        }
        .dropdown-mycourse{
            top: 24px !important;
            left: -7rem !important;
            padding: 18px 12px;
            width: 330px;
        }
        .dropdown-menu{
            border-radius: 0;
            background: #F7F7F7 !important;
        }
        .header-mycourse{
            padding: 10px;
            background: #fff;
            border-radius: 5px;
            text-decoration: none;
            display: flex;
            align-items: center;
            img{
                width: 80px;
                height: 80px;
                object-fit: cover;
                border-radius: 5px;
            }
            .title{
                letter-spacing: -0.3px;
                color: #1B213E;    
                @extend %style-two;
            }
            .name{
                letter-spacing: -0.3px;
                color: #E0E0E0;
                @extend %style-one;
            }
            .progress{
                width: 100%;
                border-radius: 5px;
                height: 6px;
                .progress-bar{
                    background: #27AE60;
                }
            }
            .percent{
                font-style: normal;
                font-weight: bold;
                font-size: 12px;
                line-height: 15px;
                letter-spacing: -0.3px;
                color: #E0E0E0;
            }
        }
        .show-more{
            letter-spacing: -0.3px;
            color: #326FEE;
            @extend %style-one;
            display: block;
            text-align: center;
            margin-top: 1rem;
        }
        .signin-modal{
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
                // input{
                //     border: none;
                //     border-bottom: 1px solid #8B8F8C;
                //     border-radius: 0;
                //     height: calc(1.5em + .75rem + -6px);
                //     box-shadow: none;
                //     padding-left: 2px;
                // }
                // label{
                //     font-style: normal;
                //     font-weight: normal;
                //     font-size: 18px;
                //     line-height: 21px;
                //     color: #8B8F8C;
                //     margin-bottom: 0;
                // }
                // button{
                //     background: #326FEE;
                //     border-radius: 5px;
                //     padding: 12px 88px;
                //     color: #ffffff;
                //     @extend %style-two;
                //     margin: 40px auto 0;
                //     display: block;
                // }
            }
        }

        .dropdown-menu-arrow {
            top: -38px;
            left: 92%;
            width: 0;
            height: 0;
            position: relative;
        }
        .dropdown-menu-arrow-two{
            top: -36px;
            left: 95.5%;
        }
        .dropdown-menu-arrow:before,
        .dropdown-menu-arrow:after {
            content: "";
            position: absolute;
            display: block;
            width: 0;
            height: 0;
            border-width: 7px 8px;
            border-style: solid;
            border-color: transparent;
            z-index: 1001;
        }
        .dropdown-menu-arrow:after {
            bottom: -18px;
            right: -8px;
            border-bottom-color: #F7F7F7;
        }
        .dropdown-menu-arrow:before {
            bottom: -17px;
            right: -8px;
            border-bottom-color: rgba(0,0,0,.15);
        }
        .btn-group, .btn-group-vertical {
            position: initial;
            display: initial;
            vertical-align: initial;
        }
    }
    .headerMobile{
        display: none;
        @media (max-width: 768px) {
            display: flex;
        }
    }
    .registration-block__form{
        width: initial;
        padding: 0;
        box-shadow: none;
    }
</style>
