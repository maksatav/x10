<template>
    <div class="header-two">
        <div class="container-fluid" v-if="user">
            <router-link to="/"><img src="../assets/image/icon/logo-white.png" class="logo"></router-link>
            <div class="ml-auto d-flex align-items-center">
                <v-progress-circular
                    :value="user.originalPoints"
                    :rotate="-90"
                    color="#326FEE"
                    :width="3"
                >
                <img src="../assets/image/icon/kubok.png" class="kubok">
                </v-progress-circular>
                <a href="javascript:void(0);" class="btn progress-button mr-4">Ваш прогресс <img src="../assets/image/icon/arrow-down-white.png" class="ml-2"></a>
                <a href="javascript:void(0);" class="btn share-button"><img src="../assets/image/icon/share2.png" class="mr-2"> Поделиться</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'header-two',
    computed: {
        user() {
            return this.$store.getters.GET_USER()
        }
    },
}
</script>

<style lang="scss" scoped>
    @import "../assets/css/main";
    .header-two{
        background: #13182C;
        padding: 20px 0;
        .container-fluid{
            padding-left: 40px;
            padding-right: 40px;
            display: flex;
            align-items: center;
            @media (max-width: 768px) {
                padding-left: 1rem;
                padding-right: 1rem;
            }
        }
        .logo{
            width: 60px;
            height: 28px;
            @media (max-width: 768px) {
                display: none;
            }
        }
        .share-button{
            @extend %style-two;
            border: 1px solid #FFFFFF;
            color: #ffffff;
            display: flex;
            align-items: center;
            @media (max-width: 768px) {
                display: none;
            }
        }
        .progress-button{
            @extend %style-one;
            color: #ffffff;
            display: flex;
            align-items: center;
            @media (max-width: 768px) {
                margin-right: 0 !important;
                img{
                    display: none;
                }
            }
        }
        .kubok{
            width: 12px;
        }
    }
</style>

<style>
    .v-progress-circular__underlay {
        stroke: #fff !important;
    }
</style>