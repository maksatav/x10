<template>
    <div class="registration">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-6 p-0">
                    <div class="registration-logo">
                        <img src="../assets/image/icon/logo-white.png">
                    </div>
                </div>
                <div class="col-lg-6 p-0">
                    <div class="registration-block">
                        <router-link to="/">
                            <img src="../assets/image/icon/exit.png" class="exit-desktop">
                            <img src="../assets/image/icon/exit-white.png" class="exit-mobile">
                        </router-link>
                        <img src="../assets/image/icon/logo-white.png" width="100" class="logo-mobile">
                        <Authorization />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Authorization from '@/components/Authorization.vue'

export default {
    name: 'registration',
    components: {
        Authorization
    },
}
</script>

<style lang="scss" scoped>
    @import "../assets/css/main";
    .registration{
        .row{
            margin-right: -15px;
            margin-left: -15px;
        }
        .registration-logo{
            background: #13182C;
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
                @media (max-width: 768px) {
                    display: none;
                }
        }
        .registration-block{
            position: relative;
            background: #ffffff;
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            @media (max-width: 768px) {
                background: #13182C;
            }
            @media (max-width: 425px) {
                padding: 1rem;
            }
            .logo-mobile{
                position: absolute;
                top: 6rem;
                left: 50%;
                transform: translateX(-50%);
            }
            .exit-desktop{
                position: absolute;
                top: 30px;
                right: 30px;
                @media (max-width: 768px) {
                    display: none;
                }
            }
            .exit-mobile{
                position: absolute;
                top: 30px;
                right: 30px;
                display: none;
                @media (max-width: 768px) {
                    display: block;
                }
            }
        }
    }
</style>