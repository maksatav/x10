<template>
    <div class="profile-settings">
        <div class="profile-settings__top">
            <h1>Настройки профиля</h1>
        </div>
        <div class="profile-settings__form d-flex align-items-start">
            <img src="../assets/image/home/2.png">
            <div class="form">
                <form>
                    <div class="form-group">
                        <label for="name">Имя</label>
                        <input type="text" class="form-control" v-model="name" id="name">
                    </div>
                    <div class="form-group">
                        <label for="surname">Фамилия</label>
                        <input type="text" class="form-control" v-model="surname" id="surname">
                    </div>
                    <div class="form-group">
                        <label for="tel">Телефон</label>
                        <input type="tel" class="form-control" v-model="phone" id="tel">
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import api from '../http-common.js'

export default {
    name: 'profile-settings',
    data() {
        return {
            name: '',
            surname: '',
            phone: ''
        }
    },
    mounted() {
        api.get('/users/' + localStorage.getItem('id'))
        .then(response => {
            this.name = response.data.firstName
            this.surname = response.data.lastName
            this.phone = response.data.phoneNumber
        })
        .catch(error => {
            alert('Ошибка');
        })
    }
}
</script>

<style lang="scss" scoped>
    @import "../assets/css/main";
    .profile-settings{
        &__top{
            background: #E8F2F5;
            padding: 26px 1rem;
            @media (max-width: 768px) {
                padding: 13px 1rem;
            }
            h1{
                width: 500px;
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
        &__form{
            width: 500px;
            margin: 0 auto;
            padding: 26px 0;
            @media (max-width: 768px) {
                flex-direction: column;
                width: 100%;
                padding: 26px 1rem;
            }
            img{
                width: 120px;
                height: 120px;
                border-radius: 50%;
                object-fit: cover;
                margin-right: 70px;
                @media (max-width: 768px) {
                    margin: 0 auto;
                    margin-bottom: 50px;
                }
            }
            .form{
                width: 100%;
                label{
                    @extend %style-one;
                    color: #333333;
                    margin-bottom: 1rem;
                }
                input{
                    border: 1px solid #BCBCBC;
                    border-radius: 5px;
                }
            }
        }
    }
</style>