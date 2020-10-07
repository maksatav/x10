<template>
    <div class="registration-block__form">
        <div v-if="next_block">
            <form @submit.prevent="next">
                <div class="form-group">
                    <label for="telefon">Телефон</label>
                    <!-- <input type="text" class="form-control" id="telefon" v-model="phoneNumber" required> -->
                    <div><masked-input v-model="phoneNumber" mask="\+\71111111111" /></div>
                </div>
                <button type="submit" class="btn">Дальше</button>
            </form>
        </div>
        <div class="text-center" v-if="send_block">
            <p class="nomer">{{ phoneNumber }}</p>
            <p class="sms mb-4">Мы отправили вам СМС с кодом</p>
            <form @submit.prevent="sendKod">
                <div class="form-group text-left">
                    <label for="kod">Код</label>
                    <input type="text" class="form-control" id="kod" v-model="code" placeholder="XXX" required>
                </div>
                <button type="submit" class="btn" v-if="send_kod_button">Отправить</button>
            </form>
            <p class="mb-0 minute" v-if="count_down_text">Отправить повторно через 00:{{ countDown }}</p>
            <button type="button" class="btn px-5" v-if="send_repeat_button" @click="sendRepeat">Отправить повторно</button>
        </div>
        <div class="text-center" v-if="register_block">
            <p class="nomer">Регистрация</p>
                <form @submit.prevent="register">
                <div class="form-group text-left">
                    <label for="name">Имя</label>
                    <input type="text" class="form-control" id="name" v-model="firstName" placeholder="Ваше имя" required>
                </div>
                <div class="form-group text-left">
                    <label for="surname">Фамилия</label>
                    <input type="text" class="form-control" id="surname" v-model="lastName" placeholder="Ваше фамилия" required>
                </div>
                <button type="submit" class="btn">Регистрация</button>
            </form>
        </div>
    </div>
</template>

<script>
import api from '../http-common.js'
import MaskedInput from 'vue-masked-input'
import $ from "jquery";

export default {
    name: 'auth',
    components: {
        MaskedInput 
    },
    data() {
        return{
            next_block: true,
            send_block: false,
            register_block: false,
            send_kod_button: true,
            send_repeat_button: false,
            count_down_text: true,
            countDown: 59,
            phoneNumber: '',
            code: 1111,
            token: null,
            firstName: '',
            lastName: '',
            finalData: null
        }
    },
    watch: {
      finalData() {
        this.$store.dispatch('SET_USER', this.finalData)
        this.$router.push({ name: 'Home' })
        $("#signinModal").modal('hide')
        this.next_block = true
        this.send_block = false
        this.phoneNumber = ''
        location.reload();
      }
    },
    methods: {
        next() {
            const data = {
                appVersion: '1.0',
                deviceName: 'iPhone12,1',
                deviceType: 'IOS',
                deviceUUID: 'd705defd-1e38-4739-95d5-c0b0117a58b8',
                ipAddress: '0.0.0.0',
                systemVersion: '13.1',
                phoneNumber: this.phoneNumber
            }
            api.post('/sessions/auth', data)
            .then(response => {
                this.next_block = false
                this.send_block = true
                this.countDownTimer()
                localStorage.setItem('token', response.data.token),
                this.token = response.data.token
                // console.log(response.data)
            }).catch(err => {
                alert('Ошибка')
            })
        },
        sendKod() {
            const data2 = {
                token: this.token,
                deviceUUID: 'd705defd-1e38-4739-95d5-c0b0117a58b8',
                code: this.code
            }
            api.post('/sessions/confirm', data2)
            .then(response => {
                if(response.data.sessionStatusEnum === 'ACTIVE') {
                    console.log(response)
                    localStorage.setItem('id', response.data.user.id),
                    this.finalData = response
                } else {
                    console.log(response)
                    this.register_block = true
                    this.send_block = false
                }
            }).catch(err => {
                alert('Ошибка')
            })
        },
        register() {
            const data3 = {
                token: this.token,
                deviceUUID: 'd705defd-1e38-4739-95d5-c0b0117a58b8',
                userEntity: {
                    firstName: this.firstName,
                    lastName: this.lastName
                }
            }
            api.post('/sessions/activate', data3)
            .then(response => {
                console.log(response)
                localStorage.setItem('id', response.data.user.id),
                this.finalData = response
            }).catch(err => {
                alert('Ошибка')
            })
        },
        sendRepeat() {
            this.send_repeat_button = false
            this.send_kod_button = true
            this.count_down_text = true
            this.countDownTimer()
            this.next()
        },
        countDownTimer() {
            if(this.countDown > 0) {
                setTimeout(() => {
                    this.countDown -= 1
                    this.countDownTimer()
                    if(this.countDown == 0) {
                        this.send_repeat_button = true
                        this.send_kod_button = false
                        this.count_down_text = false
                        this.countDown = 59
                    }
                }, 1000)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "../assets/css/main";
    .registration-block__form{
        width: 500px;
        padding: 50px 100px;
        background: #FFFFFF;
        box-shadow: 0px 5px 10px rgba(172, 172, 172, 0.3);
        border-radius: 30px;
        @media (max-width: 768px) {
            border-radius: 5px;
            padding: 30px 20px;
        }
        @media (max-width: 425px) {
            width: 100%;
        }
        input{
            border: none;
            border-bottom: 1px solid #8B8F8C;
            border-radius: 0;
            height: calc(1.5em + .75rem + -6px);
            box-shadow: none;
            padding-left: 2px;
            width: 100%;
            outline: none;
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
        .nomer,.sms{
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 22px;
            color: #1B213E;
        }
    }
    .minute{
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
        color: rgba(27, 33, 62, 0.5);
        margin-top: 50px;
    }
</style>