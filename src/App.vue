<template>
    <div id="app">
        <template v-if="$route.name == 'Registration'">
            <router-view/>
        </template>
        <template v-else-if="$route.name == 'Practice'">
            <HeaderTwo />
            <router-view/>
            <Footer />
        </template>
        <template v-else>
            <Header />
            <Overlay />
            <router-view class="section" id="main"/>
            <Footer />
        </template>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import HeaderTwo from '@/components/HeaderTwo.vue'
import Footer from '@/components/Footer.vue'
import Overlay from '@/components/Overlay.vue'

export default {
    name: 'app',
    components: {
        Header, Footer, HeaderTwo, Overlay
    }
}
</script>

<style>
body{
    font-family: 'Helvetica Neue' !important;
}
.section{
    min-height: calc(100vh - 244px);
    width: 100%;
}
</style>