<template>
    <div class="header-mobile">
        <div>
            <img src="../assets/image/icon/burger.png" @click="openNav()">
            <router-link to="/"><img src="../assets/image/icon/logo.png" class="logo-mobile"></router-link>
        </div>
        <img src="../assets/image/icon/search.png">
    </div>
</template>

<script>

export default {
    name: 'header-mobile',
    methods: {
        openNav() {
            document.getElementById("mySidenav").style.width = "260px";
            document.getElementById("main").style.marginLeft = "260px";
            document.getElementById("overlay").style.width = "100%";
            document.getElementById("overlay").style.opacity = "1";

        }
    }
}
</script>

<style lang="scss" scoped>
    .header-mobile{
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .logo-mobile{
            width: 40px;
            margin-left: 30px;
        }
    }
</style>