<template>
    <div class="footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <ul class="nav d-flex align-items-center justify-content-between">
                        <li class="nav-item">
                            <router-link class="nav-link active pl-0" to="/courses">Курсы</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/teachers">Спикеры</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/contacts">Контакты</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link pr-0" to="/faq">Часто задаваемые вопросы</router-link>
                        </li>
                    </ul>
                    <hr>
                    <div class="d-flex align-items-center justify-content-between mobile">
                        <p class="mb-0">© 2020 год,Все права защищены</p>
                        <div class="social">
                            <a href="javascript:void(0);">
                                <img src="../assets/image/social/insta.png">
                            </a>
                            <a href="javascript:void(0);">
                                <img src="../assets/image/social/telegram.png">
                            </a>
                            <a href="javascript:void(0);">
                                <img src="../assets/image/social/facebook.png">
                            </a>
                            <a href="javascript:void(0);" class="mr-0">
                                <img src="../assets/image/social/youtube.png">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 text-right app">
                    <a href="javascript:void(0);" class="mb-3 d-block">
                        <img src="../assets/image/footer/appstore.png">
                    </a>
                    <a href="javascript:void(0);">
                        <img src="../assets/image/footer/googleplay.png">
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'footer-block'
}
</script>

<style lang="scss" scoped>
    .footer{
        background: #FAFAFA;
        padding: 20px 0;
        @media (max-width: 768px) {
            padding: 10px 0;
        }
        .nav{
            li{
                a{
                    font-style: normal;
                    font-weight: 500;
                    font-size: 18px;
                    line-height: 22px;
                    color: #333333;
                }
            }
            @media (max-width: 768px) {
                display: none !important;
            }
        }
        .social{
            a{
                margin-right: 20px;
            }
            @media (max-width: 768px) {
                margin-bottom: 26px;
            }
        }
        .app{
            @media (max-width: 768px) {
                display: none !important;
            }
        }
        .mobile{
            @media (max-width: 768px) {
                flex-direction: column-reverse;
            }
        }
        hr{
            @media (max-width: 768px) {
                display: none;
            }
        }
    }
</style>