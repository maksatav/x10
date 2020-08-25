<template>
    <div>
        <div id="overlay" @click="closeNav()"></div>
        <div id="mySidenav" class="sidenav">
            <div class="notsign" v-if="!user">
                <ul class="list-unstyled">
                    <li><router-link to="/courses">Курсы</router-link></li>
                    <li><router-link to="/teachers">Спикеры</router-link></li>
                    <li><router-link to="/contacts">Контакты</router-link></li>
                    <li><router-link to="/faq">Часто задаваемые вопросы</router-link></li>
                </ul>
                <hr>
                <router-link to="/registration" class="btn signup">Зарегистрироваться</router-link>
                <a href="javascript:void(0);" @click="closeNav()" data-toggle="modal" data-target="#signinModalTwo" class="btn signin">Войти</a>
            </div>
            <div class="sign" v-else>
                <div v-if="menu_block">
                    <div class="profile" @click="menu_block = false, settings_block = true">
                        <div class="profile-image">
                            {{user.firstName.substring(0,1)}}{{user.lastName.substring(0,1)}}
                        </div>
                        <p class="mb-0 ml-3">{{ user.name }}</p>
                        <img src="../assets/image/icon/arrow-right-black.png" class="ml-auto">
                    </div>
                    <ul class="list-unstyled">
                        <li><router-link to="/mycourse">Мои курсы</router-link></li>
                        <li><router-link to="/graduates">Выпускники</router-link></li>
                        <hr>
                        <li><router-link to="/courses">Курсы</router-link></li>
                        <li><router-link to="/teachers">Спикеры</router-link></li>
                        <li><router-link to="/contacts">Контакты</router-link></li>
                        <li><router-link to="/faq">Часто задаваемые вопросы</router-link></li>
                        <li><a href="javascript:void(0);" @click="logout" class="exit">Выйти</a></li>
                    </ul>
                </div>
                <div v-if="settings_block">
                    <div class="profile" @click="settings_block = false, menu_block = true">
                        <img src="../assets/image/icon/arrow-left-black.png">
                        <p class="mb-0 ml-4">Меню</p>
                    </div>
                    <ul class="list-unstyled">
                        <li><router-link to="/profilesettings">Настройки</router-link></li>
                        <li><router-link to="/bonus">Мои Х бонусы</router-link></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="modal fade signin-modal" id="signinModalTwo" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body">
                        <h1>Войти</h1>
                        <form action="">
                            <div class="form-group">
                                <label for="telefon3">Телефон</label>
                                <input type="text" class="form-control" id="telefon3" required>
                            </div>
                            <button type="submit" class="btn">Войти</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'overlay',
    data() {
        return {
            menu_block: true,
            settings_block: false
        }
    },
    computed: {
        user() {
            return this.$store.getters.GET_USER()
        }
    },
    methods: {
        closeNav() {
            document.getElementById("mySidenav").style.width = "0";
            document.getElementById("main").style.marginLeft= "0";
            document.getElementById("overlay").style.width = "0";
            document.getElementById("overlay").style.opacity = "0";
        },
        logout() {
            api.put('/sessions/logout')
            .then(response => {
                this.$store.dispatch('SET_USER')
                this.$router.push({ name: 'Home' })
                $("#signinModal").modal('hide');
            }).catch(err => {
                alert('Ошибка')
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "../assets/css/main";
    .sidenav {
        height: 100%;
        width: 0;
        position: fixed;
        z-index: 4;
        top: 0;
        left: 0;
        background-color: #fff;
        overflow-x: hidden;
        transition: 0.5s;
        .notsign{
            padding: 20px 16px;
        }
        .sign{
            ul{
                padding: 20px 16px;
            }
        }
        .profile{
            display: flex;
            align-items: center;
            padding: 12px 16px;
            background: #F8F8F8;
            height: 65px;
            p{
                font-style: normal;
                font-weight: 500;
                font-size: 12px;
                line-height: 15px;
                color: #333333;
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
        }
        a{
            @extend %style-two;
            color: #333333;
            margin-bottom: 20px;
            display: block;
            transition: 0.3s
        }
        .signup{
            background: #326FEE;
            border-color: #326FEE;
            border-radius: 5px;
            @extend %style-two;
            color: #fff;
            padding: 10px;
            width: 100%;
        }
        .signin{
            background: transparent;
            border-color: #333333;
            border-radius: 5px;
            @extend %style-two;
            color: #333333;
            padding: 10px;
            width: 100%;
        }
        .exit{
            color: #E95454;
            margin-top: 40px;
        }
    }
    #main {
        transition: margin-left .5s;
    }
    #overlay{
        height: 100%;
        width: 0;
        position: fixed;
        z-index: 3;
        top: 0;
        left: 0;
        background: rgba(13, 13, 13, 0.8);
        overflow-y: auto;
        overflow-x: hidden;
        text-align: center;
        transition: .5s;
        opacity: 0;
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
</style>